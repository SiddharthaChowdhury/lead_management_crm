/**
 * `uglify`
 *
 * ---------------------------------------------------------------
 *
 * Minify client-side JavaScript files using UglifyJS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

  grunt.config.set('uglify', {
    dist: {
      src: ['.tmp/public/concat/production.js'],
      dest: '.tmp/public/min/production.min.js'
    },

    distLanding: {
        src: ['.tmp/public/concat/productionLanding.js'],
        dest: '.tmp/public/min/productionLanding.min.js'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
