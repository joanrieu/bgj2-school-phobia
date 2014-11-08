var game = new Phaser.Game(800, 450);
var g = {
    player: {
        speed: 150
    }
};

game.state.add('menu', {
    preload: function() {
        game.load.image('girl', 'assets/girl.png');
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        g.player.sprite = game.add.sprite(0, 0, 'girl');
        game.physics.enable(g.player.sprite, Phaser.Physics.ARCADE);
        g.cursors = game.input.keyboard.createCursorKeys();
    },
    update: function() {
        g.player.sprite.body.velocity.x = (g.cursors.right.isDown - g.cursors.left.isDown) * g.player.speed;
        g.player.sprite.body.velocity.y = (g.cursors.down.isDown - g.cursors.up.isDown) * g.player.speed;
    }
}, true);
