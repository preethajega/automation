
import watchesPage from '../pages/watches.page';


describe(' validate the myntra application', () => {
    
    it('should get the gender list & verify the url of new page opened ', async () => {
        watchesPage.open();
        await watchesPage.getWatchGenderCategoryListText();
        expect(browser).toHaveUrl("https://www.myntra.com/watches");
        await browser.pause(3000);    
    });

});
