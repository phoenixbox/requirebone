require.config({
  paths: {
    'underscore': 'lib/underscore',
    'text': 'libs/require/text'
  },
  baseUrl: "app",
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