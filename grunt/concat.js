/**
 * `grunt concat` concatenates multiple source files into a single file.
 */
module.exports = {
  /**
   * The `compile_js` target is the concatenation of our application source
   * code and all specified vendor source code into a single file.
   */
  compile_js: {
    options: {
      banner: '<%= meta.banner %>'
    },
    src: [
      '<%= vendor_files.js %>',
      'module.prefix',
      '<%= build_dir %>/src/**/*.js',
      '<%= html2js.app.dest %>',
      '<%= html2js.common.dest %>',
      '<%= vendor_files.js %>',
      'module.suffix'
    ],
    dest: '<%= compile_dir %>/assets/<%= pkg.name %>.js'
  }
};