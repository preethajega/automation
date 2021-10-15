import watchPage from '../pages/watchm.page';

describe(' validating the myntra application', () => {
    
    it('should hover to women & watches of wearable link', async () => {

        watchPage.open();
        await browser.pause(2000);
        await watchPage.womenLink.moveTo();
        watchPage.watchesLink.waitForDisplayed({timeout:6000});
        await watchPage.watchesLink.click();

    });
    it('should get the gender list & verify the url of new page opened ', async () => {
    
        await watchPage.waitForWatchesPage();
        await watchPage.getWatchGenderCategoryListText();
        expect(browser).toHaveUrl("https://www.myntra.com/watches");
        await browser.pause(5000);    
    });

    it('should click the product & open a new window', async () => {
        await watchPage.watchProduct.click();
        let handles = await browser.getWindowHandles();
        await browser.pause(3000);
        await browser.switchToWindow(handles[1]);
        await browser.pause(3000);
        
    });

});
