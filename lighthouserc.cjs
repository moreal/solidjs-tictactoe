// filepath: /Users/moreal/github/moreal/solidjs-tictactoe/lighthouserc.js
module.exports = {
	ci: {
		collect: {
			startServerCommand: "yarn build && yarn serve",
			url: ["http://localhost:4173"], // Vite의 기본 미리보기 포트
		},
		assert: {
			assertions: {
				"categories:performance": ["error", { minScore: 0.9 }],
				"categories:accessibility": ["error", { minScore: 0.9 }],
				"categories:best-practices": ["error", { minScore: 0.9 }],
				"categories:seo": ["error", { minScore: 0.9 }],
			},
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
