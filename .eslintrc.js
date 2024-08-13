module.exports = {
	extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
	// plugins: ['prettier', 'unused-imports'],
	env: {
		node: true, // Node.js 환경을 활성화합니다.
		browser: true, // 만약 브라우저 환경도 고려해야 한다면 추가
	},
	plugins: ['prettier'],
	globals: {
		NodeJS: 'readonly', // NodeJS를 읽기 전용 전역 변수로 정의
	},
	rules: {
		// 선언되지 않은 변수 또는 임포트 구문 정리 규칙
		'no-undef': 'error',
		// 'unused-imports/no-unused-imports': 'error',

		// 프리티어 설정
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
};
