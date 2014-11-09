Level.Drawings = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'drawings';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    
};