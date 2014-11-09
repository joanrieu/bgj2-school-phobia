var Level = function(id) {
    
    this.onLevelStart_preload = new Phaser.Signal();
    this.onLevelStart_create = new Phaser.Signal();
    this.onPlayerMove = new Phaser.Signal();
    this.onLevelChange = new Phaser.Signal();
    this.onUpdate = new Phaser.Signal();
    this.onRender = new Phaser.Signal();
    this.onGameOver = new Phaser.Signal();
    
    this.state = LEVELS[id];
    this.objects = [];
    for (var i in this.state.objects) {
        var state = this.state.objects[i];
        if (Level.DefaultFurniture.TYPES.indexOf(state.type) != -1)
            ;
        else if (Level.DefaultSmallFurniture.TYPES.indexOf(state.type) != -1)
            ;
        else if (Level[state.type])
            this.objects.push(new Level[state.type](this, state));
        else
            console.warn(state.type + ' not implemented');
    }
    
    this.onLevelStart_create.add(function() {
        var overlay = new Phaser.Graphics(game, 0, 0);
        overlay.beginFill(0x000000, 0.8);
        overlay.drawRect(0, 0, game.width, game.height);
        overlay.endFill();
        this.overlay = game.add.image(0, 0, overlay.generateTexture());
    }, this, -1);
    
};
