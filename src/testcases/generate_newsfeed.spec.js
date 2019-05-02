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
var generate_data= require("../data-files/generate_newsfeed.js");
var articles_obj = require('../page-objects/select_articles.page.js');

describe('Newsfeed home page- Title and Add documents',function()
{
    beforeAll(function()
    {
        login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password); 
        news_obj.createNewnewsletter(generate_data.datadriven.newsfeednamef8);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails(); 
        browser.executeScript('window.scrollTo(0,0)').then(function(){});
        newsfeed_obj.generatebuttonClick();
    });
    //Generate news feed title check
    it('Generate news feed - title,error message',function()
    {
        expect(generate_obj.checkTitle()).toBe(true);
        expect(generate_obj.getgenerateTitle()).toBe("Generate Newsfeed > "+generate_data.datadriven.newsfeednamef8);
        expect(generate_obj.getErrormessage()).toBe(generate_data.datadriven.error1);
    });
    //select paid source Factiva
    it('select a paid source-Factiva(.pdf)',function()
    {
        generate_obj.selectOption(generate_data.datadriven.paidsourceF);
        expect(generate_obj.getDocumenttype()).toBe(generate_data.datadriven.Factivadoctype);
        expect(generate_obj.getFilesize()).toBe(generate_data.datadriven.Factivafilesize);
        expect(generate_obj.browsefilesDisplayed()).toBe(true);
        generate_obj.selectFile(generate_data.datadriven.factivafilename);
        expect(generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceF)).toBe(generate_obj.selectedfilename); 
    }); 
    //select paid source Nexis
    it('select a paid source-Nexis(.docx)',function()
    { 
        generate_obj.selectOption(generate_data.datadriven.paidsourceN);
        expect(generate_obj.getDocumenttype()).toBe(generate_data.datadriven.Nexisdoctype);
        expect(generate_obj.getFilesize()).toBe(generate_data.datadriven.Nexisfilesize);
        expect(generate_obj.browsefilesDisplayed()).toBe(true);
        generate_obj.selectFile(generate_data.datadriven.Nexisfilename);
        expect(generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceN)).toBe(generate_obj.selectedfilename);
    });
     //select paid source Rss
    it('select a paid source-RSS(.xlsx)',function()
    {
        generate_obj.selectOption(generate_data.datadriven.paidsourceR);
        expect(generate_obj.getDocumenttype()).toBe(generate_data.datadriven.RSSdoctype);
        expect(generate_obj.getFilesize()).toBe(generate_data.datadriven.RSSfilesize);
        expect(generate_obj.browsefilesDisplayed()).toBe(true);
        generate_obj.selectFile(generate_data.datadriven.RSSfilename);
        expect(generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceR)).toBe(generate_obj.selectedfilename);
    });
    //Select Document with invalid size
    it('select a paid source-Factiva invalid ',function()
    {
        generate_obj.selectOption(generate_data.datadriven.paidsourceF);
        generate_obj.selectFile(generate_data.datadriven.invalidfactivafile);
        generate_obj.uploadproceedbtnClick();
        expect(generate_obj.getmaxsizeError1()).toBe(generate_data.datadriven.maxsizeerror1);
        expect(generate_obj.getmaxsizeError2(generate_data.datadriven.paidsourceF)).toBe(generate_data.datadriven.maxsizeerror2);
        generate_obj.selecteddocsDelete(generate_obj.selectedfilename);
        expect(generate_obj.confirmdeleteDisplayed()).toBe(true);
        generate_obj.deleteconfirmClick();
    });
    it('Select Document with invalid size-Nexis(.docx)',function()
    { 
        generate_obj.selectOption(generate_data.datadriven.paidsourceN);
        generate_obj.selectFile(generate_data.datadriven.invalidnexisfile);
        generate_obj.uploadproceedbtnClick();
        expect(generate_obj.getmaxsizeError1()).toBe(generate_data.datadriven.maxsizeerror1);
        expect(generate_obj.getmaxsizeError2(generate_data.datadriven.paidsourceN)).toBe(generate_data.datadriven.maxsizeerror2);
        generate_obj.selecteddocsDelete(generate_obj.selectedfilename);
        expect(generate_obj.confirmdeleteDisplayed()).toBe(true);
        generate_obj.deleteconfirmClick();
    });
}); 
describe('Delete documents check',function()
{
    //Generate news feed title check
    it('Delete-Single',function()
    {
        generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceF).then(async function(text)
        {
            await generate_obj.selecteddocsDelete(text);
            await expect(generate_obj.confirmdeleteDisplayed()).toBe(true);
            await generate_obj.deleteconfirmClick();
            await expect(generate_obj.getallselecteddocs(text)).toBe("file not found");
        });
    });
    it('Delete multiple',function()
    {
        generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceN).then(async function(text)
        {
            await generate_obj.selecteddocsDelete(text);
            await expect(generate_obj.confirmdeleteDisplayed()).toBe(true);
            await generate_obj.deleteconfirmClick();
            await expect(generate_obj.getallselecteddocs(text)).toBe("file not found");
        });
        generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceR).then(async function(text)
        {
            await generate_obj.selecteddocsDelete(text);
            await expect(generate_obj.confirmdeleteDisplayed()).toBe(true);
            await generate_obj.deleteconfirmClick();
            await expect(generate_obj.getallselecteddocs(text)).toBe("file not found");
        });
    });
});  

describe('Upload and proceed',function()
{
    beforeAll(function()
    {
        login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password); 
        news_obj.createNewnewsletter(generate_data.datadriven.newsfeednamef9);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();  
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        audience_obj.setupaudience(audience_data.datadriven.audience,audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails(); 
        browser.executeScript('window.scrollTo(0,0)').then(function(){});
        newsfeed_obj.generatebuttonClick();
    });
    //Error message when proceeding to next page without uploading documents
    it('Upload and Proceed button click- Error',function()
    {
        generate_obj.uploadproceedbtnClick();
        expect(generate_obj.getErrormessage()).toBe(generate_data.datadriven.error1);
    });
    //Upload duplicate documents- Error
    it('Upload duplicate documents- Error',function()
    {
        generate_obj.selectOption(generate_data.datadriven.paidsourceF);
        generate_obj.selectFile(generate_data.datadriven.factivafilename);
        generate_obj.selectOption(generate_data.datadriven.paidsourceF);
        generate_obj.selectFile(generate_data.datadriven.factivafilename);
        generate_obj.uploadproceedbtnClick();
        expect(generate_obj.getErrormessage()).toBe(generate_data.datadriven.errorduplicate+generate_obj.selectedfilename);
        generate_obj.getSelectedDocs(generate_data.datadriven.paidsourceF).then(async function(text)
        {
            await generate_obj.selecteddocsDelete(text);
            await expect(generate_obj.confirmdeleteDisplayed()).toBe(true);
            await generate_obj.deleteconfirmClick();
        });
    });
    //Successfully navigating to next page after uploading documents
    it('Upload and Proceed button click- success',function()
    {
        generate_obj.selectOption(generate_data.datadriven.paidsourceF);
        generate_obj.selectFile(generate_data.datadriven.factivafilename);
        generate_obj.selectOption(generate_data.datadriven.paidsourceN);
        generate_obj.selectFile(generate_data.datadriven.Nexisfilename);
        generate_obj.uploadproceedbtnClick();
        expect(articles_obj.checkTitle()).toBe(true);
    });
    
});   