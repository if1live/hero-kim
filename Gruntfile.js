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
            "phaser/build/phaser.d.ts"
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-bowercopy");

  // Default task(s)
  grunt.registerTask("default", ["bowercopy"]);
};
