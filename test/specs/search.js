import searchPage from '../pages/search.page'; 

describe(' validate the myntra application', () => {
    it('should verify the url', async () => {
        searchPage.open();
        await browser.pause(1000);
    });

    it('verifying search by clicking & verify the url',async () => {
       await searchPage.searchBar.click();
       await searchPage.searchBar.waitForClickable({timeout:1000});
       await searchPage.searchBar.setValue("watches");
       await expect(searchPage.searchBar).toHaveValueContaining('watches');
       await browser.pause();
       await searchPage.searchIcon.click();
       await searchPage.searchIcon.waitForClickable({timeout:1000});
       await expect(browser).toHaveUrl("https://www.myntra.com/watches");
       await browser.pause(1000);
    });

    it('it should click the product & open a new window ', async () => {
        await searchPage.watchProduct.click();
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(1000);
    });

});