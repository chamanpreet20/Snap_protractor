var newsfeed_obj=require('../page-objects/newsfeed_home.page.js');
var newsfeed_data=require('../data-files/newsfeed_home.js');
var login= require("../page-objects/login_page.page.js");
var login_data= require("../data-files/Login_page.js");
var audience_obj=require('../page-objects/setup_audience.page.js');
var audience_data=require('../data-files/setup_audience.js');
var news_obj = require('../page-objects/create_newsletter.page.js');
var news_data= require("../data-files/create_newsletter.js");
var filter_obj=require('../page-objects/smart_filters.page.js');
var template_obj=require('../page-objects/select_template.page.js');
var generate_obj = require('../page-objects/generate_newsfeed.page.js');
var count=1;
describe('Newsfeed home',function()
{
    beforeEach(function()
    {
        login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);  
    });
    //News feed home page title
    it('News feed home page - title',function()
    {
        expect(newsfeed_obj.getCurrentURL()).toBe(newsfeed_data.datadriven.URL);
    });
    //News feed home page details check - success
    it('News feed details check',function()
    {
            newsfeed_obj.getsearchresultCount().then(function(c)
            {
                news_obj.createNewnewsletter(newsfeed_data.datadriven.newsfeednamef1);
                filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
                template_obj.selecttemplatePage();  
                browser.executeScript('window.scrollTo(0,300)').then(function(){});
                audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
                browser.executeScript('window.scrollTo(0,0)').then(function(){});
                newsfeed_obj.getalldetails();
                console.log("count"+c)
                expect(newsfeed_obj.getsearchresultCount()).toBe(c+1);
                expect(newsfeed_obj.usernameorg).toBe(news_obj.loginusernameorg);
        expect(newsfeed_obj.getnewsfeednameActive()).toBe(news_obj.newsfeednameorg);
        expect(newsfeed_obj.getactiveclientname()).toBe(news_obj.clientnameorg);
        expect(newsfeed_obj.getactivelastpublished()).toBe(newsfeed_data.datadriven.publishedstate);
        expect(newsfeed_obj.newsfeednameorg).toBe(news_obj.newsfeednameorg);
        expect(newsfeed_obj.clientnameorg).toBe(news_obj.clientnameorg);
        expect(newsfeed_obj.newsfeeddomainorg).toBe(news_obj.newsfeeddomainorg);
        expect(newsfeed_obj.paidsourceorg).toBe(news_obj.paidresourceorg);
        expect(newsfeed_obj.common_filterorg).toBe(filter_obj.commonfilterorg); 
        expect(newsfeed_obj.negative_filterorg).toBe(filter_obj.negativefilterorg);
        expect(newsfeed_obj.overall_weightage_norg).toBe(filter_obj.overallwNegativeorg)
        expect(newsfeed_obj.positive_filterorg).toBe(filter_obj.positivefiltersorg);
        expect(newsfeed_obj.overall_weightage_porg).toBe(filter_obj.overallwPositiveorg)
        expect(newsfeed_obj.title_boostorg).toBe(filter_obj.value1);
        expect(newsfeed_obj.duplicate_thresholdorg).toBe(filter_obj.value2);
        expect(newsfeed_obj.max_articlesorg).toBe(filter_obj.artsize);  
        expect(newsfeed_obj.match_wholecontentorg).toBe(filter_obj.includewholecontentvalue);
        expect(newsfeed_obj.remove_duplicateorg).toBe(filter_obj.removeduplicatevalue);
        expect(newsfeed_obj.target_audience1org).toBe(audience_obj.audiencevalue);
        expect(newsfeed_obj.target_audience2org).toBe(audience_obj.alternatemailvalue);
        expect(newsfeed_obj.isaudienceeditEnabled()).toBe(true);
        expect(newsfeed_obj.issmartfiltereditEnabled()).toBe(true);
        expect(newsfeed_obj.isnewslettereditEnabled()).toBe(true);
            });
        //});
        
        //expect(newsfeed_obj.isEquivalent()).toBe(true);
        //expect(angular.equals(newsfeed_obj.map,newsfeed_obj.map1)).toBe(true)
    });
    /*
    //Edit smart filters in newsletter home page
    it('News feed details check -  edit smart filters page',function()
    {
        news_obj.createNewnewsletter(newsfeed_data.datadriven.newsfeednamef2);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails();
        browser.executeScript('window.scrollTo(0,0);').then(function(){});
        newsfeed_obj.smartfiltereditClick();
        expect(filter_obj.checkTitle()).toBe(true);
        newsfeed_obj.newsfeednameorg.then(function(text)
        {
            expect(filter_obj.getedittitle()).toBe(newsfeed_data.datadriven.edittitle+text);
        });
        expect(filter_obj.getCommonfilters()).toBe(newsfeed_obj.common_filterorg);
        expect(filter_obj.getNegativefilters()).toBe(newsfeed_obj.negative_filterorg);
        expect(filter_obj.getoverallweightageNeg()).toBe(newsfeed_obj.overall_weightage_norg);
        expect(filter_obj.getPositivefilters()).toBe(newsfeed_obj.positive_filterorg);
        expect(filter_obj.getoverallweightagePos()).toBe(newsfeed_obj.overall_weightage_porg);
        expect(filter_obj.getTitleboost()).toBe(newsfeed_obj.title_boostorg);
        expect(filter_obj.getDuplicatethreshold()).toBe(newsfeed_obj.duplicate_thresholdorg);
        expect(filter_obj.defautsizeOfArticle()).toBe(newsfeed_obj.max_articlesorg);
        expect(filter_obj.getincludeWholecontent()).toBe(newsfeed_obj.match_wholecontentorg);
        expect(filter_obj.getautoremoveduplicate()).toBe(newsfeed_obj.remove_duplicateorg);    
    }); 
    
   //Edit audience in newsletter home page
    it('News feed details check-Edit audience page',function()
    {
        news_obj.createNewnewsletter(newsfeed_data.datadriven.newsfeednamef3);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails();
        browser.executeScript('window.scrollTo(0,0);').then(function(){});
        newsfeed_obj.audienceeditClick();
        expect(audience_obj.checkTitle()).toBe(true);
        newsfeed_obj.newsfeednameorg.then(function(text)
        {
            expect(audience_obj.getedittitle()).toBe(newsfeed_data.datadriven.edittitle+text);
        });
        expect(audience_obj.audiencevalue).toBe(newsfeed_obj.target_audience1org);
        expect(audience_obj.alternatemailvalue).toBe(newsfeed_obj.target_audience2org);
    });
    //Edit news letter 
    it('Edit news letter ',function()
    {
        news_obj.createNewnewsletter(newsfeed_data.datadriven.newsfeednamef4);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails();
        browser.executeScript('window.scrollTo(0,0);').then(function(){});
        newsfeed_obj.editnewsletterClick();
        expect(newsfeed_obj.iseditnewsfeedDisplayed()).toBe(true);
        news_obj.newsfeednameorg.then(function(text)
        {
            expect(news_obj.getedittitle()).toBe(newsfeed_data.datadriven.edittitle+text);
        });
        news_obj.clearNewsfeedname();
        news_obj.setNewsfeedname(newsfeed_data.datadriven.newsfeednamef5);
        news_obj.getNewsletterdetails();
        news_obj.nextClick();
        filter_obj.commonfilteditClick();
        filter_obj.clearCommonfilter();
        filter_obj.setCommonfilters(newsfeed_data.datadriven.common_filter1);
        browser.executeScript('window.scrollTo(0,500)').then(function(){});
        filter_obj.savebuttonClick();
        filter_obj.getSmartfilterdetails();
        filter_obj.nextClick();
        template_obj.selecttemplatePage(); 
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.audienceClear();
        audience_obj.setAudience(newsfeed_data.datadriven.audience1);
        audience_obj.getAudiencedetails();
        audience_obj.clickNext();
        audience_obj.gotonewsfeedbtnClick();
        newsfeed_obj.getalldetails();
        browser.executeScript('window.scrollTo(0,0);').then(function(){});
            expect(newsfeed_obj.newsfeednameorg).toBe(news_obj.newsfeednameorg);
            expect(newsfeed_obj.common_filterorg).toBe(filter_obj.commonfilterorg);
            expect(newsfeed_obj.target_audience1org).toBe(audience_obj.audiencevalue);
            expect(newsfeed_obj.target_audience2org).toBe(audience_obj.alternatemailvalue);
    }); 
    
    //Search news letter - success
    it('News feed details- search with a news letter name',function()
    {
        news_obj.createNewnewsletter(newsfeed_data.datadriven.newsfeednamef6);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails();
        newsfeed_obj.setSearchnewsfeed(newsfeed_data.datadriven.searchkeyword);
        expect(newsfeed_obj.getnewsfeednameActive()).toBe(news_obj.newsfeednameorg);
        expect(newsfeed_obj.getactiveclientname()).toBe(news_obj.clientnameorg);
        expect(newsfeed_obj.getactivelastpublished()).toBe(newsfeed_data.datadriven.publishedstate);
        expect(newsfeed_obj.newsfeednameorg).toBe(news_obj.newsfeednameorg);
        expect(newsfeed_obj.clientnameorg).toBe(news_obj.clientnameorg);
        expect(newsfeed_obj.newsfeeddomainorg).toBe(news_obj.newsfeeddomainorg);
        expect(newsfeed_obj.paidsourceorg).toBe(news_obj.paidresourceorg);
        expect(newsfeed_obj.common_filterorg).toBe(filter_obj.commonfilterorg); 
        expect(newsfeed_obj.negative_filterorg).toBe(filter_obj.negativefilterorg);
        expect(newsfeed_obj.overall_weightage_norg).toBe(filter_obj.overallwNegativeorg)
        expect(newsfeed_obj.positive_filterorg).toBe(filter_obj.positivefiltersorg);
        expect(newsfeed_obj.overall_weightage_porg).toBe(filter_obj.overallwPositiveorg)
        expect(newsfeed_obj.title_boostorg).toBe(filter_obj.value1);
        expect(newsfeed_obj.duplicate_thresholdorg).toBe(filter_obj.value2);
        expect(newsfeed_obj.max_articlesorg).toBe(filter_obj.artsize);  
        expect(newsfeed_obj.match_wholecontentorg).toBe(filter_obj.includewholecontentvalue);
        expect(newsfeed_obj.remove_duplicateorg).toBe(filter_obj.removeduplicatevalue);
        expect(newsfeed_obj.target_audience1org).toBe(audience_obj.audiencevalue);
        expect(newsfeed_obj.target_audience2org).toBe(audience_obj.alternatemailvalue);
        expect(newsfeed_obj.isaudienceeditEnabled()).toBe(true);
        expect(newsfeed_obj.issmartfiltereditEnabled()).toBe(true);
        expect(newsfeed_obj.isnewslettereditEnabled()).toBe(true);
        expect(newsfeed_obj.getsearchresultCount()).toBe(1);
    });   
    //Delete a news letter - success
    it('News feed details- search with a news letter name',function()
    {
        let count=function()
        {
            return new Promise(function(resolve,reject)
            {
                resolve(countv=newsfeed_obj.getsearchresultCount());
            });
        };
        count().then(function(c)
        {
            news_obj.createNewnewsletter(newsfeed_data.datadriven.newsfeednamef7);
            filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
            template_obj.selecttemplatePage();  
            browser.executeScript('window.scrollTo(0,300)').then(function(){});
            audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
            newsfeed_obj.getalldetails();
            browser.executeScript('window.scrollTo(0,0)').then(function(){});
            newsfeed_obj.deleteClick();
            expect(newsfeed_obj.deletenewsletterAlert()).toBe(newsfeed_data.datadriven.alertmessage+'"'+newsfeed_data.datadriven.newsfeednamef7+'"');
            newsfeed_obj.confirmDelete();
            expect(newsfeed_obj.getconfirmdeleteMsg()).toBe(newsfeed_data.datadriven.confirmmessage);
            newsfeed_obj.delfinalconfirmClick();
            expect(newsfeed_obj.getnewsfeedname()).not.toBe(news_obj.newsfeednameorg);
            expect(newsfeed_obj.getsearchresultCount()).toBe(c);
            expect(newsfeed_obj.getnewsfeednameActive()).not.toBe(news_obj.newsfeednameorg);
            newsfeed_obj.setSearchnewsfeed(newsfeed_data.datadriven.newsfeednamef7);
            expect(newsfeed_obj.getsearchresultCount()).toBe(0);
        }); 
    });
    */
});    