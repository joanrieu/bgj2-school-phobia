var Helpers = {
    
    doCreateSprite: function() {
        this.bmd = game.make.bitmapData();
        this.bmd.load(this.spriteName);
        this.sprite = game.add.sprite(
            this.state.position.x,
            this.state.position.y,
            this.bmd
        );
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    },
    
    doGlow: function() {
        var DELAY = 500, H = 0, S = 0.1, L = 0.05;
        if (player.target === this) {
            if (!this.glowTimer)
                this.glowTimer = 0;
            if ((this.glowTimer += game.time.elapsed) > DELAY) {
                this.glowTimer -= DELAY;
            }
            if (this.glow === 'on') {
                this.glow = 'off';
                this.bmd.shiftHSL(-H, -S, -L);
            } else {
                this.glow = 'on';
                this.bmd.shiftHSL(H, S, L);
            }
        } else if (this.glow !== undefined) {
            if (this.glow === 'on')
                this.bmd.shiftHSL(-H, -S, -L);
            delete this.glow;
            delete this.glowTimer;
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
        return Phaser.Math.distance(
            player.sprite.body.position.x,
            player.sprite.body.position.y,
            object.sprite.body.position.x,
            object.sprite.body.position.y
        );
    }
    
};
