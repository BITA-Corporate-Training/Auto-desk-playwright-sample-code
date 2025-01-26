import {LoginPageConstants} from '../Automation.SwagLabs.Constants/LoginPageConstants';
import {SetPageExtenstions} from '../Automation.SwagLabs.Extensions/SetPageExtenstions';
import {ClickPageExtensions} from '../Automation.SwagLabs.Extensions/ClickPageExtensions';
import {WaitPageExtensions} from '../Automation.SwagLabs.Extensions/WaitPageExtensions'

export async function Login(page){

    var setPageExtenstions =  new SetPageExtenstions(page);
    var clickPageExtensions = new ClickPageExtensions(page);
    var waitPageExtensions = new WaitPageExtensions(page);

    await page.goto(process.env.url);

    await setPageExtenstions.SetTextBoxValueByPlaceholder(LoginPageConstants.userNameTextboxPlaceholderText, process.env.email);
    await setPageExtenstions.SetTextBoxValueByPlaceholder(LoginPageConstants.passwordTextboxPlaceholderText, process.env.password);
    await clickPageExtensions.ClickButtonByLocatorAsync(LoginPageConstants.loginButtonId);
    await waitPageExtensions.WaitForTimeout(3000);

    // console.log(process.env.NODE_ENV);
    // console.log(process.env.url);
    // console.log(process.env.email)
    // console.log(process.env.password);
    
    
    
    

}