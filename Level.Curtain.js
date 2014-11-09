Level.Curtain = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'curtain';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    
};