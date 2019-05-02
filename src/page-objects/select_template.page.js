var data= require('../data-files/select_template.js');
function template()
{
    this.previousbtn=element(by.xpath("//*[@id='wizardFixedBtm']//button[@class='prevBtn']"));
    this.templatetitle=element(by.cssContainingText("h2.text-uppercase.size24.bold",data.datadriven.templatetitle));
    this.nextbutton=element(by.css('button.btn.btn-lg.btn-primary.fRight.snapBtn.bdrRad3.R10','Next'));
    this.checkTitle=function()
    {
        return this.templatetitle.isDisplayed();
    };
    this.previousbtnClick=function()
    {
        var EC = protractor.ExpectedConditions;
        var buttonone = this.previousbtn;
        browser.wait(EC.visibilityOf(buttonone), 10000);
        browser.actions().mouseMove(buttonone).perform();
        //browser.wait(1000);
        buttonone.click();
        //this.previousbtn.click();
    };
    this.nextbuttonClick=function()
    {
        var EC = protractor.ExpectedConditions;
        var buttonone = this.nextbutton;
        browser.wait(EC.visibilityOf(buttonone), 10000);
        browser.actions().mouseMove(buttonone).perform();
        buttonone.click();
    };
    this.selecttemplatePage=function()
    {
        this.nextbuttonClick();
    };
};
module.exports=new template();