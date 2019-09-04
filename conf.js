exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    homepage: 'tests/start-page.js',
    grammar: 'tests/grammar/*.js',
  },
  specs: [
    'tests/start-page.js',
    'tests/translate-page.js',
    'tests/consonant-page.js',
    'tests/vowel-page.js',
    'tests/syllable-page.js',
    'tests/grammar/*.js',
    'tests/lexicon-page.js',
    'tests/data-page.js',
  ]
};
/*
	run protractor:
	webdriver-manager start
	start tests:
	protractor conf.js
*/
