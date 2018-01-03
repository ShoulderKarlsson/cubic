export const stages = [
  {
    stageNumber: 3.0,
    title: 'Middle Layer, move to right',
    note: 'Important: The white layer should be facing down',
    algs: [
      {
        description:
          'Move top center piece to the right side of the middle layer',
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
    ],
  },
  {
    stageNumber: 3.1,
    title: 'Middle Layer, move to left',
    note: 'Important: The white layer should be facing down',
    algs: [
      {
        description:
          'Move top center piece to the left side of the middle layer',
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
    ],
  },
  {
    stageNumber: 4.0,
    title: 'Creating Yellow Cross',
    note: 'Creating the yellow cross at the yellow side of the cube.',
    algs: [
      {
        description: '',
        steps: [
          {name: 'F', order: [0]},
          {name: 'R', order: [1]},
          {name: 'U', order: [2]},
          {name: 'Ri', order: [3]},
          {name: 'Ui', order: [4]},
          {name: 'Fi', order: [5]},
        ],
      },
    ],
  },
  {
    stageNumber: 5.0,
    title: 'Yellow Edges',
    note:
      'When the yellow cross is done this algorithm is applied in order to move the top center piece to its correct side.',
    algs: [
      {
        description: '',
        steps: [
          {name: 'R', order: [0, 4]},
          {name: 'U', order: [1, 3]},
          {name: 'Ri', order: [2, 6]},
          {name: 'U', order: [1, 3]},
          {name: 'R', order: [0, 4]},
          {name: 'U2', order: [5]},
          {name: 'Ri', order: [2, 6]},
        ],
      },
    ],
  },
  {
    stageNumber: 6.0,
    title: 'Alligning Yellow corner pieces',
    note:
      'When all the center pieces is at the correct side, this algorithm is applied in order to move around the corner pieces to its correct location.',
    algs: [
      {
        description: '',
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
    ],
  },
  {
    stageNumber: 7.0,
    title: 'Moving yellow corners to final position',
    note:
      'Move a yellow piece that is not aligned correctly on all sides, ' +
      'then perform the algoritm until its aligned. Then move a new piece into the right corner and repeat until done.' +
      '(Note, during this. The cube will look like you have messed it up, dont worry, it should be like that.)',
    algs: [
      {
        description: '',
        steps: [
          {name: 'Ri', order: [0]},
          {name: 'Di', order: [1]},
          {name: 'R', order: [2]},
          {name: 'D', order: [3]},
        ],
      },
    ],
  },
]
