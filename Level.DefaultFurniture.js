Level.DefaultFurniture = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = state.type.toLowercase();
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    //level.onUpdate.add(Helpers.doGlow, this);
    //level.onLevelChange.add(Helpers.doSavePosition, this);
    
};

Level.DefaultFurniture.TYPES = [
    'Bookcase',
    'BTable',
    'ChairR',
    'ChairL',
    'Closet',
    'Table',
];
