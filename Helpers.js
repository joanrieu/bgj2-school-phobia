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
        } else if (this.glowTimer !== undefined) {
            if (this.glow === 'on')
                this.bmd.shiftHSL(-H, -S, -L);
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
            object.state.position.x,
            object.state.position.y
        );
    },
    
    onUpdateGlow: function() {
        if (this.glow) {
            //this.bmd.shiftHSL(0, 0.1, 0.05);
        }
    }
    
};
