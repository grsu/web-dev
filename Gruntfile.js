/* global module:false */
module.exports = function (grunt) {
  var port = grunt.option('port') || 8000;

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: port,
          base: '.'
        }
      }
    },
    watch: {
      main: {
        files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
        tasks: 'default'
      },
      theme: {
        files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
        tasks: 'themes'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Serve presentation locally
  grunt.registerTask('serve', ['connect', 'watch']);
};
