Level.Table = function(level, state) {
    
    level.onLevelStart_preload.add(function() {
        game.load.image('table', 'assets/sprites/table.png');
    }, this);
    
    level.onLevelStart_create.add(function() {
        this.bmd = game.make.bitmapData();
        this.bmd.load('table');
        this.sprite = game.add.sprite(
            state.position.x,
            state.position.y,
            this.bmd
        );
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        game.debug.body(this.sprite.body);
    }, this);
    
};
