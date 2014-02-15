/**
 * `connect` task runs a webserver with '.' as the base path
 * this has to the last task to be executed.
 */
module.exports = {
  app: {
    options: {
      port: 9000,
      hostname: '*',
      keepalive: true,
      base: 'build'
    }
  },
  coverage: {
    options: {
      port: 9001,
      keepalive: true,
      base: 'coverage'
    }
  }
};