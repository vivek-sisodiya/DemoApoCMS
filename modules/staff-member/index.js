module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      jobTitle: {
        type: 'string',
        required: true,
        label: 'Job title'
      },
      photo: {
        type: 'area',
        label: 'Staff photo',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      funFact: {
        type: 'string',
        label: 'Fun fact'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'visibility',
          'jobTitle',
          'photo',
          'funFact'
        ]
      }
    }
  }
};
