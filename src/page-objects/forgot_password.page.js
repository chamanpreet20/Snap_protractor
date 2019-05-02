var forgotpassword=function snap()
{
    this.forgotpwd=element(by.linkText("Forgot Password?"));
    this.email=element(by.css("input[formControlName='email']"));
    this.formheading=element(by.cssContainingText('h2.form-forgot-heading','Forgot your password?'));
    this.errormessage1=element(by.cssContainingText('span.error-message','Please enter your email.'));
    //this.errormessage2=element(by.xpath("//*[@id='loginMid']/div/div[2]/div/form/div[2]/div/span/span/div")); //change
    this.errormessage2=element(by.xpath("//span[@class='error-message']/div[contains(text(), 'Please enter a valid email address.')]"));
    this.errormessage3=element(by.cssContainingText('div.error-message','Details you have provided does not exist.'));
    this.resetlink=element(by.className("btn btn-lg btn-primary btn-block snapBtn"));                               
    this.forgotclick=function()
    {
        this.forgotpwd.click();
    };
    this.setEmail=function(emailid)
    {
        this.email.sendKeys(emailid)
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
    this.isresetDisabled=function()
    {
        return this.resetlink.getAttribute('disabled').then(function(flag)
        {
            return flag;
        });
    };
    this.isresetEnabled=function()
    {
        return this.resetlink.isEnabled().then(function(flag)
        {
            return flag;
        });
    };
    this.getCurrentURL=function()
    {
        return browser.getCurrentUrl();
    }; 
};
module.exports= new forgotpassword();