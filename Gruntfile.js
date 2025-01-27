momodule.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dev/style.css': 'src/style.less' 
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/app.min.js': ['src/scripts.js']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['less', 'uglify']);
};
