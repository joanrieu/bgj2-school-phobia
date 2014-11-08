var game = new Phaser.Game(800, 450);
var g = {
    player: {
        speed: 150
    }
};

game.state.add('menu', {
    preload: function() {
        //game.load.image('title', 'assets/sprites/titlescreen.png');
        game.load.audio('titleAudio', ['assets/audio/title.mp3','assets/audio/title.ogg'])
    },
    create: function() {
        ///game.physics.startSystem(Phaser.Physics.ARCADE);
     //   g.title.sprite = game.add.sprite(0, 0, 'title');
        //game.physics.enable(g.player.sprite, Phaser.Physics.ARCADE);
        g.keys = {
            enter: game.input.keyboard.addKey(Phaser.Keyboard.ENTER),
            spacebar: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        };
        g.music = game.add.audio('titleAudio',1,true);
        g.music.play('',1,true);
    },
    update: function() {
                if (g.keys.enter.isDown || g.keys.spacebar.isDown) {game.state.start('level1')};
            },
    shutdown: function() {
                g.music.destroy();
            }

}, true);
game.state.add('level1',
    {
  preload: function() {
        game.load.image('girl', 'assets/sprites/girl.png');
        game.load.audio('gameAudio', ['assets/audio/game.mp3','assets/audio/game.ogg']);
                        console.log("coucou");
    },
    create: function() {
            g.player.bmd = game.make.bitmapData();

    g.player.bmd.load('girl');

        game.physics.startSystem(Phaser.Physics.ARCADE);
        g.player.sprite = game.add.sprite(0, 0, g.player.bmd);
        game.physics.enable(g.player.sprite, Phaser.Physics.ARCADE);
        g.cursors = game.input.keyboard.createCursorKeys();
        music = game.add.audio('gameAudio',1,true);
        music.play('',1,true);


//    g.player.bmd.addToWorld(game.world.centerX, game.world.centerY, 0, 0, 0, 0);

    game.stage.smoothed = false;
  
//g.player.bmd.shiftHSL(0, -0.4 , -0.2);
  
    },
    update: function() {
        g.player.sprite.body.velocity.x = (g.cursors.right.isDown - g.cursors.left.isDown) * g.player.speed;
        g.player.sprite.body.velocity.y = (g.cursors.down.isDown - g.cursors.up.isDown) * g.player.speed;
        
    }

    });