import {LoginPageConstants} from '../Automation.SwagLabs.Constants/LoginPageConstants';
import {SetPageExtenstions} from '../Automation.SwagLabs.Extensions/SetPageExtenstions';
import {ClickPageExtensions} from '../Automation.SwagLabs.Extensions/ClickPageExtensions';
import {WaitPageExtensions} from '../Automation.SwagLabs.Extensions/WaitPageExtensions'
import {GetPageExtensions} from '../Automation.SwagLabs.Extensions/GetPageExtensions';
import test, { Page } from 'playwright/test';
import { Login } from '../Automation.SwagLabs.Dependencies/Login.spec';
import {ProductsPageConstants} from '../Automation.SwagLabs.Constants/ProductsPageConstants'
import {CartPageConstants} from '../Automation.SwagLabs.Constants/CartPageConstants';
import {InformationPageConstants} from '../Automation.SwagLabs.Constants/InformationPageConstants'
import {OverviewPageConstants} from '../Automation.SwagLabs.Constants/OverviewPageConstants';

test.describe('This Testuite: Checkout Process', async()=>{

    var page: Page;
    var setPageExtenstions;
    var clickPageExtensions;
    var waitPageExtensions;
    var getPageExtensions;

//context, page can not be part of TestFixures its created as per class basis 
test.beforeAll('Before All', async({browser})=>{
    page = await browser.newPage();
    await Login(page);

    setPageExtenstions =  new SetPageExtenstions(page);
    clickPageExtensions = new ClickPageExtensions(page);
    waitPageExtensions = new WaitPageExtensions(page);
    getPageExtensions = new GetPageExtensions(page);
});

test.afterAll('After All', async()=>{
    await page.close();
});

test.beforeEach('Before Each', async()=>{
    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await waitPageExtensions.WaitForTimeout(3000);
});


test('Checkout Process : Backpack ', async()=>{

    console.log("Executed");
    

    // await clickPageExtensions.ClickButtonByLocatorAsync(ProductsPageConstants.sauceLabsBackPackAddToCartButtonXPath);
    // await clickPageExtensions.ClickButtonByLocatorAsync(ProductsPageConstants.cartIconCssSelector);
    // await clickPageExtensions.ClickButtonByLocatorAsync(CartPageConstants.checkoutButtonXPath);

    // await setPageExtenstions.SetTextBoxValueByPlaceholder(InformationPageConstants.firstNameTextboxPlaceholderText, LoginPageConstants.userName);
    // await setPageExtenstions.SetTextBoxValueByPlaceholder(InformationPageConstants.lastNameTextboxPlaceholderText, LoginPageConstants.userPassword);
    // await setPageExtenstions.SetTextBoxValueByPlaceholder(InformationPageConstants.zipTextboxPlaceholderText, InformationPageConstants.zipCodeValue);

    // await clickPageExtensions.ClickButtonByLocatorAsync(InformationPageConstants.continueButtonXPath);

    // var paymentId = await getPageExtensions.GetInnerTextByLocator(OverviewPageConstants.paymentInformationDivXPath);
    // console.log("paymentId: ", paymentId);
    // await clickPageExtensions.ClickButtonByLocatorAsync(OverviewPageConstants.finishButtonXPath);

    // await waitPageExtensions.WaitForTimeout(3000);
});

test.skip('Checkout Process : Bike Light', async()=>{

    await clickPageExtensions.ClickButtonByLocatorAsync(ProductsPageConstants.sauceLabsBikeLightAddToCartButtonXpath);
    await clickPageExtensions.ClickButtonByLocatorAsync(ProductsPageConstants.cartIconCssSelector);
    await clickPageExtensions.ClickButtonByLocatorAsync(CartPageConstants.checkoutButtonXPath);

    await setPageExtenstions.SetTextBoxValueByPlaceholder(InformationPageConstants.firstNameTextboxPlaceholderText, LoginPageConstants.userName);
    await setPageExtenstions.SetTextBoxValueByPlaceholder(InformationPageConstants.lastNameTextboxPlaceholderText, LoginPageConstants.userPassword);
    await setPageExtenstions.SetTextBoxValueByPlaceholder(InformationPageConstants.zipTextboxPlaceholderText, InformationPageConstants.zipCodeValue);

    await clickPageExtensions.ClickButtonByLocatorAsync(InformationPageConstants.continueButtonXPath);

    var paymentId = await getPageExtensions.GetInnerTextByLocator(OverviewPageConstants.paymentInformationDivXPath);
    console.log("paymentId: ", paymentId);
    await clickPageExtensions.ClickButtonByLocatorAsync(OverviewPageConstants.finishButtonXPath);

    await waitPageExtensions.WaitForTimeout(3000);
});

// test('Checkout Process : Product 2', async()=>{

// });







})