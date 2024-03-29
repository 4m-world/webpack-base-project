module.exports = {
	"extends": [
		"airbnb",
		"plugin:prettier/recommended",
		"prettier/react"
	],
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"jest": true,
		"node": true
	},
	"parser": "babel-eslint",
	"rules": {
		"prettier/prettier": ["error"],
		"comma-dangle": ["error", "never"],
		"jsx-a11y/href-no-hash": ["off"],
		"react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
		"max-len": [
			"warn",
			{
				"code": 100,
				"tabWidth": 2,
				"comments": 100,
				"ignoreComments": false,
				"ignoreTrailingComments": true,
				"ignoreUrls": true,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true,
				"ignoreRegExpLiterals": true
			}
		]
	}
}
