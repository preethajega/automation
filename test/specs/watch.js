
import watchesPage from '../pages/watches.page';


describe(' validate the watches page in myntra application', () => {
    
    it('should get the gender list & verify the url of new page opened ', async () => {
        watchesPage.open();
        await watchesPage.getWatchGenderCategoryListText();
        expect(browser).toHaveUrl("https://www.myntra.com/watches");
        await browser.pause(1000);    
    });

    it('should click the product & open a new window', async () => {
        await watchesPage.watchProduct.click();
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        
    });

});
