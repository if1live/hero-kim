module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerrc: grunt.file.readJSON('.bowerrc'),
    bowercopy: {
      options: {
        clean: false
      },
      glob: {
        files: {
          "libs": [
            "phaser/build/phaser.js",
            "phaser/build/phaser.min.js",
            "phaser/build/phaser.map",
            "phaser/build/phaser.d.ts",

            "chai/chai.js",

            "mocha/mocha.js",
            "mocha/mocha.css"
          ]
        }
      }
    },
    tsd: {
      refresh: {
        options: {
          // execute a command
          command: 'reinstall',
          //optional: always get from HEAD
          latest: true,
          // specify config file
          config: 'tsd.json',
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['typings/chai/*.ts'], dest: 'libs/'},
          {expand: true, flatten: true, src: ['typings/mocha/*.ts'], dest: 'libs/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-bowercopy");
  grunt.loadNpmTasks('grunt-tsd');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s)
  grunt.registerTask("default", ["tsd", "bowercopy", 'copy']);
};
