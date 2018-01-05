export const stages = [
  {
    stageNumber: 3.0,
    title: 'Middle Layer, move to right',
    note: 'Insert a top center piece into the right side of the middle layer.',
    algs: [
      {
        description: '',
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
    note: 'Insert a top center piece into the left side of the middle layer',
    algs: [
      {
        description: '',
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
    note: 'Generate the yellow cross.',
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
    note: 'Move yellow edge pieces to their correct location',
    algs: [
      {
        description: '',
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
    ],
  },
  {
    stageNumber: 6.0,
    title: 'Alligning Yellow corner pieces',
    note: 'Align all the corner pieces to their correct location',
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
    title: 'Orient yellow corners',
    note: 'Last step to finish the cube.',
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
