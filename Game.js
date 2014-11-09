var game = new Phaser.Game(800, 450);
var level;
var player;
var input;
var music;

game.state.add('game', {
    preload: function() {
          game.physics.startSystem(Phaser.Physics.ARCADE);
        level = new Level();
        player = new Player();
        player.preload();
        level.onLevelStart_preload.dispatch();
        game.load.audio('gameAudio', ['assets/audio/game.mp3', 'assets/audio/game.ogg']);
    },
    create: function() {
        level.onLevelStart_create.add(player.create, player);
        level.onLevelStart_create.dispatch();
        music = game.add.audio('gameAudio', 1, true);
        music.play('', 1, true);
        game.camera.follow(player.sprite);
        game.camera.deadzone = new Phaser.Rectangle(player.sprite.body.width, 0, 800 - 3*player.sprite.body.width, 450);
        //game.physics.arcade.setBoundsToWorld(0,0,game.width,game.height);
    },
    update: function() {
        level.onUpdate.dispatch();
    },
    shutdown: function() {
        music.destroy();
    },
    render: function()
    {
        // game.debug.body(player.sprite);
        // for (var i = 0; i < level.objects.length; i++) {
        //     if(level.objects[i].state.type != 'ChairL')
        //     game.debug.body(level.objects[i].sprite);
        // };
    }
});

var titlesprite;
game.state.add('title', {

    preload: function() {
        game.load.audio('titleAudio', ['assets/audio/title.mp3', 'assets/audio/title.ogg']);
        game.load.spritesheet('title','assets/sprites/title.png',   500,500);
    },
    create: function() {
        input = {
            enter: game.input.keyboard.addKey(Phaser.Keyboard.ENTER),
            spacebar: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            cursors: game.input.keyboard.createCursorKeys()
            //add numbers for inventory?
        };

        titlesprite = game.add.sprite(game.width/2 -250,0, 'title');
        titlesprite.animations.add('girl',[0,1,2,3,4,5,6,7,8]);
        titlesprite.animations.play('girl', 2, false);
        music = game.add.audio('titleAudio', 1, true);
        music.play('', 1, true);
    },
    update: function() {
        if(input.enter.isDown || input.spacebar.isDown)
            {game.state.start('game');}

    },
    shutdown: function() {
        music.destroy();
    }
}, true);
