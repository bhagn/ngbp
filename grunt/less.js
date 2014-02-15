/**
 * `less` handles our LESS compilation and uglification automatically.
 * Only our `main.less` file is included in compilation; all other files
 * must be imported from this file.
 */
module.exports = {
  build: {
    src: [ '<%= app_files.less %>' ],
    dest: '<%= build_dir %>/assets/<%= pkg.name %>.css',
    options: {
      paths: [ '<%= app_files.less %>' ],
      report: 'min'
    }
  },
  compile: {
    src: [ '<%= less.build.dest %>' ],
    dest: '<%= less.build.dest %>',
    options: {
      report: 'gzip',
      compress: true
    }
  }
};