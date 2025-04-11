const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));
module.exports = {
	parser: "@babel/eslint-parser",
	extends: ["airbnb", "prettier", "plugin:import/errors", "plugin:import/warnings"],
	plugins: ["prettier", "redux-saga", "react", "react-hooks", "jsx-a11y"],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true
	},

	rules: {
		"prettier/prettier": ["error", prettierOptions],
		"arrow-body-style": ["error", "as-needed"],
		"no-console": "off",
		"max-len": "off",
		"newline-per-chained-call": "off",
		"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"prefer-template": "error",
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/heading-has-content": "off",
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				// NOTE: If this error triggers, either disable it or add
				// your custom components, labels and attributes via these options
				// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
				controlComponents: ["Input"]
			}
		],
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/mouse-events-have-key-events": "error",
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/jsx-closing-tag-location": "error",
		"react/forbid-prop-types": "off",
		"react/jsx-curly-newline": "off",
		"react/no-unknown-property": "off",
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"react/jsx-filename-extension": "off",
		"react/jsx-no-target-blank": "off",
		"react/function-component-definition": "off",
		"react/jsx-no-useless-fragment": "off",
		"default-param-last": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-uses-vars": "error",
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/require-extension": "off",
		"react/self-closing-comp": "off",
		"react/sort-comp": "off",
		"redux-saga/no-yield-in-race": "error",
		"redux-saga/yield-effects": "error",
		"require-yield": "error",
		"import/no-extraneous-dependencies": "off",
		"react/no-unused-state": "warn",
		"react/destructuring-assignment": "off",
		"no-underscore-dangle": "off",
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"react/no-deprecated": "warn",
		"no-undef": ["error", { typeof: true }]
	},
	settings: {
		"import/resolver": {
			node: {},
			webpack: {
				config: "./webpack.config.alias.js"
			},
			alias: {
				map: [
					["@components", "./src/components"] // Adjust the path as needed
					// Add more alias mappings if needed
				],
				extensions: [".js", ".jsx"] // Specify the file extensions you use
			}
		},
		"import/core-modules": [
			"CommonModule/utils",
			"CommonModule/components",
			"CommonModule/actions",
			"CommonModule/reducers",
			"CommonModule/sagas",
			"CommonModule/services"
		]
	}
};
