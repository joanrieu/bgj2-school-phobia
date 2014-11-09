var Helpers = {
    
    doCreateSprite: function() {
        this.bmd = game.make.bitmapData();
        this.bmd.load(this.spriteName);
        this.sprite = game.add.sprite(
            this.state.position.x,
            this.state.position.y,
            this.bmd
        );
        if (!this.small) {
            game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
            this.sprite.body.immovable = true;
        }
    },
    
    doGlow: function() {
        var DELAY = 500;
        if (player.target === this) {
            if (this.glowTween === undefined) {
                this.glowByte = 0xFF;
                this.glowTween = game.add.tween(this)
                    .to({glowByte: 0xCC}, DELAY, Phaser.Easing.Quadratic.InOut, true)
                    .to({glowByte: 0xFF}, DELAY, Phaser.Easing.Quadratic.InOut)
                    .loop();
            }
            this.sprite.tint = this.glowByte << 16 | this.glowByte << 8 | 0xFF;
        } else if (this.glowTween !== undefined) {
            this.sprite.tint = 0xFFFFFF;
            delete this.glowTween;
            delete this.glowByte;
        }
    },
    
    doLoadImage: function() {
        game.load.image(
            this.spriteName,
            'assets/sprites/' + this.spriteName + '.png'
        );
    },
    
    doSavePosition: function() {
        this.state.position = {
            x: this.sprite.body.position.x,
            y: this.sprite.body.position.y
        };
    },
    
    getPlayerDistance: function(object) {
if(object.sprite){        return Phaser.Math.distance(
            player.sprite.body.position.x,
            player.sprite.body.position.y,
            object.sprite.position.x,
            object.sprite.position.y
        );}
    else
        {console.log(object);return 1/0;}
    },
    
};
