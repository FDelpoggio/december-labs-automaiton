
module.exports = {

  elements: {
    getInTouchBtn: {
      selector: '//li[@id="menu-item-846" and ./a[contains(text(),"Get in touch")]]',
      locateStrategy: 'xpath',
      // index: 0
    },

    nameInput: {
      selector: '//input[@id="wpforms-872-field_0"]',
      locateStrategy: 'xpath',
      // index: 0
    },

    emailInput: {
      selector: '//input[@id="wpforms-872-field_1"]',
      locateStrategy: 'xpath',
      // index: 0
    },

    companyInput: {
      selector: '//input[@id="wpforms-872-field_6"]',
      locateStrategy: 'xpath',
      // index: 0
    },

    messageInput: {
      selector: '//textarea[@id="wpforms-872-field_2"]',
      locateStrategy: 'xpath',
      // index: 0
    },

    modalForm: {
      selector: '//div[contains(@class, "dl-getintouch-modal")]',
      locateStrategy: 'xpath',
      // index: 0

    },

    modalTitle: {
      selector: '//h3[contains(text(), "Get In Touch")]',
      locateStrategy: 'xpath',
      // index: 0
    },

    modalSubmitBtn: {
      selector: '//button[@id="wpforms-submit-872"]',
      locateStrategy: 'xpath',
      // index: 0
    },

    requiredElements: {
      selector: '//*[contains(@class,"wpforms-error") and (@type="text" or @type="email")]',
      locateStrategy: 'xpath',
      // index: 0
    },

  }
};
