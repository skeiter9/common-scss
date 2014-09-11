module.exports = function(grunt){
	// config
	grunt.initConfig({
		watch:{
			sass:{
				files:['dev/*.scss','dev/**/*.scss'],
				tasks:['sass'],
				options: {
					livereload: 9000
				}
			}
		},
	  sass: {
	    dist: {
	      options:{
          lineNumbers: true
        },
	       files: {
	        'dist/common.css':'dev/common.scss'
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default',['watch'] );
	grunt.registerTask('compile-sass',[ 'sass'] );

};
