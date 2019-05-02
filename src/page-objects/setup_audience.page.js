var data= require('../data-files/setup_audience.js');

function selectAudience()
{
    this.audiencetitle=element(by.cssContainingText("h2.text-uppercase.size24.bold",data.datadriven.selectaudiencetitle));
    this.audience=element(by.xpath("//app-setup-audience//textarea[@formcontrolname='TargetAudienceEmailIDs']"));
    this.addalternateemail=element(by.xpath("//app-setup-audience//textarea[@formcontrolname='TeamMatesEmailIDs']"));
    this.alertdialog=element(by.xpath("//app-confirmation-dialog"));
    this.alertmessage=element(by.xpath("//app-confirmation-dialog//div[@class='modal-body']"));
    this.errormessage1=element(by.xpath("//app-setup-audience//div[@class='text-danger']"));
    this.nextbutton= element(by.cssContainingText('button.btn.btn-lg.btn-primary.fRight.snapBtn.bdrRad3.R10','Next'));
    this.newsfeedcreatedtxt=element(by.xpath("//app-newsletter-submit//div[@class='size14 text-center lightGrey marginT40']"));
    this.gotonewsfeedbtn=element(by.xpath("//app-newsletter-submit//button[@class='btn btn-primary snapModalBtn marginT40']"))
    //Add team mates window:
    this.addteammates=element(by.xpath("//a[@class='userListBtn pull-right']"));
    this.searchemailelement=element(by.xpath("//ngb-modal-window//input[@formcontrolname='filterByName']"));
    this.searchbutton=element(by.id("basic-addon2"));
    this.searchres=element(by.xpath("//app-user-modal-list//div[@class='modal-body nwsltrpopup']//h4"));
    this.submitbutton=element(by.xpath("//app-user-modal-list//button[contains(text(),'Submit')]"));
    //table with test results
    this.empdeptname=element(by.xpath("//app-user-modal-list//table[@class='table newsletterTable table-responsive']/thead/tr/th[2]"));
    this.empname=element(by.xpath("//app-user-modal-list//table[@class='table newsletterTable table-responsive']/thead/tr/th[3]"));
    this.emptitle=element(by.xpath("//app-user-modal-list//table[@class='table newsletterTable table-responsive']/thead/tr/th[4]"))
    this.selectemp=element(by.xpath("//app-user-modal-list//table[@class='table newsletterTable table-responsive']//span[@class='cr checkmark']"));
    this.taskallocationlist=element(by.xpath("//app-user-modal-list//textarea[@formcontrolname='distributionList']"));
    this.errormessage2=element(by.xpath("//app-user-modal-list//span[@class='error-message']"));//Please enter a name
    this.searchid=element.all(by.xpath("//app-user-modal-list//table[@class='table newsletterTable table-responsive']/tbody//td[contains(text(),'"+data.datadriven.searchempname+"')]/preceding-sibling::td//span[@class='cr checkmark']"));
    this.searchid1=element.all(by.xpath("//app-user-modal-list//table[@class='table newsletterTable table-responsive']/tbody//td[contains(text(),'"+data.datadriven.searchempname1+"')]/preceding-sibling::td//span[@class='cr checkmark']"));
    this.errormessage3=element(by.xpath("//app-user-modal-list//table/tbody/tr"));//***NoResults found
    this.editnewsfeedFilters=element(by.xpath("//app-setup-get-started//div[@class='create-nwsltr-head paddingTop20 paddingL0']//div"));
    this.audiencevalue;
    this.alternatemailvalue;
    this.checkTitle=function()
    {
        return this.audiencetitle.isDisplayed();
    };
    this.getedittitle=function()
    {
        return this.editnewsfeedFilters.getText().then(function(text)
        {
            return text;
            //return text.toString().split('>')[1].trim(); 
        });
    };
    this.isalternateemailDisabled=function()
    {
        return this.addalternateemail.getAttribute('disabled').then(function(value)
        {
            return value;
        });
    };
    this.setAudience=function(emailid)
    {
        this.audience.sendKeys(emailid);
    };
    this.audienceClear=function()
    {
        this.audience.clear();
    };
    this.getAudience=function()
    {
        return this.audience.getAttribute('value');
    };
    this.isaudienceruleDisplayed=function()
    {
       //return this.audience.isDisplayed();
       expect(this.audience.getAttribute('placeholder')).toBe(data.datadriven.audiencerule);
    };
    this.getErrormessage1=function()
    {
        return this.errormessage1.getText();
    };
    this.clickNext=function()
    {
        this.nextbutton.click();
    };
    this.getnewsfeedtext1=function()
    { 
        return this.newsfeedcreatedtxt.getText().then(function(text)
        {
            return text.toString().replace(/(\r\n|\n|\r)/gm,'');
        });
    };
    this.invalidemaildialog=function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.alertdialog), 5000);
        return this.alertmessage.getText().then(function(text)
        {
            return text.toString().replace(/(\r\n|\n|\r)/gm,'');
        });
    };
    this.addteammatesClick=function()
    {
        var button=this.addteammates;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.elementToBeClickable(button),10000);
        button.click();
    };
    this.searchempClick=function()
    {
        this.searchemailelement.click();
    };
    this.setmailidClick=function(emailid)
    {
        this.searchemailelement.sendKeys(emailid);
    };
    this.searchbuttonClick=function()
    {
        this.searchbutton.click();
    };
    this.searchresText=function()
    {
        return this.searchres.getText();
    };
    this.deptnameColumn=function()
    {
        return this.empdeptname.getText();
    };
    this.empnameColumn=function()
    {
        return this.empname.getText();
    };
    this.emptitleColumn=function()
    {
        return this.emptitle.getText();
    };
    this.selectempClick=function()
    {
        this.selectemp.click();
    };
    this.getTaskallocationlist=function()
    {
        return this.taskallocationlist.getAttribute('value').then(function(value)
        {
            return value;
        });
    };
    this.setTaskallocationlist=function(emailid)
    {
        this.taskallocationlist.sendKeys(emailid);
    };
    this.clearTaskallocationlist=function()
    {
        this.taskallocationlist.clear();
    };
    this.searchuseridClick=function(searchuserid)
    {
        if((data.datadriven.searchempname).includes(searchuserid))
        {
            this.searchid.click();
        }
        else if((data.datadriven.searchempname1).includes(searchuserid))
        {
            this.searchid1.click();
        }
    };
    this.submitbuttonClick=function()
    {
        this.submitbutton.click();
    };
    this.getAlternateemail=function()
    {
        return this.addalternateemail.getAttribute('value').then(function(value)
        {
            return value;
        });
    };
   
    this.geterrormessage2=function()
    {
        return this.errormessage2.getText();
    };
    this.geterrormessage3=function()
    {
        return this.errormessage3.getText();
    };
    this.gotonewsfeedbtnClick=function()
    {
        this.gotonewsfeedbtn.click();
    };
    this.setupaudience=function(audience,audience2)
    {
        this.setAudience(audience);
        //this.audiencevalue=this.getAudience();
        this.addteammatesClick();
        this.setTaskallocationlist(audience2);
        this.submitbuttonClick();
        //this.alternatemailvalue=this.getAlternateemail();
        this.getAudiencedetails();
        this.clickNext();
        this.gotonewsfeedbtnClick();
    };
    this.getAudiencedetails=function()
    {
        this.audiencevalue=this.getAudience();
        this.alternatemailvalue=this.getAlternateemail();
    };
};
module.exports=new selectAudience();