import beauty from '../pages/beauty.page';

describe('validating a myntra application by applying filters', () => {
    
    before(() => {
        browser.maximizeWindow();
    });

    it('should open a application & hover to beauty and shampoo link', async () => {
        beauty.open();
        await beauty.beautyLink.moveTo();
        await beauty.shampooLink.waitForDisplayed({timeout:4000});
        await beauty.shampooLink.click();
        

    });

    it('should apply the filters like colour & discount and verify that filters applied or not', async () => {
        await beauty.waitForShampooPage();
        await beauty.colourFilterCheckBox.waitForClickable({timeout:6000});
        await beauty.colourFilterCheckBox.click(); 
        let colourDisplay = await beauty.filterVerifyCheckBox.isDisplayed();
        console.log(colourDisplay);

        
        await beauty.discountRangeRadioButton.scrollIntoView();
        await beauty.waitForShampooPage();
        await beauty.discountRangeRadioButton.waitForExist({timeout:8000});
        await beauty.discountRangeRadioButton.click();
        let discountDisplay = await beauty.discountVerifyRadioButton.isDisplayed();
        console.log(discountDisplay); 
    });


    
});