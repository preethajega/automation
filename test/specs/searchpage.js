import searchPage from '../pages/search.page'; 


describe(' validate the myntra application', () => {
    it('should verify the url', async () => {
        searchPage.open();
        await browser.pause();
    });

    it('verifying search by clicking & verify the url',async () => {
       await searchPage.search.click();
       //await searchPage.search.waitForClickable({timeout:1000});
       await searchPage.search.setValue("watches");
       await browser.pause();
       await expect(searchPage.search).toHaveValueContaining('watches');
       await searchPage.searchClick.click();
       await searchPage.searchClick.waitForClickable({timeout:1000});
       await expect(browser).toHaveUrl("https://www.myntra.com/watches");
       await browser.pause(1000);
    });

    it('it should click the product & open a new window ', async () => {
        await searchPage.clickingProduct.click();
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    });

});