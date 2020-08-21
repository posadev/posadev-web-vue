// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('#commingSoonImage')
      .assert.elementPresent('.navBarLogo')
      // .assert.containsText('h1', 'Welcome to Your Vue.js + TypeScript App')
      .assert.elementCount('img', 2)
      .end();
  },

  'example e2e test using a custom command': browser => {
    browser
      .openHomepage()
      .assert.elementPresent('#commingSoonImage')
      .end();
  }
};
