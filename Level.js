var Level = function(id) {
    
    this.onLevelStart_preload = new Phaser.Signal();
    this.onLevelStart_create = new Phaser.Signal();
    this.onPrePlayerMove = new Phaser.Signal();
    this.onPlayerMove = new Phaser.Signal();
    this.onLevelChange = new Phaser.Signal();
    this.onPlayerAction = new Phaser.Signal();
    this.onObjectPick = new Phaser.Signal();
    this.onObjectDrag = new Phaser.Signal();
    this.onObjectMuahaha = new Phaser.Signal();
    this.onPlayerHurt = new Phaser.Signal();
    this.onUpdate = new Phaser.Signal();
    this.onGameOver = new Phaser.Signal();
    
    this.state = LEVELS[id];
    
    for (var i in this.state.objects) {
        var o = this.state.objects[i];
        try {
            new Level[o.type](this, o);
        } catch(e) {
            console.warn(o.type + ' not implemented');
        }
    }
    
};

var LEVELS = [
    {
        id: 0,
    },
    {
        id: 1,
        player: {
            position: {
                0: { x: 10, y: 10 },
                2: { x: 300, y: 300 }
            }
        },
        objects: [
            {
                type: 'Table',
                position: { x: 200, y: 200 }
            },
            {
                type: 'Phone',
                position: { x: 400, y: 200 }
            },
            {
                type: 'Door',
                position: { x: 500, y: 300 },
                destination: 2
            }
        ]
    },
    {
        id: 2,
        player: {
            position: {
                1: { x: 500, y: 250 }
            },
        },
        objects: [
            {
                type: 'Door',
                position: { x: 500, y: 300 },
                destination: 1
            }
        ]
    }
];
