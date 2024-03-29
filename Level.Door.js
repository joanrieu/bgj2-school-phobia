Level.Door = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'door';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    level.onUpdate.add(Helpers.doGlow, this);
    // level.onLevelChange.add(Helpers.doSavePosition, this);
    
    this.interact = function() {
        if(!state.closed || hasKey)
        {
            if(state.closed) { game.state.start('win');}
            level.onLevelChange.dispatch(state.destination);
        }
    };
    
};
