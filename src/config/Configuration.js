const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	jasmineNodeOpts: {defaultTimeoutInterval: 100000},
	getPageTimeout: 100000,
	allScriptsTimeout: 110000,
	directConnect: true,
	specs: 
	[
        '../testcases/login_page.spec.js',
		//'../testcases/forgot_password.spec.js',
		////'../testcases/create_newsletter.spec.js',
		//'../testcases/smart_filters.spec.js',
		//'../testcases/setup_audience.spec.js',
		//'../testcases/newsfeed_homepage.spec.js',
		//'../testcases/generate_newsfeed.spec.js',
		'../testcases/select_articles.spec.js'
		//'../testcases/*.js'
	],
	capabilities: 
	{
		browserName: 'chrome',
	},
	jasmineNodeOpts: 
	{
		showColors: true,
		print: function() {}
	},
	onPrepare :function() 
	{
		browser.driver.manage().window().maximize();
		global.returnstring="";
		jasmine.getEnv().addReporter
		(
			new Jasmine2HtmlReporter
			({
			  	savePath: 'target/screenshots',
			  	fixedScreenshotName:true,
        		cleanDestination: true,
        		showSummary: true,
        		fileName:'Executionstatus',
        		FileNameSeperator:'_'
			})
		);
		jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));	
	}
};