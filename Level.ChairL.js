Level.ChairL = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'chairL';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    
};