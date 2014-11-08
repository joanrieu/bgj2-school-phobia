Player = function()
{
	this.speed = 150;
	this.lastDirection = 'Down';
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
		else
		{
			this.sprite.animations.play(this.lastDirection, 1, true);
		}

		if(input.spacebar.isDown)
		{
			if(this.target && this.target.interact){this.target.interact()};
		}

		if(!this.cancelMove)
		{


	        this.sprite.body.velocity.x = x * this.speed;
	        this.sprite.body.velocity.y = y * this.speed;

	        
	        if (x == -1 && (this.sprite.animations.currentAnim || {}).name != 'Lwalk') {
	        	this.sprite.animations.play('Lwalk', 5, true);
	        	this.lastDirection='Left';
	        }
	        if (x == 1 && (this.sprite.animations.currentAnim || {}).name != 'Rwalk') {
	        	this.sprite.animations.play('Rwalk', 5, true);
	        	this.lastDirection='Right';
	        }
	        if (y == 1 && (this.sprite.animations.currentAnim || {}).name != 'Dwalk') {
	        	this.sprite.animations.play('Dwalk', 3, true);
	        	this.lastDirection='Down';
	        }
	        if (y == -1 && (this.sprite.animations.currentAnim || {}).name != 'Uwalk') {
	        	this.sprite.animations.play('Uwalk', 3, true);
	        	this.lastDirection='Up';
	        }
 	   }

	},this);
	this.preload = function() {
		game.load.spritesheet('walk','assets/sprites/girl.png',170,300);

	};
	this.create = function() {
		this.sprite = game.add.sprite(level.state.player.position.x, level.state.player.position.y, 'walk');
		this.sprite.animations.add('Dwalk',[0,2]);
		this.sprite.animations.add('Lwalk',[4,3,5,6,3,7]);
		this.sprite.animations.add('Rwalk',[8,12,9,10,12,11]);
		this.sprite.animations.add('Uwalk',[13,15]);
		this.sprite.animations.add('Down',[1]);
		this.sprite.animations.add('Left',[3]);
		this.sprite.animations.add('Right',[12]);
		this.sprite.animations.add('Up',[14]);
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	};
}