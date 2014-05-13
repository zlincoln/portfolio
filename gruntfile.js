module.exports = function(grunt){
	grunt.initConfig({
		less: {
			options: {
				compress: true,
				yuicompress: true
			},
			files: {
				"css/master.css": "css/master.less"
			}
		},
		watch: {
			less: {
				options: {
					livereload: true
				},
				files: ['css/**/*.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
}