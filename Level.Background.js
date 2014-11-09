var SHIFT=50;

Level.Background = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = state.nameFile;
    
     game.world.setBounds(0, 0, 1600, 450);

    level.onLevelStart_preload.add(Helpers.doLoadImage, this);
    level.onLevelStart_create.add(Helpers.doCreateSprite, this);



    level.onPrePlayerMove.add(function() {
        //to do by Joan      
    },this);
};