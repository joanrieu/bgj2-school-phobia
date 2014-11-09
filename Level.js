var Level = function(id) {
    
    this.onLevelStart_preload = new Phaser.Signal();
    this.onLevelStart_create = new Phaser.Signal();
    this.onPrePlayerMove = new Phaser.Signal();
    this.onPlayerMove = new Phaser.Signal();
    this.onLevelChange = new Phaser.Signal();
    this.onUpdate = new Phaser.Signal();
    this.onGameOver = new Phaser.Signal();
    
    this.state = LEVELS[id];
    this.objects = [];
    for (var i in this.state.objects) {
        var state = this.state.objects[i];
        if (Level[state.type])
            this.objects.push(new Level[state.type](this, state));
        else
            console.warn(state.type + ' not implemented');
    }
    
};

