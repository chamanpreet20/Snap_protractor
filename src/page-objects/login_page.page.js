var loginpage=function snap()
{
    this.usernameloc=element(by.id("txtField"));
    this.passwordloc=element(by.id("passField"));
    this.loginbutton=element(by.className("btn btn-lg btn-primary btn-block snapBtn"));
    //this.errormessage=element(by.xpath('//*[@id="loginMid"]/div/div[2]/div/form/div[1]/div[1]/span/span/div'));//Please enter a valid email address.
    this.errormessage=element(by.xpath("//span[@class='error-message']/div[contains(text(), 'Please enter a valid email address.')]"));
    this.errormessage1=element(by.cssContainingText('span.error-message','Please enter your email.'));
    this.loginform=element(by.css("form.form-signin.ng-dirty.ng-touched.ng-invalid"));
    this.errormessage2=element(by.cssContainingText('span.error-message','Please enter your password.'));
    this.errormessage3=element(by.xpath("//span[@class='error-message' and contains(text(), 'Wrong email or password')]"));
    this.logoutbtn=element(by.xpath("//a[contains(text(),'Logout')]"));
    this.getURL=function(url)
    {
        browser.get(url);
    };
    this.getTitle=function()
    {
        return browser.getTitle();
    };
    this.setUserName=function(name)
    {
        this.usernameloc.sendKeys(name);
    };
    this.setPassword=function(password)
    {
        this.passwordloc.sendKeys(password);
    };
    this.submitClick=function()
    {
        this.loginbutton.click();
    };
    this.getErrormessage=function()
    {
       return this.errormessage.getText();
    };
    this.getErrormessage1=function()
    {
       return this.errormessage1.getText();
    };
    this.getErrormessage2=function()
    {
        return this.errormessage2.getText();
    };
    this.getErrormessage3=function()
    {
        return this.errormessage3.getText();
    };
    this.checkAttribute=function()
    {
        return this.loginbutton.getAttribute('disabled').then(function(flag)
        {
            return flag;
        });
    };
    this.logoutbtnClick=function()
    {
        this.logoutbtn.click();
    }
    this.logintoApp=function(url,name,password)
    {
        this.getURL(url);
        this.setUserName(name);
        this.setPassword(password);
        this.submitClick();
    };
}; 
module.exports= new loginpage();