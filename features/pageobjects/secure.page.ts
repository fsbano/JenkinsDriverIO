import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {

    public get installRecommended () {
        return $('a[class="btn btn-primary btn-lg btn-huge install-recommended"]');
    }

    public get skipContinueAdmin () {
        return $('button[class="btn btn-link skip-first-user"]');
    }

    public get notNow () {
        return $('button[class="btn btn-link skip-configure-instance"]');
    }

    public get startUsingJenkins () {
        return $('button[class="btn btn-primary install-done"]');
    }

    public get logout () {
        return $('a[href="\/logout"');
    }

    public async CustomizeJenkins () {
        (await this.installRecommended).click();
        (await this.skipContinueAdmin).click();
        (await this.notNow).click();
        (await this.startUsingJenkins).click();
        let dashboard = await $(`title=Dashboard [Jenkins]`);
        await expect(dashboard).toHaveTitle(`Dashboard [Jenkins]`);
        (await this.logout).click();
        let logout = await $(`title=Sign in [Jenkins]`);
        await expect(logout).toHaveTitle(`Sign in [Jenkins]`);
    }
}

export default new SecurePage();
