import { expect as chaiExpect } from "chai"; 
import 'chai/register-should';

describe(' validate the myntra application', () => {
    it('should verify the url in the application', async () => {
        await  browser.url("https://www.myntra.com/");
        await browser.pause(1000);
    });

    it('should verify the title of an application', async() => {
        await expect(browser).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");
        await browser.pause(1000);
    });
    
    it('verifying search by clicking',async () => {
        const search =  await $('//input[@class="desktop-searchBar"]');
        await search.waitForClickable({timeout:1000});
        await search.setValue("watches");
        await expect(search).toHaveValueContaining('watches');
        const searchClick = await $('//a[@data-reactid="848"]');
        const tag =  await searchClick.getTagName();
        await searchClick.click();
        await searchClick.waitForClickable({timeout:1000});
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    it('should open a new page and get & print the value of product', async () => {
        const urlText = await browser.getUrl();
        chaiExpect(urlText).to.be.include('/watches');
        await expect(browser).toHaveUrl("https://www.myntra.com/watches");
        await browser.pause(2000);    
    });

    it('it should click the product & open a new window ', async () => {
        const clickingProduct = await $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
        await clickingProduct.click();
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        
    });

});


   