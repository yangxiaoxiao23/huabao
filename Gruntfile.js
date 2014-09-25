module.exports = function (grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			prod:{
				files: {
					'libs/zepto.min.js':['libs/zepto.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 默认任务
	grunt.registerTask('default', ['uglify']);
}