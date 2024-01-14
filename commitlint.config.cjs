module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules:{
        'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',  //型特性
				'fix',    // 修改bug
				'perf',   // 优化
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
        'type-case':[0],
        'type-empty':[0],
        'scope-empty':[0],
        'scope-case':[0],
        'subject-full-stop':[0,'never'],
        'subject-case':[0,'never'],
        'header-max-length':[0,'always',72]
    }
};
