import page from './page';

class searchPage extends page {
// to use selectors we have to use geter function    
// open()--> is a method

    get search() {
        return $('//input[@class="desktop-searchBar"]');
    }

    get searchClick() {
        return $('//a[@data-reactid="848"]');
    }
    
    get clickingProduct() {
        return $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
    }

    open() {
        super.open("http......");
    }

}

export default new searchPage();