module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),


	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/main.js'
			],
			dest: '../markup/js/main.min.js'
		}
	},
	

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/main.min.js': ['dist/js/main.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/basket.min.js': ['dist/js/basket.js'],
				'../markup/js/about.min.js': ['dist/js/about.js'],
				'../markup/js/delivery.min.js': ['dist/js/delivery.js'],
				'../markup/js/personal-area.min.js': ['dist/js/personal-area.js'],
				'../markup/js/card-product.min.js': ['dist/js/card-product.js'],
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
					templates: '<%= fixturesPath %>/*.html',
					layout: {
						pop_up: '<%= fixturesPath %>/templates/pop-up.html',
						header: '<%= fixturesPath %>/templates/header.html',
						header_reguest: '<%= fixturesPath %>/templates/header-reguest.html',
						header_authorized: '<%= fixturesPath %>/templates/header-authorized.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');




// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'htmlbuild', 'watch', 'sass']);



};
