export const stages = [
  {
    stageNumber: 3,
    title: "Middle Layer",
    note: 'Important: The white layer should be facing down',
    algs: [
      {
        description: 'Move top center piece to the right side of the middle layer',
        steps: ['U', 'R', 'Ui', 'Ri', 'Ui', 'Fi', 'U', 'F']
      },
      {
        description: 'Move top center piece to the left side of the middle layer',
        steps: ['Ui', 'Li', 'U', 'L', 'U', 'Fi', 'U', 'F']
      }
    ]
  },
  {
    stageNumber: 4,
    title: 'Yellow Cross',
    note: 'The algorithm might need to be applied a different amount of times based on the looks of the yellow side.',
    algs: [
      {
        description: '',
        steps: ['F', 'R', 'U', 'Ri', 'Ui', 'Fi']
      }
    ]
  },
  {
    stageNumber: 5,
    title: 'Yellow Edges',
    note: 'Moves top layer cetner pieces to the correct center pieces',
    algs: [
      {
        description: '',
        steps: ['R', 'U', 'Ri', 'U', 'R', 'U2', 'Ri', 'U']
      }
    ]
  }
]
