var SHIFT=50;

Level.Background = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = state.nameFile;
    this.small = true;
    

    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);
    level.onLevelStart_create.add(function() {
        game.world.setBounds(0, 0, this.sprite.width, this.sprite.height);
    }, this);
};
