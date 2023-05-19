
module.exports = {

  elements: {
    mainMenu: {
      selector: '//*[@id="menu-header-main-menu"]',
      locateStrategy: 'xpath',

    },

    austinLink: {
      selector: '//a[@href="/locations/austin" and contains(text(), "Austin")]',
      locateStrategy: 'xpath',

    },

    scheduleConsultationBtn: {
      selector: '//div[@class="buttons" and ./a[contains(text(), "Schedule free consultation")]]',
      locateStrategy: 'xpath',

    },

    popup: {
      selector: '//div[@class="dl-modal calendar-modal open"]//div[@class="start-project-form content_form"]',
      locateStrategy: 'xpath',

    },

    closePopup: {
      selector: '//*//div[@class="btn-close-modal"]',
      locateStrategy: 'xpath',

    },

  }
};
