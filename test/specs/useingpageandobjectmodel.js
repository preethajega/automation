import searchPage from '../specs/pages/search.page'; 

describe(' validate the myntra application', () => {
    it('should verify the url in the application', async () => {
        await  browser.url("https://www.myntra.com/");
    });

    it('should verify the title of an application', async() => {
        await expect(browser).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");
        await browser.pause(1000);
    });
    
    it('verifying search by clicking',async () => {
       await searchPage.search.waitForClickable({timeout:4000});
       await searchPage.search.setValue("watches");
       await expect(searchPage.search).toHaveValueContaining('watches');
       await searchPage.searchClick.click();
       await searchPage.searchClick.waitForClickable({timeout:4000});
        
    });

    it('should verify the url of new page opened ', async () => {
        await expect(browser).toHaveUrl("https://www.myntra.com/watches");
        await browser.pause(2000);    
    });

    it('it should click the product & open a new window ', async () => {
        
        await searchPage.clickingProduct.click();
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        
    });

});