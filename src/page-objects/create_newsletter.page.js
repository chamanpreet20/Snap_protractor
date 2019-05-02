var data= require('../data-files/create_newsletter.js');
function newsletter()
{
    this.loginusername=element(by.xpath("//app-global-header//u[@class='userImg']/following-sibling::span"));
    this.createnewsletter=element(by.className("createNew"));
    this.editnewsletter=element(by.xpath("//app-setup-get-started//div[@class='create-nwsltr-head paddingTop20 paddingL0']//div"));
    this.newsfeedname=element(by.css("input[placeholder='Enter Newsfeed Name']"));
    this.clientname=element(by.cssContainingText("[name=clientName] option",data.datadriven.clientname));
    this.clientnameele=element(by.name('clientName'));
    this.clientnameelement=this.clientnameele.element(by.css('option:checked'));
    this.newsfeeddomain=element(by.cssContainingText("[name=newsletterDomain] option",data.datadriven.newsfeeddomain));
    this.newsfeeddomainele=element(by.name('newsletterDomain'));
    this.newsfeeddomainelement= this.newsfeeddomainele.element(by.css('option:checked'));
    this.sourcetype=element(by.css("input[type='checkbox']"));
    this.nextbutton=element(by.cssContainingText('button.btn.btn-lg.btn-primary.fRight.snapBtn.bdrRad3.R10','Next'));
    this.titlefilters=element(by.cssContainingText('h2.text-uppercase.size24.bold','SMART FILTERS'));
    this.errormessage1=element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Newsfeed Name is required')]"));
    this.errormessage2=element(by.xpath("//div[@class='text-danger']"));//Please enter a valid email address.
    this.errormessage3=element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Only Whitespace is not allowed')]"));
    this.errormessage4=element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Client Name is required')]"));
    this.errormessage5=element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Domain Name is required')]"));
    this.errormessage6=element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Newsfeed Name should not be less than 10 characters.')]"));
    this.errormessage7=element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Newsfeed Name should be alphanumeric and these characters are')]"));
    this.clientnameorg;
    this.newsfeednameorg;
    this.newsfeeddomainorg;
    this.paidresourceorg;
    this.loginusernameorg;
    this.geterrormessage1=function()
    {
      return a1.getText();
    }
    this.getURL=function()
    {
      return browser.getCurrentUrl().then(function(cururl)
      {
        return cururl;
      });
    };
    this.getTitle=function()
    {
      return browser.getTitle();
    };
    this.getedittitle=function(){
      return this.editnewsletter.getText().then(function (text) {
      return text;
      });
    };
    this.clickCreatenewsletter=function()
    {
      var cnl=this.createnewsletter;
      var EC1 = protractor.ExpectedConditions;
      browser.wait(EC1.visibilityOf(cnl),2000);
      cnl.click();
    };
    this.setNewsfeedname=function(name)
    {
      this.newsfeedname.sendKeys(name);
    };
    this.getNewsfeedname=function()
    {
      return this.newsfeedname.getAttribute('value').then(function(text)
      {
        return text;
      });
    };
    this.clearNewsfeedname=function()
    {
      this.newsfeedname.clear();
    };
    this.setClientname=function()
    {
      this.clientname.click();
    };
    this.setNewsfeeddomain=function()
    {
      this.newsfeeddomain.click();
    };
    this.getNewsfeeddomain=function()
    {
      return this.newsfeeddomainelement.getText().then(function(value)
      {
        return value;
      });
    };
    this.sourcetypeEnabled=function()
    {
      return this.sourcetype.isEnabled();
    };
    this.isTitleDisplayed=function()
    {
      return this.titlefilters.isDisplayed();
    };
    this.nextClick=function()
    {
      var EC = protractor.ExpectedConditions;
      var buttonone = this.nextbutton;
      browser.wait(EC.visibilityOf(buttonone), 10000);
      browser.actions().mouseMove(buttonone).click().perform();
      //buttonone.click();
    };
    this.checkTitle=function()
    {
      return this.titlefilters.isDisplayed();
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
    this.getErrormessage4=function()
    {
       return this.errormessage4.getText();
    };
    this.getErrormessage5=function()
    {
       return this.errormessage5.getText();
    };
    this.getErrormessage6=function()
    {
       return this.errormessage6.getText();
    };
    this.getErrormessage7=function()
    {
      return this.errormessage7.getText();
    };
    this.getClientname=function()
    {
      return this.clientnameelement.getText().then(function(value)
       {
         return value;
       });
    };
    this.isPaidresource=function()
    {
      return this.sourcetype.isSelected().then(function(value)
      {
        if(value)
        {
          return 'Paid';
        }
        else
          return 'Unpaid';
      });
    };
    this.getLoginusername=function()
    {
      return this.loginusername.getText().then(function(text)
      {
        return text.toString().toLowerCase();
      });
    };
    this.createNewnewsletter=function(name)
    {
      this.clickCreatenewsletter();
      this.setNewsfeedname(name);
      this.setClientname();
      this.setNewsfeeddomain();
      expect(this.sourcetypeEnabled()).toBe(false);
      this.getNewsletterdetails();
      this.nextClick();
    };
    this.getNewsletterdetails=function()
    {
      this.loginusernameorg=this.getLoginusername();
      this.newsfeednameorg=this.getNewsfeedname();
      this.clientnameorg=this.getClientname();
      this.newsfeeddomainorg=this.getNewsfeeddomain();
      this.paidresourceorg=this.isPaidresource();
    };
};
module.exports=new newsletter();
