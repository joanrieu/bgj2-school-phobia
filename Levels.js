var LEVELS = [{
        id: 0,
    }, {
        id: 1, //firstRoom
        player: {
            position: {
                0: {
                    x: 10,
                    y: 10
                },
                4: {
                    x: 1330,
                    y: 300
                }
            }
        },
        objects: [{
            type: 'Background',
            position: {
                x: 0,
                y: 0
            },
            nameFile: 'room1',
        }, {
            type: 'Closet',
            position: {
                x: 0,
                y: 0
            }
        }, {
            type: 'Table',
            position: {
                x: 279,
                y: 307
            }
        },  {
            type: 'Table',
            position: {
                x: 247,
                y: 193
            }
        }, {
            type: 'Table',
            position: {
                x: 508,
                y: 297
            }
        }, {
            type: 'Table',
            position: {
                x: 489,
                y: 190
            }
        }, {
            type: 'Table',
            position: {
                x: 898,
                y: 194
            }
        }, {
            type: 'Table',
            position: {
                x: 930,
                y: 307
            }
        }, {
            type: 'Table',
            position: {
                x: 1140,
                y: 190
            }
        }, {
            type: 'Table',
            position: {
                x: 1159,
                y: 297
            }
        }, {
            type: 'BTable',
            position: {
                x: 1407,
                y: 244
            }
        }, {
            type: 'ChairL',
            position: {
                x: 1538,
                y: 259
            }
        }, {
            type: 'ChairR',
            position: {
                x: 1128,
                y: 312
            }
        }, {
            type: 'ChairR',
            position: {
                x: 1109,
                y: 205
            }
        }, {
            type: 'ChairR',
            position: {
                x: 899,
                y: 322
            }
        }, {
            type: 'ChairR',
            position: {
                x: 867,
                y: 209
            }
        }, {
            type: 'ChairR',
            position: {
                x: 477,
                y: 312
            }
        }, {
            type: 'ChairR',
            position: {
                x: 458,
                y: 205
            }
        }, {
            type: 'ChairR',
            position: {
                x: 248,
                y: 322
            }
        }, {
            type: 'ChairR',
            position: {
                x: 216,
                y: 209
            }
        }, {
            type: 'Window',
            position: {
                x: 343,
                y: 0
            }
        }, {
            type: 'Window',
            position: {
                x: 873,
                y: 0
            }
        }, {
            type: 'Window',
            position: {
                x: 1364,
                y: 0
            }
        }, {
            type: 'Window',
            position: {
                x: 1364,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 255,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 453,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 837,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 927,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 1277,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 1475,
                y: 0
            }
        }, {
            type: 'Bookcase',
            position: {
                x: 588,
                y: 0
            }
        }, {
            type: 'Drawings',
            position: {
                x: 1100,
                y: 8
            }
        }, {
            type: 'Book',
            position: {
                x: 296,
                y: 203
            }
        }, {
            type: 'Book',
            position: {
                x: 315,
                y: 306
            }
        }, {
            type: 'Book',
            position: {
                x: 520,
                y: 203
            }
        }, {
            type: 'Book',
            position: {
                x: 539,
                y: 306
            }
        }, {
            type: 'Book',
            position: {
                x: 947,
                y: 203
            }

        }, {
            type: 'Book',
            position: {
                x: 966,
                y: 306
            }
        }, {
            type: 'Book',
            position: {
                x: 1171,
                y: 203
            }
        }, {
            type: 'Book',
            position: {
                x: 1190,
                y: 306
            }
        }, {
            type: 'Book',
            position: {
                x: 1469,
                y: 256
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 309,
                y: 199
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 346,
                y: 324
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 554,
                y: 197
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 569,
                y: 309
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 955,
                y: 199
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 997,
                y: 319
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 999,
                y: 196
            }
        }, {
            type: 'PencilCase',
            position: {
                x: 420,
                y: 300
            }
        },
        //  {
        //     type: 'Phone',
        //     position: {
        //         x: 400,
        //         y: 200
        //     }
        // },
         {
            type: 'DoorHidden',
            position: {
                x: 1320,
                y: 366
            },
            destination: 4 //hall
        }, ]
    }, {
        id: 2,
        player: {
            position: {
                4: {
                    x: 500,
                    y: 250
                }
            },
        },
        objects: [
          {
            type: 'Background',
            position: {
                x: 0,
                y: 0
            },
            nameFile: 'room2',
        },
        {

                type: 'Door',
                position: {
                    x: 1467,
                    y: -46
                },
                            destination: 4
            }, {
                type: 'Board',
                position: {
                    x: 211,
                    y: 0
                }
            }, {
                type: 'Drawings',
                position: {
                    x: 402,
                    y: 5
                }
            }, {
                type: 'SetSquare',
                position: {
                    x: 683,
                    y: 14
                }
            }, {
                type: 'Table',
                position: {
                    x: 236,
                    y: 173
                }
            }, {
                type: 'Table',
                position: {
                    x: 433,
                    y: 274
                }
            }, {
                type: 'Table',
                position: {
                    x: 617,
                    y: 173
                }
            }, {
                type: 'Table',
                position: {
                    x: 952,
                    y: 274
                }
            }, {
                type: 'Table',
                position: {
                    x: 1255,
                    y: 180
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 205,
                    y: 188
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 334,
                    y: 188
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 402,
                    y: 289
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 531,
                    y: 289
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 586,
                    y: 188
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 716,
                    y: 188
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 921,
                    y: 289
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 1050,
                    y: 289
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 1224,
                    y: 195
                }
            }, {
                type: 'ChairL',
                position: {
                    x: 1353,
                    y: 195
                }
            }, {
                type: 'Drawers',
                position: {
                    x: 1003,
                    y: 114
                }
            }, {
                type: 'DeadHead',
                position: {
                    x: 1043,
                    y: 77
                }
            }, {
                type: 'Cage',
                position: {
                    x: 1136,
                    y: 66
                }
            }, {
                type: 'Shelf',
                position: {
                    x: 818,
                    y: 27
                }
            }, {
                type: 'Key',
                position: {
                    x: 875,
                    y: 66
                }
            }, {
                type: 'Box',
                position: {
                    x: 876,
                    y: 68
                }
            },
]
    }, {
        id: 3, //toilet
        player: {
            position: {
                4: {
                    x: 500,
                    y: 250
                }
            },
        },
        objects: [
             {
                type: 'Background',
                position: {
                    x: 0,
                    y: 0
                },
                nameFile: 'room3',
            },
             {
                type: 'Text',
                position: {
                    x: 296,
                    y: 99
                }
            }, {
                type: 'Mirror',
                position: {
                    x: 41,
                    y: 17
                }
            }, {
                type: 'Sink',
                position: {
                    x: 15,
                    y: 59
                }
            },
{
                type: 'Toilet',
                position: {
                    x: 250,
                    y: -50
                }
            },
             {
                type: 'WaterPuddle',
                position: {
                    x: 656,
                    y: 284
                }
            }, {
                type: 'Bucket', //animation
                position: {
                    x: 705,
                    y: 273
                }

            }, {
                type: 'Box',
                position: {
                    x: 156,
                    y: 314
                }
            },
 {
                type: 'Shadow',
                position: {
                    x: 656,
                    y: 314
                }
            },
             {
                type: 'BigBox', //animation 4 frame 
                position: {
                    x: 287,
                    y: 260
                }
            }, 

        ]
    }, {
        id: 4, //hall1
        player: {
            position: {
                1: {
                    x: 1470,
                    y: 194
                },
                2: {
                    x:920,
                    y: 492
                },
                3: {
                    x:1465,
                    y: 194
                },
                5: {
                    x:3400,
                    y: 194
                },
                    8: {
                    x:120,
                    y: 194
                }

            },
        },
        objects: [
{
            type: 'Background',
            position: {
                x: 0,   
                y: 0
            },   nameFile: 'hall1',
        },
        {

                type: 'Door',
                position: { x:1413,y:-46},
                destination: 1
                },{
                
                type: 'Door',
                position: { x:      2943,y:-46},destination: 3},{
                type: 'Door',
                position: { x:      3372,y:-46},destination: 5},
  {
                type: 'Door',
                position: { x:87,y:-46},
                closed : true,
            destination: 8},
{
            type: 'Door',
            position: {
                x: 1413,
                y: -46
            },
            destination:3
        },  {
            type: 'DoorHidden',
            position: {
                x: 920,
                y: 400
            },
            destination:2
        }, {
            type: 'Door',
            position: {
                x: 87,
                y: -46
            },
            destination:1
            // closed: true,
        }, {
            type: 'CoatRail',
            position: {
                x: 850,
                y: 20
            }
        }, {
            type: 'Text1',
            position: {
                x: 1051,
                y: 4
            }
        }, {
            type: 'Text2',
            position: {
                x: 1051,
                y: 4
            }
        }, {
            type: 'Text3',
            position: {
                x: 1051,
                y: 4
            }
        }, {
            type: 'Vase',
            position: {
                x: 2245,
                y: 47
            }
        }, 
          ]
    }, {
        id: 5, //hall2
        player: {
            position: {
                4: {
                    x: 500,
                    y: 120
                },
                7: {
                    x: 2700,
                    y: 250
                },
                6: {
                    x: 1410,
                    y: 250
                }
            },
        },
        objects: [
         {
            type: 'Background',
            position: {
                x: 0,
                y: 0
            },
            nameFile: 'hall2',
        },{
            type: 'Door',
            position: {
                x: 1394,
                y: -46
            },destination:6
        }, {
            type: 'Door',
            position: {
                x: 2943,
                y: -46
            },destination:7
        }, {
            type: 'Door',
            position: {
                x: 89,
                y: -46
            },destination:4,
        }, {
            type: 'CoatRail',
            position: {
                x: 3500,
                y: 8
            }
        }, {
            type: 'Vase',
            position: {
                x: 695,
                y: 47
            }
        }, {
            type: 'Phone',
            position: {
                x: 3857,
                y: 45
            }
        }, {
            type: 'Drawings2',
            position: {
                x: 2519,
                y: 17
            }
        }, ]
    }, {
        id: 6, //library
        player: {
            position: {
                5: {
                    x: 500,
                    y: 250
                }
            },
        },
        objects: [
         {
            type: 'Background',
            position: {
                x: 0,
                y: 0
            },
            nameFile: 'library',
        },{
            type: 'DoorHidden',
            position: {
                x: 500,
                y: 300
            },
            destination: 5
        }, {
            type: 'BookCase',
            position: {
                x: 35,
                y: 0
            }
        }, {
            type: 'BookCase',
            position: {
                x: 308,
                y: 0
            }
        }, {
            type: 'BookCase',
            position: {
                x: 848,
                y: 0
            }
        }, {
            type: 'BookCase',
            position: {
                x: 1211,
                y: 0
            }
        }, {
            type: 'Clock',
            position: {
                x: 1473,
                y: 12
            }
        }, {
            type: 'Window',
            position: {
                x: 650,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 562,
                y: 0
            }
        }, {
            type: 'Curtain',
            position: {
                x: 760,
                y: 0
            }
        }, {
            type: 'ArmChair',
            position: {
                x: 531,
                y: 69
            }
        }, {
            type: 'ArmChair',
            position: {
                x: 1095,
                y: 69
            }
        }, {
            type: 'ChairL',
            position: {
                x: 114,
                y: 250
            }
        }, {
            type: 'ChairL',
            position: {
                x: 252,
                y: 350
            }
        }, {
            type: 'ChairL',
            position: {
                x: 714,
                y: 240
            }
        }, {
            type: 'ChairL',
            position: {
                x: 852,
                y: 240
            }
        }, {
            type: 'ChairL',
            position: {
                x: 1195,
                y: 272
            }
        }, {
            type: 'ChairL',
            position: {
                x: 1333,
                y: 272
            }
        },
        {
            type: 'Desk',
            position: {
                x: 143,
                y: 232
            }
        }, {
            type: 'Desk',
            position: {
                x: 743,
                y: 222
            }
        }, {
            type: 'Desk',
            position: {
                x: 1224,
                y: 254
            }
        }, ]
    }, {
        id: 7, //TeacherRoom
        player: {
            position: {
                5: {
                    x: 500,
                    y: 250
                }
            },
        },
        objects: [
         {
            type: 'Background',
            position: {
                x: 0,
                y: 0
            },
            nameFile: 'teacherRoom',
        },{
            type: 'DoorHidden',
            position: {
                x: 500,
                y: 300
            },
            destination: 5
        }, {
            type: 'Window',
            position: {
                x: 45,
                y: 0
            }
            }, 
        {type: 'Key',
        position:{x:600 , y: 200}


        }, {
            type: 'Couch',
            position: {
                x: 255,
                y: 65
            }
        }, {
            type: 'Drawers',
            position: {
                x: 582,
                y: 128
            }
        }, {
            type: 'TV',
            position: {
                x: 674,
                y: 52
            }
        }, {
            type: 'BTable',
            position: {
                x: 75,
                y: 236
            }
        }, {
            type: 'Closet2',
            position: {
                x: 0,
                y: 0
            }
        }, ]
    }, {
        id: 8, //entrance
        player: {
            position: {
                4: {
                    x: 500,
                    y: 250
                }
            },
        },
        objects: [
        {
            type: 'Background',
            position: {
                x: 0,
                y: 0
            },
            nameFile: 'entrance',
        },{
            type: 'Door',
            position: {
                x: 500,
                y: 300
            },
            destination: 4
        },
        {type: 'EndDoor',
            position: {
                x: 500,
                y: 300
            },
        },  ]
    }

];