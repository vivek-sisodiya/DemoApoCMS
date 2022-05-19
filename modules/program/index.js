module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      description: {
        type: 'string',
        label: 'Description',
        options: {
          textarea: true
        }
      },
      startDate: {
        type: 'date',
        required: true,
        label: 'Starting date'
      },
      endDate: {
        type: 'date',
        required: true,
        label: 'Ending date'
      },
      cost: {
        type: 'float',
        required: true,
        label: 'Cost (in USD)'
      },
      ageGroup: {
        type: 'select',
        required: true,
        choices: [
          {
            label: '6 to 9 year olds',
            value: '06to09'
          },
          {
            label: '10 to 12 year olds',
            value: '10to12'
          },
          {
            label: '13 to 15 year olds',
            value: '13to15'
          },
          {
            label: '16 to 18 year olds',
            value: '16to18'
          }
        ]
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'startDate',
          'endDate',
          'ageGroup',
          'description',
          'cost'
        ]
      }
    }
  }
};
