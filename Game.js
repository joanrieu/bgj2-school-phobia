var game = new Phaser.Game(800, 450);
var level;

game.state.add('test', {
    preload: function() {
        level = new Level(1);
        level.onLevelStart_preload.dispatch();
    },
    create: function() {
        level.onLevelStart_create.dispatch();
    }
}, true);

// BORDEL BELOW :D -------------------------------------------------------------

var g = {
    player: {
        speed: 150
    }
};

game.state.add('menu', {
    preload: function() {
        //game.load.image('title', 'assets/sprites/titlescreen.png');
        game.load.audio('titleAudio', ['assets/audio/title.mp3', 'assets/audio/title.ogg'])
    },
    create: function() {
        ///game.physics.startSystem(Phaser.Physics.ARCADE);
        //   g.title.sprite = game.add.sprite(0, 0, 'title');
        //game.physics.enable(g.player.sprite, Phaser.Physics.ARCADE);
        g.keys = {
            enter: game.input.keyboard.addKey(Phaser.Keyboard.ENTER),
            spacebar: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        };
        g.music = game.add.audio('titleAudio', 1, true);
        g.music.play('', 1, true);
    },
    update: function() {
        if (g.keys.enter.isDown || g.keys.spacebar.isDown) {
            game.state.start('level1');
        }
    },
    shutdown: function() {
        g.music.destroy();
    }

});
game.state.add('level1', {
    preload: function() {
        game.load.image('girl_down', 'assets/sprites/girl_down.png');
        game.load.image('girl_up', 'assets/sprites/girl_up.png');
        game.load.image('girl_left', 'assets/sprites/girl_left.png');
        game.load.image('girl_right', 'assets/sprites/girl_right.png');
        game.load.audio('gameAudio', ['assets/audio/game.mp3', 'assets/audio/game.ogg']);
    },
    create: function() {
        g.player.bmds = [game.make.bitmapData(),
            game.make.bitmapData(),
            game.make.bitmapData(),
            game.make.bitmapData()
        ]
        g.player.bmds[0].load('girl_down');
        g.player.bmds[1].load('girl_up');
        g.player.bmds[2].load('girl_left');
        g.player.bmds[3].load('girl_right');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        g.player.sprite = game.add.sprite(0, 0, g.player.bmds[0]);
        game.physics.enable(g.player.sprite, Phaser.Physics.ARCADE);
        g.cursors = game.input.keyboard.createCursorKeys();
        music = game.add.audio('gameAudio', 1, true);
        music.play('', 1, true);

        game.stage.smoothed = false;

        //g.player.bmd.shiftHSL(0, -0.4 , -0.2);

    },
    update: function() {
        var x = g.cursors.right.isDown - g.cursors.left.isDown;
        var y = g.cursors.down.isDown - g.cursors.up.isDown;
        if (x && y) {
            x /= 1.4;
            y /= 1.4;
        }
        g.player.sprite.body.velocity.x = x * g.player.speed;
        g.player.sprite.body.velocity.y = y * g.player.speed;
        if (x == -1) {
            g.player.sprite.loadTexture(g.player.bmds[2]);
        }
        if (x == 1) {
            g.player.sprite.loadTexture(g.player.bmds[3]);
        }
        if (y == 1) {
            g.player.sprite.loadTexture(g.player.bmds[0]);
        }
        if (y == -1) {
            g.player.sprite.loadTexture(g.player.bmds[1]);
        }
    }

});
