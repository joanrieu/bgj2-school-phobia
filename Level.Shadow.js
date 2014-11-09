Level.Shadow = function(level, state) {
    
    this.level = level;
    this.state = state;
    this.spriteName = 'shadow';
    
    level.onLevelStart_preload.add(function()
    	{game.load.spritesheet('fly','assets/sprites/ombre.png',419,300);
    	}, this);
    level.onLevelStart_create.add(function() {
    	this.sprite = game.add.sprite(this.state.position.x, this.state.position.y, 'fly');
		this.sprite.animations.add('fly',[0,1,2]);
    }, this);
    
    level.onUpdate.add(function() {
    	this.sprite.animations.play('fly', 3, true);

    	if(player.sprite.position.x < this.sprite.position.x){this.sprite.position.x += Math.abs(player.sprite.body.velocity.x*game.time.elapsed/1000);}
    	if(player.sprite.position.x > this.sprite.position.x){this.sprite.position.x -= Math.abs(player.sprite.body.velocity.x*game.time.elapsed/1000);}
    	if(player.sprite.position.y < this.sprite.position.y){this.sprite.position.y += Math.abs(player.sprite.body.velocity.y*game.time.elapsed/1000);}
    	if(player.sprite.position.y > this.sprite.position.y){this.sprite.position.y += Math.abs(player.sprite.body.velocity.y*game.time.elapsed/1000);}
    },this);
};