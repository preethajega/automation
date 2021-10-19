import page from "./page";

class beauty extends page{
    open(){
        super.open("https://www.myntra.com/");
    }

    get beautyLink ()
    {
       return $("div[data-reactid='635']");
    }

    get shampooLink()
    {
       return $("a[data-reactid='706']");
    }

    get shampooBreadCrumbs() 
    {
        return $('span.breadcrumbs-crumb');
    }

    waitForShampooPage() 
    {
        return this.shampooBreadCrumbs.waitForDisplayed({timeout:8000});
    }

    get colourFilterCheckBox()
    {
        return $("//input[@value='White']/following-sibling::*[@class='common-checkboxIndicator']");
    }

    get filterVerifyCheckBox()
    {
        return $("//div[@class='filter-summary-filter']//span[@data-colorhex='white']");
    }

    /*getColourFilterIsDisplay()
    {
        return this.filterVerifyCheckBox(async () => {
            let colourDisplay = await filterVerifyCheckBox.isDisplayed();
            console.log(colourDisplay);
    
           });  
        
    }*/

    get discountRangeRadioButton()
    {
        return $("//ul[@class='discount-list']/descendant::div[1]");
    }

    get discountVerifyRadioButton()
    {
        return $("//span[text()='10 % and above']");
    }

   /* getDiscountFilterDisplay()
    {
        return this.discountVerifyRadioButton(async () => {
        let discountDisplay = await beauty.discountVerifyRadioButton.isDisplayed();
        console.log(discountDisplay); 
        });
    }
*/
}

export default new beauty();