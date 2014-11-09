Level.DefaultFurniture = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = state.type.toLowerCase();
    
    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    //level.onUpdate.add(Helpers.doGlow, this);
    //level.onLevelChange.add(Helpers.doSavePosition, this);
    level.onLevelStart_create.add(function()
         {
            this.sprite.anchor.setTo(0.6,0.7)
            this.sprite.position.x += this.sprite.body.width*0.6;
            this.sprite.position.y += this.sprite.body.height*0.7;
            this.sprite.body.width = this.sprite.body.width * 0.6;
            this.sprite.body.height = this.sprite.body.height * 0.6;
}, this)     
};

Level.DefaultFurniture.TYPES = [
    'Bookcase',
    'BTable',
    'ChairR',
    'ChairL',
    'Closet',
    'Table',
    'BookCase',
    'Box',
    'Toilet',
    'Sink',
    'Drawers',
    'Vase',
    'RailCoat',
    'Clock',
    'ArmChair',
    'Couch',
    'Desk'
];
