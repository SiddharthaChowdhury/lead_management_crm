/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    },

    //---------------------CUSTOM ADDED --------------
    jsConcatLanding: {
        src: require('../pipeline').jsFilesToInject_landing,
        dest: '.tmp/public/concat/productionLanding.js'
    },

    cssConcatLanding: {
        src: require('../pipeline').cssFilesToInject_landing,
        dest: '.tmp/public/concat/productionLanding.css'
    },
    //------------------------------------------------
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
