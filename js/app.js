require.config({
  paths: {
    'underscore': 'lib/underscore'
  },
  shim: {
    'underscore': {
        exports: '_'
      },
    'lib/backbone': {
        deps: ['lib/underscore', 'jquery'],
        exports: 'Backbone'
    }
  }
});