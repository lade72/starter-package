module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: [
                    'src/**/*'
                ],
                tasks: ['default'],
                options: {
                    spawn: false,
                    interrupt: true,
                    livereload: true
                }
            }
        },

        clean: {
            src: ["output/**/*"]
        },

        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: [{
                    src: "src/pug/index.pug",
                    dest: "output/index.html"
                }]
            }
        },

        less: {
            all: {
                src: 'src/less/styles.less',
                dest: 'output/css/styles.css',
                options: {
                    compress: false
                }
            }
        },

        copy: {
            img: {
                expand: true,
                cwd: 'src/img/',
                src: '**',
                dest: 'output/img',
            },
            js: {
                expand: true,
                cwd: 'src/js/',
                src: '**',
                dest: 'output/js',
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('dev', '', [
        'clean',
        'pug',
        'less',
        'copy:img',
        'copy:js'
    ]);

    grunt.registerTask('default', ['dev', 'watch:src']);
};
