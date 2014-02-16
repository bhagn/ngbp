/**
 * The `copy` task just copies files from A to B. We use it here to copy
 * our project assets (images, fonts, etc.) and javascripts into
 * `build_dir`, and then to copy the assets to `compile_dir`.
 */
module.exports = {
  build_assets: {
    files: [
      {
        src: [ '**' ],
        dest: '<%= build_dir %>/assets/',
        cwd: 'src/assets',
        expand: true
      }
    ]
  },
  build_appjs: {
    files: [
      {
        src: [ '<%= app_files.js %>' ],
        dest: '<%= build_dir %>/',
        cwd: '.',
        expand: true
      }
    ]
  },
  build_vendorjs: {
    files: [
      {
        src: [ '<%= vendor_files.js %>',  '<%= vendor_files.css %>' ],
        dest: '<%= build_dir %>/',
        cwd: '.',
        expand: true
      }
    ]
  },
  compile_assets: {
    files: [
      {
        src: [ '**' ],
        dest: '<%= compile_dir %>/assets',
        cwd: '<%= build_dir %>/assets',
        expand: true
      }
    ]
  },
  compile_vendorcss: {
    files: [
      {
        src: [ '<%= vendor_files.css %>', '<%= vendor_files.fonts %>' ],
        dest: '<%= compile_dir %>/',
        cwd: '.',
        expand: true
      }
    ]
  },
  fonts: {
    files: [
      {
        src: [ '<%= vendor_files.fonts %>'],
        dest: '<%= build_dir %>/',
        expand: true
      }
    ]
  }
};
