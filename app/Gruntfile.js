module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['js/*js', "test/*js"],
            options: {
                esnext: true,
                reporterOutput: '',
                globals: {
                    jQuery: true
                }                
            }
        },
        less: {
            production: {
                files: {
                    "views/public/main.css": ["style/*less"]
                }
            }
        },
        autoprefixer: {
            single_file: {
                src: "views/public/main.css",
                dest: "views/public/main.css"
            }
        },
        watch: {
            css: {
                files: ["style/*less"],
                tasks: ["css"]
            },
            js: {
                files: ["js/*js"],
                tasks: ["jshint"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("css", ["less", "autoprefixer"]);
    grunt.registerTask("default", ["jshint", "css"]);

};