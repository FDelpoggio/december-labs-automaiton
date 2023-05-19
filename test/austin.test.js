const austinURL = 'https://inhouse.decemberlabs.com/locations/austin/';

describe('Austin Office website', function () {
    before(async () => browser.maximizeWindow().setDeviceDimensions({
        width: 1366,
        height: 768,
    }).navigateTo('https://inhouse.decemberlabs.com/'));
    after(async (browser) => browser.quit());

    it('Validate that it shows the popup', async () => {
        const austinPage = browser.page.austin();

        austinPage
            .useXpath()
            .assert.titleEquals('December Labs: UX/UI Design and Mobile App & Web Development')
            .assert.elementPresent('@mainMenu')
            
            .click('@austinLink')
                .assert.titleEquals('Austin Web & App Developers | December Labs')
                .assert.urlEquals(austinURL)
            .click('@scheduleConsultationBtn')
            .waitForElementVisible('@popup')
            .assert.elementPresent('@popup')
            .waitForElementVisible('@closePopup')
            .click('@closePopup')
            .assert.not.elementPresent('@popup')
    })
});