import page from './page';

class watchPage extends page {
// to use selectors we have to use geter function    
// open()--> is a method

    get watchProduct() {
         return $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
    }

    get watchBreadCrumbs() 
    {
        return $('span.breadcrumbs-crumb');
    }

    get watchGenderCategoryList() 
    {
        return $$('//div[@class="vertical-filters-filters categories-container"]/ul/li/label/input');// 4 elements
    }

    get womenLink()
    {
        return $('//a[@data-reactid="179"]');
    }

    get watchesLink()
    {
        return $('//a[@data-reactid="211"]');
    }

    open() {
        super.open("https://www.myntra.com/");
    }

    waitForWatchesPage() 
    {
        return this.watchBreadCrumbs.waitForDisplayed({timeout:5000});
    }

    getWatchGenderCategoryListText() 
    {
       return this.watchGenderCategoryList.map(async (element) => {
        let val = await element.getValue();
        console.log(val);

       });  
    }

    get watchProduct() {
        return $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
    }
}

export default new watchPage();