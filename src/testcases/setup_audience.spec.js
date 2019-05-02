var audience_obj=require('../page-objects/setup_audience.page.js');
var audience_data=require('../data-files/setup_audience.js');
var login= require("../page-objects/login_page.page.js");
var login_data= require("../data-files/Login_page.js");
var news_obj = require('../page-objects/create_newsletter.page.js');
var filter_obj=require('../page-objects/smart_filters.page.js');
var template_obj=require('../page-objects/select_template.page.js');
var newsfeed_obj=require('../page-objects/newsfeed_home.page.js');
var newsfeed_data=require('../data-files/newsfeed_home.js');
var using = require('jasmine-data-provider');

describe('select audience',function()
{
    beforeEach(function()
    {
        login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);  
    });
    //Validate select audience page title
    it('check title - select audience',function()
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef1);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();
        expect(audience_obj.checkTitle()).toBe(true);
    });
    //Mandatory fields in select audience page
    it('mandatory fields check - all fields are blank',function()
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef2);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        expect(audience_obj.isalternateemailDisabled()).toBe("true");
        audience_obj.clickNext();
        expect(audience_obj.getErrormessage1()).toBe(audience_data.datadriven.error1);
    });
    it('mandatory fields check - only target audience field blank',function()
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef3);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.addteammatesClick();
        audience_obj.setmailidClick(audience_data.datadriven.searchemailid);
        audience_obj.searchbuttonClick();  
        audience_obj.searchuseridClick(audience_data.datadriven.searchempname); 
        audience_obj.submitbuttonClick();
        expect(audience_obj.getAlternateemail()).toBe(audience_data.datadriven.searchempid);  
        audience_obj.clickNext();
        expect(audience_obj.getErrormessage1()).toBe(audience_data.datadriven.error1);     
    });
    //Validation for target audience - positive flow    
    using(audience_data.validaudience, function(data, description) 
    {
        it('Add target audience - success'+description,function()
        {
            news_obj.createNewnewsletter(data.newsfeedname);
            filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
            template_obj.selecttemplatePage();  
            browser.executeScript('window.scrollTo(0,300)').then(function(){});
            audience_obj.isaudienceruleDisplayed();
            audience_obj.setAudience(data.value1);
            audience_obj.addteammatesClick();
            audience_obj.setTaskallocationlist(data.value2);
            audience_obj.submitbuttonClick();
            expect(audience_obj.getAlternateemail()).toBe(data.value2);
            audience_obj.clickNext();
            expect(audience_obj.getnewsfeedtext1()).toBe(audience_data.datadriven.newsfeedsubmit1);
        });
    });
    //Validation for target audience field- Negative 
    using(audience_data.invaliddata, function(data, description) 
    {
        it('Invalid mail id'+description,function()
        {
            news_obj.createNewnewsletter(data.newsfeedname);
            filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
            template_obj.selecttemplatePage();  
            browser.executeScript('window.scrollTo(0,300)').then(function(){});
            audience_obj.setAudience(data.value1);
            audience_obj.clickNext();
            switch(description)
            {
                case "invalidaudience1": expect(audience_obj.invalidemaildialog()).toBe(audience_data.datadriven.error2);
                                        break;
                case "invalidaudience2": expect(audience_obj.invalidemaildialog()).toBe(audience_data.datadriven.error3);
                                        break; 
                case "invalidaudience3": expect(audience_obj.invalidemaildialog()).toBe(audience_data.datadriven.error4);
                                        break;                        
            }
        });  
    });  
    //Search when multiple users listed -success
    it('Share access rights with team members - success',function()//check
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef10);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setAudience(audience_data.datadriven.audience);
        audience_obj.addteammatesClick();
        audience_obj.setmailidClick(audience_data.datadriven.searchemailid);
        audience_obj.searchbuttonClick();
        expect(audience_obj.searchresText()).toBe(audience_data.datadriven.searchresult);
        expect(audience_obj.deptnameColumn()).toBe(audience_data.datadriven.empdeptname);
        expect(audience_obj.empnameColumn()).toBe(audience_data.datadriven.empname);
        expect(audience_obj.emptitleColumn()).toBe(audience_data.datadriven.emptitle);
        audience_obj.searchuseridClick(audience_data.datadriven.searchempname);
        expect(audience_obj.getTaskallocationlist()).toBe(audience_data.datadriven.searchempid);
        audience_obj.submitbuttonClick();
        expect(audience_obj.getAlternateemail()).toBe(audience_data.datadriven.searchempid);
    }); 
    //Validation for share access rights with team members window
    it('Share access rights with team members - Validations',function()
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef11);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setAudience(audience_data.datadriven.audience);
        audience_obj.addteammatesClick();
        audience_obj.searchempClick();
        audience_obj.searchbuttonClick();
        expect(audience_obj.geterrormessage2()).toBe(audience_data.datadriven.error5);//Please enter a name.
        audience_obj.setmailidClick(audience_data.datadriven.invalidsearch1);
        audience_obj.searchbuttonClick();
        expect(audience_obj.geterrormessage3()).toBe(audience_data.datadriven.error6);//***No results found***   
    });  
    //Validation for task allocation list in List of team members window - Negative 
    using(audience_data.invaliddata2, function(data, description) 
    {
        it('Invalid mail id'+description,function()
        {
            news_obj.createNewnewsletter(data.newsfeedname);
            filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
            template_obj.selecttemplatePage();  
            browser.executeScript('window.scrollTo(0,300)').then(function(){});
            audience_obj.addteammatesClick();
            audience_obj.setTaskallocationlist(data.value);
            audience_obj.submitbuttonClick();
            switch(description)
            {
                case "invalidaudience1": expect(audience_obj.invalidemaildialog()).toBe(audience_data.datadriven.error2);
                                        break;
                case "invalidaudience2": expect(audience_obj.invalidemaildialog()).toBe(audience_data.datadriven.error3);
                                        break; 
                case "invalidaudience3": expect(audience_obj.invalidemaildialog()).toBe(audience_data.datadriven.error4);
                                        break;                        
            }
        });  
    });  
    //Verify when task allocation list can be editted - success 
    it('Edit task allocation list',function()
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef12);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.addteammatesClick();
        audience_obj.setmailidClick(audience_data.datadriven.searchemailid);
        audience_obj.searchbuttonClick();
        audience_obj.searchuseridClick(audience_data.datadriven.searchempname);
        audience_obj.submitbuttonClick();
        expect(audience_obj.getAlternateemail()).toBe(audience_data.datadriven.searchempid);
        audience_obj.addteammatesClick();
        audience_obj.clearTaskallocationlist();
        expect(audience_obj.taskallocationlist.getAttribute('value')).toBe('');
        audience_obj.setmailidClick(audience_data.datadriven.searchemailid1);
        audience_obj.searchbuttonClick();
        audience_obj.searchuseridClick(audience_data.datadriven.searchempname1);
        audience_obj.submitbuttonClick();
        expect(audience_obj.getAlternateemail()).toBe(audience_data.datadriven.searchempid+","+audience_data.datadriven.searchempid1);
    });    
    //Validate newsfeed details once it is created successfully
    it('Newsfeed created - success',function()
    {
        news_obj.createNewnewsletter(audience_data.datadriven.newsfeednamef13);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setAudience(audience_data.datadriven.audience);
        audience_obj.addteammatesClick();
        audience_obj.setTaskallocationlist(audience_data.datadriven.audience2);
        audience_obj.submitbuttonClick();
        expect(audience_obj.getAlternateemail()).toBe(audience_data.datadriven.audience2);
        audience_obj.clickNext();
        audience_obj.gotonewsfeedbtnClick();
        expect(newsfeed_obj.getCurrentURL()).toBe(newsfeed_data.datadriven.URL);
    });
    
});
