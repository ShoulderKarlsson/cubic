import {RED, ORANGE, GREEN, YELLOW} from './colors'

export const stages = [
  {
    title: 'Middle Layer, move to right',
    description: `Move the center top pice into the middle layer. This sequence will move the top middle piece to the right side 
     of the middle layer.`,
    cubeStates: {
      finished: [ORANGE, GREEN, ORANGE, RED, RED, RED, RED, RED, RED],
      exampleStart: [ORANGE, RED, ORANGE, RED, RED, YELLOW, RED, RED, RED],
    },
    steps: [
      {name: 'U', order: [0, 6]},
      {name: 'R', order: [1]},
      {name: 'Ui', order: [2, 4]},
      {name: 'Ri', order: [3]},
      {name: 'Ui', order: [2, 4]},
      {name: 'Fi', order: [5]},
      {name: 'U', order: [0, 6]},
      {name: 'F', order: [7]},
    ],
  },
  {
    title: 'Middle Layer, move to left',
    description: `Move the top center piece into the middle layer. This sequence will move the top middle centerpiece to the left side
      of the middle layer.`,
    cubeStates: {
      finished: [ORANGE, GREEN, ORANGE, RED, RED, RED, RED, RED, RED],
      exampleStart: [ORANGE, RED, ORANGE, YELLOW, RED, RED, RED, RED, RED],
    },
    steps: [
      {name: 'Ui', order: [0, 6]},
      {name: 'Li', order: [1]},
      {name: 'U', order: [2, 4]},
      {name: 'L', order: [3]},
      {name: 'U', order: [2, 4]},
      {name: 'F', order: [5]},
      {name: 'Ui', order: [0, 6]},
      {name: 'Fi', order: [7]},
    ],
  },
  {
    title: 'Creating Yellow Cross',
    description: `When the middle layer is done, create the yellow cross. Note - the yellow side can be of many shapes, but the algorithm is the same but it can require
      to run the algorithm multiple times.`,
    cubeStates: {
      exampleStart: [
        RED, ORANGE, RED,
        GREEN, YELLOW, YELLOW,
        ORANGE, YELLOW, ORANGE ],
        finished: [
          ORANGE, YELLOW, RED,
          YELLOW, YELLOW, YELLOW,
          GREEN, YELLOW, YELLOW
        ]
    },
    steps: [
      {name: 'F', order: [0]},
      {name: 'R', order: [1]},
      {name: 'U', order: [2]},
      {name: 'Ri', order: [3]},
      {name: 'Ui', order: [4]},
      {name: 'Fi', order: [5]},
    ],
  },
  {
    title: 'Yellow Edges',
    // description: 'Move yellow edge pieces to their correct location',
    description: `hmmm...`,
    steps: [
      {name: 'R', order: [0, 4]},
      {name: 'U', order: [1, 3, 7]},
      {name: 'Ri', order: [2, 6]},
      {name: 'U', order: [1, 3, 7]},
      {name: 'R', order: [0, 4]},
      {name: 'U2', order: [5]},
      {name: 'Ri', order: [2, 6]},
      {name: 'U', order: [1, 3, 7]},
    ],
  },
  {
    title: 'Alligning Yellow corner pieces',
    description: 'Align all the corner pieces to their correct location',
    steps: [
      {name: 'U', order: [0, 4]},
      {name: 'R', order: [1]},
      {name: 'Ui', order: [2, 6]},
      {name: 'Li', order: [3]},
      {name: 'U', order: [0, 4]},
      {name: 'Ri', order: [5]},
      {name: 'Ui', order: [2, 6]},
      {name: 'L', order: [7]},
    ],
  },
  {
    title: 'Orient yellow corners',
    description: 'Last step to finish the cube.',
    steps: [
      {name: 'Ri', order: [0]},
      {name: 'Di', order: [1]},
      {name: 'R', order: [2]},
      {name: 'D', order: [3]},
    ],
  },
]
