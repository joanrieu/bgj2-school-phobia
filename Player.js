Player = function()
{

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
		if (x || y){level.onPlayerMove.dispatch(player.sprite.position.x +  x*this.speed,
												player.sprite.position.y +  y*this.speed);
		}

		if(input.cursors.spacebar.isDown)
		{
			if(this.target && this.target.interact){this.target.interact()};
		}

		if(!this.cancelMove)
		{


	        player.sprite.body.velocity.x = x * this.speed;
	        player.sprite.body.velocity.y = y * this.speed;

	        if (x == -1) {
	         //load left walk animation
	        }
	        if (x == 1) {
	         //load right walk animation
	        }
	        if (y == 1) {
	         //load down walk animation
	        }
	        if (y == -1) {
	         //load up walk animation
	    	}
 	   }

	},this);
	this.preload = function() {
		this.Lwalk = game.load.spritesheet('Lwalk','assets/sprites/girl_left.png',170,300);
		this.Rwalk = game.load.spritesheet('Lwalk','assets/sprites/girl_right.png',170,300);
		this.Uwalk = game.load.spritesheet('Lwalk','assets/sprites/girl_up.png',170,300);
		this.Dwalk = game.load.spritesheet('Lwalk','assets/sprites/girl_down.png',170,300);
	};
}