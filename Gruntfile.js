module.exports = function (grunt) {
	// ��Ŀ����
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
	// Ĭ������
	grunt.registerTask('default', ['uglify']);
}