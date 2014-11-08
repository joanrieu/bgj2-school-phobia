Level.Door = function(level, state) {
    var DIST_INTERACT = 100;
    var bmd,sprite;
    var glow = false;
    var timer = 0;
    var isGlowing = false;
    var change = function() {
                level.onLevelChange.dispatch(state.destination);
            };
    level.onLevelStart_preload.add(function() {
        game.load.image('door', 'assets/sprites/door.png');
    }, this);
    
    level.onLevelStart_create.add(function() {
        bmd = game.make.bitmapData();
        bmd.load('door');
        sprite = game.add.sprite(
                state.position.x,
                state.position.y,
                bmd
            );
    }, this);

    level.onPlayerMove.add(function() {
        if(Phaser.Math.distance(level.state.player.position.x,
                                level.state.player.position.y,
                                state.position.x,
                                state.position.y) < DIST_INTERACT)
        {
            level.onPlayerAction.add(change,this);
            glow = true;

        }
        else
        {
            level.onPlayerAction.remove(change,this);
            glow =false;   
        }

    },this);
    
    level.onUpdate.add(function() {
        if (glow)
        {
            timer+=game.time.elapsed;
            if(timer > 500)
            {
                if(isGlowing)
                    {bmd.shiftHSL(0, -0.1 , -0.05);
                        isGlowing = false;}
                else
                    {bmd.shiftHSL(0, 0.1 , 0.05);
                        isGlowing=true;}
            timer = 0;
            }
        }
        else
        {
            if(isGlowing){bmd.shiftHSL(0, 0.1 , 0.05);isGlowing = false;}
        }
    },this)
};