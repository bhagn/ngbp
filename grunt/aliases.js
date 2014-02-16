module.exports = {
  // default task
  'default': [ 'build', 'compile' ],

  /**
   * The `build` task gets your app ready to run for development and testing.
   */
  'build': [
    'clean', 'html2js', 'jshint', 'coffeelint', 'coffee','less:build',
    'copy:build_assets', 'copy:build_appjs', 'copy:build_vendorjs',
    'copy:fonts', 'index:build', 'karmaconfig:unit', 'karma:continuous'
  ],

  /**
   * The `server` task runs the application on a standalone server. 
   * Builds project and starts a server at http://localhost:9000
   */
  'server': [
    'clean', 'html2js', 'jshint', 'coffeelint', 'coffee','less:build',
    'copy:build_assets', 'copy:build_appjs', 'copy:build_vendorjs',
    'copy:fonts', 'index:build', 'connect:app'
  ],

  /**
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  'compile': [
    'less:compile', 'copy:compile_assets', 'copy:compile_vendorcss', 'ngmin',
    'concat', 'uglify', 'index:compile'
  ],

  /**
   * The `coverage` task runs code coverage on the JS files and generates a
   * html or text(command line) report.
   */
  'coverage': [
    'clean', 'html2js', 'jshint', 'coffeelint', 'coffee','less:build',
    'copy:build_assets', 'copy:build_appjs', 'copy:build_vendorjs',
    'copy:fonts', 'index:build', 'karmaconfig:coverage', 'karma:continuous',
    'connect:coverage'
  ],

  /**
   * The `coverage-text` task runs code coverage on the JS files and generates a
   * text(command line) report. Suitable for automation scenarios.
   */
  'coverage-text': [
    'clean', 'html2js', 'jshint', 'coffeelint', 'coffee','less:build',
    'copy:build_assets', 'copy:build_appjs', 'copy:build_vendorjs',
    'copy:fonts', 'index:build', 'karmaconfig:textcoverage',
    'karma:continuous'
  ]
};
