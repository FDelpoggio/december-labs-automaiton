

describe('Get in touch form validation', function () {
    before(async () => browser.maximizeWindow().setDeviceDimensions({
        width: 1366,
        height: 768,
    }).navigateTo('https://inhouse.decemberlabs.com/'));
    after(async (browser) => browser.quit());

    it('Validate the correct behavior', async () => {
        const homePage = browser.page.form();

        homePage
            .useXpath()
            .click('@getInTouchBtn')
            .assert.elementPresent('@modalForm')
            .assert.textContains('@modalTitle', 'Get In Touch')
            
            .click('@modalSubmitBtn')
            .assert.cssProperty('@nameInput', 'borderColor', 'rgb(255, 0, 0)')
            .assert.cssProperty('@emailInput', 'borderColor', 'rgb(255, 0, 0)')
            .assert.cssProperty('@companyInput', 'borderColor', 'rgb(255, 0, 0)')
            .assert.cssProperty('@messageInput', 'borderColor', 'rgb(255, 0, 0)')

            .sendKeys('@nameInput', 'Test user')
            .sendKeys('@emailInput', 'test@gmail.com')
            .sendKeys('@companyInput', 'Test company')
            .sendKeys('@messageInput', 'Test message')

            .assert.not.cssProperty('@nameInput', 'borderColor', 'rgb(255, 0, 0)')
            .assert.not.cssProperty('@emailInput', 'borderColor', 'rgb(255, 0, 0)')
            .assert.not.cssProperty('@companyInput', 'borderColor', 'rgb(255, 0, 0)')
            .assert.not.cssProperty('@messageInput', 'borderColor', 'rgb(255, 0, 0)')
    })
});