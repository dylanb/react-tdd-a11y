const Selenium = require('selenium-webdriver'),
	  	AxeBuilder = require('axe-webdriverjs');
const assert = require('assert');

const TestUtils = require('./utils.js');

var port = process.env.npm_package_config_port || 3006;

describe('Integration tests', function() {
	this.timeout(10000);

	let driver;

	beforeEach(function(done) {
		driver = new Selenium.Builder()
		  .forBrowser('chrome')
		  .build();
		driver
			.get(`http://localhost:${port}`)
		  .then(function() {
  			done();
		  })
	});

	afterEach(function(done) {
		driver.quit().then(function() {
			done();
		});
	});

	it('should find the App element', function(done) {
		driver
			.findElement(Selenium.By.css('.App'))
		  .then(function() {
	        done();
		  });
	});
});