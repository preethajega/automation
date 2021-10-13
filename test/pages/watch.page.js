import page from './page';

class watchPage extends page {
// to use selectors we have to use geter function    
// open()--> is a method

    get watchProduct() {
         return $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
    }

    get watchGenderCategoryList() 
    {
        return $$('//div[@class="vertical-filters-filters"][1]/ul/li/label/input');// 4 elements
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
    getWatchGenderCategoryListText() 
    {
       return this.watchGenderCategoryList.map((element) => {
        console.log(element.getValue());
       });
       
    }
}

export default new watchPage();