import { browser, Config } from 'protractor';
export let config: Config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'localhost:4200',
	// directConnect: true,
	// maxSessions: 5,
	// multiCapabilities: [
	// 	{ 'browserName': 'chrome' },
	// 	{ 'browserName': 'firefox' },
	// ],

	capabilities: {
		'browserName': 'chrome',
		'directConnect': true,
		'instances': 5
	},
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		strict: true,
		compiler: 'ts:ts-node/register',
		require: [
			'tests/**/steps/*.steps.js',
			// 'tests/steps/*.steps.js',
		],
		// format: "json:./reports/json/cucumber_report.json",
	},
	specs: [
		'../tests/**/features/*.feature',
		// '../tests/features/*.feature'
	],
	onPrepare: () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(5000);
	}
};
/*
	run protractor:
	webdriver-manager start
	start tests:
	npm test
*/
