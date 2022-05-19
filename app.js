require('apostrophe')({
  shortName: 'a3-for-gatsby',
  baseUrl: 'http://localhost:3000',
  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/@apostrophecms/assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here to turn them on: `moduleName: {}`

    // Custom CSS classes for standard apostrophe widgets
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'rl-rte mb-4'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'rl-image mb-4'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'rl-video mb-4'
      }
    },
    // Manages apostrophe's overall asset pipeline
    '@apostrophecms/asset': {
      // When not in production, refresh the page on restart
      options: {
        refreshOnRestart: true
      }
    },

    // A home for our own project-specific javascript and SASS assets
    asset: {},

    // A custom widget with two columns
    'two-column-widget': {},

    // A page type for ordinary pages
    'default-page': {},

    // A piece type for camp programs
    program: {},
    // A piece type for camp staff
    'staff-member': {}
  }
});
