describe('validating the myntra application name',  () => {
    before(() => {
         browser.url("https://www.myntra.com/");
         browser.pause(2000);
    });

    after(() => {
        console.log("test completed");
    });

    it('verifying the url name ',  () => {
        expect(browser).toHaveUrl("https://www.myntra.com/");
        
    });

    it('verifying the url name partially ',  () => {
        expect(browser).toHaveUrlContaining("https://www.myntra");
        
    });

    it('verifying the title of an application ',  () => {
         expect(browser).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");
        
    });

    it('verifying the title of an application partially ',  () => {
         expect(browser).toHaveUrlContaining("Online Shopping for Women, Men");
        
    });

    
});