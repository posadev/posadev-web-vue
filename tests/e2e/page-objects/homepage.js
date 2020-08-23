/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Example usage:
 *   browser.page.homepage.navigate()
 *
 * For more information on working with page objects see:
 *   https://nightwatchjs.org/guide/working-with-page-objects/
 *
 */

module.exports = {
  url: '/',
  commands: [],

  // A page object can have elements
  elements: {
    appContainer: '#app'
  },

  // Or a page objects can also have sections
  sections: {
    app: {
      selector: '#app',

      // - a page object section can also have sub-sections
      // - elements or sub-sections located here are retrieved using the "app" section as the base
      sections: {
        navBar: {
          selector: 'nav.navBar',
          elements: {
            logo: 'img',
            navBarItem: {
              selector: '.navBarItem'
            }
          }
        },
        commingSoon: {
          selector: 'div.home',
          elements: {
            image: {
              selector: '#commingSoonImage'
            },
            actionButton: 'button'
          }
        }
      }
    }
  }
};
