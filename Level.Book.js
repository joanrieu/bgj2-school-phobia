Level.Book = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'book';
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    
};