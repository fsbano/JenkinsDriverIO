import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputUsername () {
        return $('#j_username');
    }

    public get inputPassword () {
         // return $('#j_password');
         return $('#security-token');
    }

    public get btnSubmit () {
        // return $('button[type="submit"]');
        return $('input[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login () {
        // await this.inputUsername.setValue(`admin`);
        await this.inputPassword.setValue(`4dd51958383c456681220c4925b66ee0`);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
