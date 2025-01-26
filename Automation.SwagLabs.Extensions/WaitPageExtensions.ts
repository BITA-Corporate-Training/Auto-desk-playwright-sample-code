import { Page } from "playwright";

export class WaitPageExtensions{

    private page: Page

    constructor(page){
        this.page = page;
    }
    

    async WaitForDomContentsToBeLoaded(){
        await this.page.waitForLoadState('domcontentloaded');

    }

    async WaitForPageContentsToBeLoaded(){
        await this.page.waitForLoadState('load');
    }

    async WaitForSelectorToBeVisible(locator){
        await this.page.waitForSelector(locator, {state: 'visible'}); //timeout is optional
    }

    async WaitForSelectorToBeAttached(locator){
        await this.page.waitForSelector(locator, {state: 'attached'}); //timeout is optional
    }

    //debug
    async WaitForTimeout(timeSpanInMilliSeconds){
        await this.page.waitForTimeout(timeSpanInMilliSeconds);
    }
}