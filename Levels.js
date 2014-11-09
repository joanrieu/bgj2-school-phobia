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
                type: 'Background',
                position: { x: 0 , y: 0},
                nameFile: 'room1',
            },
            {
                type: 'Closet',
                position: { x: 0, y: 0 }
            },
            {
                type: 'Table',
                position: { x: 279, y: 307 }
            },
            {
                type: 'Table',
                position: { x: 247, y: 193 }
            },
            {
                type: 'Table',
                position: { x: 508, y: 297 }
            },
            {
                type: 'Table',
                position: { x: 489, y: 190 }
            },
            {
                type: 'Table',
                position: { x: 898, y: 194 }
            },
            {
                type: 'Table',
                position: { x: 930, y: 307 }
            },
            {
                type: 'Table',
                position: { x: 1140, y: 190 }
            },
            {
                type: 'Table',
                position: { x: 1159, y: 297 }
            },
            {
                type: 'BTable',
                position: { x: 1407, y: 244 }
            },
            {
                type: 'ChairL',
                position: { x: 1538, y: 259 }
            },
            {
                type: 'ChairR',
                position: { x: 1128, y: 312 }
            },
            {
                type: 'ChairR',
                position: { x: 1109, y: 205 }
            },
            {
                type: 'ChairR',
                position: { x: 899, y: 322 }
            },
            {
                type: 'ChairR',
                position: { x: 867, y: 209 }
            },
            {
                type: 'ChairR',
                position: { x: 477, y: 312 }
            },
            {
                type: 'ChairR',
                position: { x: 458, y: 205 }
            },
            {
                type: 'ChairR',
                position: { x: 248, y: 322 }
            },
            {
                type: 'ChairR',
                position: { x: 216, y: 209 }
            },
            {
                type: 'Window',
                position: { x: 343, y: 0 }
            },
            {
                type: 'Window',
                position: { x: 873, y: 0 }
            },
            {
                type: 'Window',
                position: { x: 1364, y: 0 }
            },
            {
                type: 'Window',
                position: { x: 1364, y: 0 }
            },
            {
                type: 'Curtain',
                position: { x: 255, y: 0 }
            },
            {
                type: 'Curtain',
                position: { x: 453, y: 0 }
            },
            {
                type: 'Curtain',
                position: { x: 837, y: 0 }
            },
            {
                type: 'Curtain',
                position: { x: 927, y: 0 }
            },
            {
                type: 'Curtain',
                position: { x: 1277, y: 0 }
            },
            {
                type: 'Curtain',
                position: { x: 1475, y: 0 }
            },
            {
                type: 'Bookcase',
                position: { x: 588, y: 0 }
            },
            {
                type: 'Drawings',
                position: { x: 1100, y: 8 }
            },
            {
                type: 'Book',
                position: { x: 296, y: 203 }
            },
            {
                type: 'Book',
                position: { x: 315, y: 306 }
            },
            {
                type: 'Book',
                position: { x: 520, y: 203 }
            },
            {
                type: 'Book',
                position: { x: 539, y: 306 }
            },
            {
                type: 'Book',
                position: { x: 947, y: 203 }

            },
            {
                type: 'Book',
                position: { x: 966, y: 306 }
            },
            {
                type: 'Book',
                position: { x: 1171, y: 203 }
            },
            {
                type: 'Book',
                position: { x: 1190, y: 306 }
            },
            {
                type: 'Book',
                position: { x: 1469, y: 256 }
            },
            {
                type: 'PencilCase',
                position: { x: 309, y: 199 }
            },
            {
                type: 'PencilCase',
                position: { x: 346, y: 324 }
            },
            {
                type: 'PencilCase',
                position: { x: 554, y: 197 }
            },
            {
                type: 'PencilCase',
                position: { x: 569, y: 309 }
            },
            {
                type: 'PencilCase',
                position: { x: 955, y: 199 }
            },
            {
                type: 'PencilCase',
                position: { x: 997, y: 319 }
            },
            {
                type: 'PencilCase',
                position: { x: 999, y: 196 }
            },
            {
                type: 'PencilCase',
                position: { x: 420, y: 300 }
            },
            {
                type: 'Phone',
                position: { x: 400, y: 200 }
            },
            {
                type: 'DoorHidden',
                position: { x: 507, y: 416 },
                destination: 2//hall
            },
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
