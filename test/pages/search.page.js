import page from './page';

class searchPage extends page {
// to use selectors we have to use geter function    
// open()--> is a method

    get searchBar() {
        return $('//input[@class="desktop-searchBar"]');
    }

    get searchIcon() {
        return $('//a[@data-reactid="848"]');
    }
    
    get watchProduct() {
        return $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
    }

    open() {
        super.open("https://www.myntra.com");
    }

}

export default new searchPage();