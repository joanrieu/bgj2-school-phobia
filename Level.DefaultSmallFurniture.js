Level.DefaultSmallFurniture = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = state.type.toLowerCase();
    this.small = true;
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    //level.onUpdate.add(Helpers.doGlow, this);
    //level.onLevelChange.add(Helpers.doSavePosition, this);
    
};

Level.DefaultSmallFurniture.TYPES = [
    'Book',
    'Drawings',
    'PencilCase',
    'Phone',
    'SetSquare',
    'Window',
    'Mirror','Sink','Box','WaterPuddle','Bucket','Shelf','Key',

];
