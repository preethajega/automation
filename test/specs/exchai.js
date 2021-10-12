import { expect as chaiExpect } from 'chai';


describe(' validate the myntra application', () => {
    it('should verify the url in the application', async () => {
        await  browser.url("https://www.myntra.com/");
        await browser.pause(3000);
    });

    it('should verify the title of an application', async() => {
        //await browser.url("https://www.myntra.com/");
        await expect(browser).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");
        await browser.pause(3000);
    });
    
    it('verifying search by clicking',async () => {
        await (search = $('//input[@class="desktop-searchBar"]'));
        await search.waitForClickable({timeout:1000});
        await search.setValue("watches");
        await expect(search).toHaveValueContaining('watches');
        await (searchClick = $('//a[@data-reactid="848"]'));
        
        await searchClick.click();
        await searchClick.waitForClickable({timeout:1000});
        

    });

    it('should open a new page and get & print the value of product', async () => {
       await expect(browser).toHaveUrl(
            "https://www.myntra.com/watches");
        await browser.pause(3000);    
        prodClick= await $('/html/body/div[2]/div/div[1]/main/div[3]/div[2]/div/div[2]/section/ul/li[1]/a/div[2]/h4[1]');
        const proprintval =await prodClick.getValue();
        console.log(proprintval);
    });

    it('it should click the product and get the new url', async () => {
        clickingProduct = await $(
            "//img[contains(@src,'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13471916')");
        await clickingProduct.click();

        chaiExpect(url).to.be.include('smart-watch');
        const url = await browser.getUrl();
        await expect(browser).toHaveUrlContaining(
            'https://www.myntra.com/smart-watches/boat/boat-unisex-black-storm-m-');
    });

});


   