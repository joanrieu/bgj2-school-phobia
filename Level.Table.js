Level.Table = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'table';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    level.onUpdate.add(Helpers.doGlow, this);
    level.onLevelSwitch.add(Helpers.doSavePosition, this);
    
};
