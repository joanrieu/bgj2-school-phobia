var game = new Phaser.Game(800, 450);
var level;
var player;
var input;
var music;

game.state.add('game', {
    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        level = new Level(1);
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
    },
    update: function() {
        level.onUpdate.dispatch();
    },
    shutdown: function() {
        music.destroy();
    }
});

game.state.add('title', {
    preload: function() {
        game.load.audio('titleAudio', ['assets/audio/title.mp3', 'assets/audio/title.ogg']);
    },
    create: function() {
        input = {
            enter: game.input.keyboard.addKey(Phaser.Keyboard.ENTER),
            spacebar: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            cursors: game.input.keyboard.createCursorKeys()
            //add numbers for inventory?
        };
         music = game.add.audio('titleAudio', 1, true);
         music.play('', 1, true);
    },
    update: function() {
        if(input.enter.isDown || input.spacebar.isDown)
            game.state.start('game');
    },
    shutdown: function() {
        music.destroy();
    }
}, true);
