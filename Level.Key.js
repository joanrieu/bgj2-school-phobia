Level.Key = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'key';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    level.onUpdate.add(Helpers.doGlow, this);
    // level.onLevelChange.add(Helpers.doSavePosition, this);
    
    this.interact = function() {
        hasKey = true;
        this.sprite.destroy();
    };
    
};
