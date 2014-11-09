Level.DoorHidden = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'doorhidden';
    this.small = true;
    

    level.onLevelStart_preload.add(function() {
        game.load.spritesheet('door','assets/sprites/doorclosed.png',20,300);
    }, this);
    level.onLevelStart_create.add(function() { 
        this.sprite = game.add.sprite(state.position.x, state.position.y, 'door');
        this.sprite.animations.add('doorclosed',[0]);
        this.sprite.animations.add('dooropen',[1]);
        this.sprite.animations.play('doorclosed', 1, true);
        }, this);
    level.onUpdate.add(Helpers.doGlow, this);
    // level.onLevelChange.add(Helpers.doSavePosition, this);
    
    this.interact = function() {
        
        if(player.hasKey && state.closed)
        {
            player.hasKey = false;
            state.closed = true;
            this.sprite.animations.play('dooropen', 1, true);
        }
        if(!state.closed)
        {
        level.onLevelChange.dispatch(state.destination);
    }
    };
    
};
