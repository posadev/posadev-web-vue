////////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
////////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: (browser) => browser.init(),

  'e2e tests using page objects': (browser) => {
    const homepage = browser.page.homepage();
    homepage.waitForElementVisible('@appContainer');

    const app = homepage.section.app;
    app.expect.section('@navBar').to.be.visible;
    app.expect.section('@commingSoon').to.be.visible;

    browser.end();
  },

  'verify if elements in navBar exists': (browser) => {
    const homepage = browser.page.homepage();
    const navBarSection = homepage.section.app.section.navBar;

    navBarSection.expect.element('@logo', 1).to.be.visible;
    navBarSection.expect.element('@navBarItem', 7).to.be.visible;
    browser.end();
  },

  'verify if elements in home exists': (browser) => {
    const homepage = browser.page.homepage();
    const commingSoonsection = homepage.section.app.section.commingSoon;

    commingSoonsection.expect.element('@image', 1).to.be.visible;
    commingSoonsection.waitForElementVisible('@actionButton', 2);

    commingSoonsection.click('@actionButton');
    browser.end();
  }
};
