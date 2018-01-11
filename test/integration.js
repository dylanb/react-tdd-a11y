const Selenium = require('selenium-webdriver'),
    AxeBuilder = require('axe-webdriverjs')
const assert = require('assert')

const TestUtils = require('./utils.js')

var port = process.env.npm_package_config_port || 3006

describe('Integration tests', function () {
  this.timeout(10000)

  let driver

  beforeEach(function (done) {
    driver = new Selenium.Builder()
      .forBrowser('chrome')
      .build()
    driver
      .get(`http://localhost:${port}`)
      .then(function () {
        done()
      })
  })

  afterEach(function (done) {
    driver.quit().then(function () {
      done()
    })
  })

  it('should find the App element', function (done) {
    driver
      .findElement(Selenium.By.css('.App'))
      .then(function () {
        new AxeBuilder(driver)
          .analyze(function (results) {
            TestUtils.printViolations(results.violations)
            assert.equal(results.violations.length, 0)
            done()
          })
      })
  })
  it('should have a link pointing to the "login" route', function (done) {
    driver
      .findElement(Selenium.By.css('.App a[href="/login"]'))
      .then(function () {
        new AxeBuilder(driver)
          .analyze(function (results) {
            TestUtils.printViolations(results.violations)
            assert.equal(results.violations.length, 0)
            done()
          })
      })
  })
  describe('the login page', function () {
    beforeEach(function (done) {
      driver
        .get(`http://localhost:${port}/login`)
        .then(function() {
          done()
        })
    })
    it('should have two form fields that are required', function (done) {
          driver.findElement(Selenium.By.css('.App form'))
            .then(function (form) {
              assert.ok(form.findElement(Selenium.By.css('#email[required]')))
              assert.ok(form.findElement(Selenium.By.css('#password[required]')))
              done()
            })
    })
  })
})
