Player = function()
{
	this.speed = 150;
	level.onUpdate.add(function()
	{ 
		var x = input.cursors.right.isDown - input.cursors.left.isDown;
        var y = input.cursors.down.isDown - input.cursors.up.isDown;
		if (x && y) {
	    	x /= 1.4;
	    	y /= 1.4;
	    }

		this.cancelMove = false;
		level.onPrePlayerMove.dispatch()
		if (x || y){level.onPlayerMove.dispatch(this.sprite.position.x +  x*this.speed,
												this.sprite.position.y +  y*this.speed);
		}

		if(input.spacebar.isDown)
		{
			if(this.target && this.target.interact){this.target.interact()};
		}

		if(!this.cancelMove)
		{


	        this.sprite.body.velocity.x = x * this.speed;
	        this.sprite.body.velocity.y = y * this.speed;

	        
	        if (x == -1) {
	         //load left walk animation
	        }
	        if (x == 1) {
	         //load right walk animation
	        }
	        if (y == 1 && (this.sprite.animations.currentAnim || {}).name != 'Dwalk') {
	        	this.sprite.loadTexture('Dwalk');
	        	this.sprite.animations.add('Dwalk',[0,2]);
	        	this.sprite.animations.play('Dwalk', 3, true);
	        }
	        if (y == -1) {
	         //load up walk animation
	    	}
 	   }

	},this);
	this.preload = function() {
		game.load.spritesheet('Lwalk','assets/sprites/girl_left.png',170,300);
		game.load.spritesheet('Rwalk','assets/sprites/girl_right.png',170,300);
		game.load.spritesheet('Uwalk','assets/sprites/girl_up.png',170,300);
		game.load.spritesheet('Dwalk','assets/sprites/girl_down.png',170,300);
	};
	this.create = function() {
		this.sprite = game.add.sprite(level.state.player.position.x, level.state.player.position.y, 'Dwalk');
		
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	};
}