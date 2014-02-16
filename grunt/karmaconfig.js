/**
 * This task compiles the karma template so that changes to its file array
 * don't have to be managed manually.
 */
module.exports = function(grunt) {

  /**
   * In order to avoid having to specify manually the files needed for karma to
   * run, we use grunt to manage the list for us. The `karma/*` files are
   * compiled as grunt templates for use by Karma. Yay!
   */
  grunt.registerMultiTask( 'karmaconfig',
    'Process karma config templates', function () {

    /**
     * A utility function to get all app JavaScript sources.
     */
    function filterForJS ( files ) {
      return files.filter( function ( file ) {
        return file.match( /\.js$/ );
      });
    }

    var jsFiles = filterForJS( this.filesSrc );
    var target = this.target;
    
    grunt.file.copy( 'karma/karma-unit.tpl.js', grunt.config( 'build_dir' ) +
      '/karma-unit.js', {
      process: function ( contents ) {
        var data = {
          scripts: jsFiles,
          reporter: null,
          coveragePreprocessors: null,
          coverageReporter: 'text'
        };

        if(target === 'coverage' || target === 'textcoverage') {
          data.coveragePreprocessors = [
            '**/app/**/!(*spec).js',
            '**/common/**/!(*spec).js'
          ];
          data.reporter = 'coverage';

          if(target === 'coverage') {
            data.coverageReporter = 'html';
          } else {
            data.coverageReporter = 'text';
          }
        }

        return grunt.template.process( contents, {
          data: data
        });
      }
    });
  });

  // return the config
  return {
    // Config to run unit tests
    unit: {
      dir: '<%= build_dir %>',
      src: [
        '<%= vendor_files.js %>',
        '<%= html2js.app.dest %>',
        '<%= html2js.common.dest %>',
        'vendor/angular-mocks/angular-mocks.js'
      ]
    },
    // config to run unit tests and run html test coverage
    coverage: {
      dir: '<%= build_dir %>',
      src: [
        '<%= vendor_files.js %>',
        '<%= html2js.app.dest %>',
        '<%= html2js.common.dest %>',
        'vendor/angular-mocks/angular-mocks.js'
      ]
    },
    // config to run unit tests and log coverage details into txt file
    textcoverage: {
      dir: '<%= build_dir %>',
      src: [
        '<%= vendor_files.js %>',
        '<%= html2js.app.dest %>',
        '<%= html2js.common.dest %>',
        'vendor/angular-mocks/angular-mocks.js'
      ]
    }
  };
};
