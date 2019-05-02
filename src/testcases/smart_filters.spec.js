//var using = require('jasmine-data-provider');
var login= require("../page-objects/login_page.page.js");
var login_data= require("../data-files/Login_page.js");
var news_data= require('../data-files/create_newsletter.js');
var news_obj = require('../page-objects/create_newsletter.page.js');
var filter_data=require('../data-files/smart_filters.js');
var filter_obj=require('../page-objects/smart_filters.page.js');
var template_obj=require('../page-objects/select_template.page.js');
var newsfeed_obj=require('../page-objects/newsfeed_home.page.js');
var newsfeed_data=require('../data-files/newsfeed_home.js');
var value1;
var value2;

describe('Smart Filters', function() 
{
  beforeAll(function()
  {
    login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);
    news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef1); 
  });
  //Page title and mandatory fields 
  it('Page title and mandatory fields check', function() 
  {
    expect(filter_obj.checkTitle()).toBe(true);
    filter_obj.nextClick();
    expect(filter_obj.getErrormessage1()).toBe(true);
  });
  //Verify cancel option in common filters
  it('Add common filters - cancel button', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef3);
    browser.executeScript('window.scrollTo(0,0)').then({});
    filter_obj.commonfiltersClick();  
    filter_obj.setCommonfilters(filter_data.datadriven.commonfilter1);
    filter_obj.cancelbuttonClick();
    expect(filter_obj.isaddfiltersDisplayed()).toBe(true);
  });
  //verify invalid keywords are not accepted in the common filters 
  it('common filters - invalid keywords', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef4);
    browser.executeScript('window.scrollTo(0,0)').then({});
    filter_obj.commonfiltersClick(); 
    filter_obj.setCommonfilters(filter_data.datadriven.invalidfilter1); 
    browser.executeScript('window.scrollTo(0,100)').then(function()
    {
      expect(filter_obj.getErrormessage2()).toBe(true);
      filter_obj.savebutton1.getAttribute('disabled').then(function(attr)
      {
        expect(attr).toBe("true");
      });
    });
    filter_obj.cancelbuttonClick();
  }); 
  //Verify that user can set the common filters 
  it('Add common filters check', function() 
  {
    browser.executeScript('window.scrollTo(0,0)').then({});
    filter_obj.commonfiltersClick();  
    expect(filter_obj.commonfilterRule()).toBe(true);
    filter_obj.setCommonfilters(filter_data.datadriven.commonfilter1);
    browser.executeScript('window.scrollTo(0,300)').then(function()
    {
      filter_obj.savebuttonClick();
    });
    expect(filter_obj.iskeywordPresent()).toBe(true);
    expect(filter_obj.getCommonfilters()).toBe(filter_data.datadriven.commonfilter1);
    expect(filter_obj.isediticonPresent()).toBe(true);
  });
  afterAll(function()
  {
    console.log("Common filter completed")
    browser.executeScript('window.scrollTo(0,300)').then({});
    news_obj.nextClick();
    newsfeed_obj.newsfeedsClick();
    //expect(newsfeed_obj.getCurrentURL()).toBe(newsfeed_data.datadriven.URL);
    //newsfeed_obj.loginuserClick();
    //newsfeed_obj.logoutbtnClick();
  });
}); 
describe("Negative filters check",function()
{
  beforeAll(function()
  {
    login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);
    news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef2); 
    filter_obj.commonfiltersClick();  
    filter_obj.setCommonfilters(filter_data.datadriven.commonfilter1);
    browser.executeScript('window.scrollTo(0,300)').then(function()
    {
    filter_obj.savebuttonClick();
    });
    //filter_obj.nextClick();
    //newsfeed_obj.newsfeedsClick();
   // newsfeed_obj.selectactivenewsletter();
    //browser.executeScript('window.scrollTo(0,0);').then(function(){});
   // newsfeed_obj.editnewsletterClick(); 
    //browser.executeScript('window.scrollTo(0,300)').then({});
    //news_obj.nextClick();
  });
  /*
//Verify the validation when invalid negative filters 
  it('Negative filters - invalid keywords', function() //Defect: No error Message
  {
  //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef6);
  browser.executeScript('window.scrollTo(0,0)').then({});
  filter_obj.negativefiltersClick(); 
  filter_obj.setnegativefilters(filter_data.datadriven.invalidfilter1); 
  browser.executeScript('window.scrollTo(0,400)').then(function()
  {
    expect(filter_obj.getErrormessage3()).toBe(true);
    filter_obj.savebutton1.getAttribute('disabled').then(function(attr)
    {
      expect(attr).toBe("true");
    });
  });
  filter_obj.cancelbuttonClick();
  });
  //Validation message when Overall weightage is blank
  it('Add negative filters - overallweightage is blank', function() 
  {
  //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef13);
  browser.executeScript('window.scrollTo(0,0)').then({});
  filter_obj.negativefiltersClick(); 
  filter_obj.clearoverallweightageNegative();
  expect(filter_obj.getErrormessage7()).toBe(true);//Defect: No error Message
  }); */
  it('Add negative filters overallweightage- invalid entries', function() 
  {
  //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef14);
  browser.executeScript('window.scrollTo(0,0)').then({});
  filter_obj.negativefiltersClick();  
  filter_obj.setnegativefilters(filter_data.datadriven.commonfilter1);
  filter_obj.clearoverallweightageNegative();
  filter_obj.setoverallweightageNeg(filter_data.datadriven.overallwninvalid);
  expect(filter_obj.getErrormessage6()).toBe(true);
  filter_obj.cancelbuttonClick();
  });
  //Verify that user is able to add negative filters 
  it('Add negative filters check', function() 
  {
  //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef5);
  browser.executeScript('window.scrollTo(0,200)').then({});
  filter_obj.negativefiltersClick();  
  expect(filter_obj.negativefilterRule()).toBe(true);
  filter_obj.setnegativefilters(filter_data.datadriven.commonfilter1);
  browser.executeScript('window.scrollTo(0,500)').then(function()
  {
    filter_obj.savebuttonClick();
  });
  expect(filter_obj.isnegativeKeyword()).toBe(true);
  expect(filter_obj.isnegativefilterkeyword()).toBe(true);
  expect(filter_obj.editnegativefilter()).toBe(true);
  expect(filter_obj.deletenegativefilter()).toBe(true);
  expect(filter_obj.overallweightagecheck()).toBe(true);
  });
});

describe("Positive filters check",function()
{
  beforeAll(function()
  {
    login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);
    news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef3); 
    filter_obj.commonfiltersClick();  
    filter_obj.setCommonfilters(filter_data.datadriven.commonfilter1);
    browser.executeScript('window.scrollTo(0,300)').then(function()
    {
    filter_obj.savebuttonClick();
    });
  });  
  //Verify the validation message for invalid positive filters 
  it('Positive filters - invalid keywords', function() 
  { 
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef8);
    filter_obj.positivefiltersClick(); 
    filter_obj.setpositivefilters(filter_data.datadriven.invalidfilter2); 
    browser.executeScript('window.scrollTo(0,400)').then(function(){
      expect(filter_obj.getErrormessage4()).toBe(true);
      filter_obj.savebutton1.getAttribute('disabled').then(function(attr){
        expect(attr).toBe("true");
      });
    });
    filter_obj.cancelbuttonClick();
  });
  //Verify positive filters with overall weightage as blank  
  it('Add positive filters - overallweightage is blank ', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef12);
    filter_obj.positivefiltersClick();  
    filter_obj.clearoverallweightagepositive();
    expect(filter_obj.getErrormessage7()).toBe(true);
    filter_obj.cancelbuttonClick();
  });
  //Verify the positive filters when invalid values in overallweightage
  it('Add positive filters overallweightage- invalid entries', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef15);
    filter_obj.positivefiltersClick();  
    filter_obj.setpositivefilters(filter_data.datadriven.positivefilter1);
    filter_obj.clearoverallweightagepositive();
    filter_obj.setoverallweightagePositive(filter_data.datadriven.overallwninvalid);
    expect(filter_obj.getErrormessage8()).toBe(true);
    filter_obj.cancelbuttonClick();
  });
   //Verify that user is able to add positive filters 
   it('Add positive filters check', function() 
   {
     //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef7);
     filter_obj.positivefiltersClick();  
     expect(filter_obj.positivefilterRule()).toBe(true);
     filter_obj.setpositivefilters(filter_data.datadriven.positivefilter1);
     filter_obj.savebuttonClick();
     expect(filter_obj.ispositiveKeyword()).toBe(true);
     expect(filter_obj.ispositivefilterkeyword()).toBe(true);
     expect(filter_obj.editpositivefilter()).toBe(true);
     expect(filter_obj.deletepositivefilter()).toBe(true);
     expect(filter_obj.overallweightagecheckPositive()).toBe(true);
   });
  //Verify that user is able to add multiple positive filters 
  it('Positive filters - Add more option ',function()
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef9);
    filter_obj.deletepositivefiltersClick();
    filter_obj.deleteconfirmClick();
    filter_obj.addmorefilterClick();
    expect(filter_obj.addmorefilterCount()).toEqual(parseInt(filter_data.datadriven.positivefilterscount));
  });
  //Verify the validation message when multiple blank positive filters 
  it('Multiple blank positive filters - Add more option ',function()
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef10);
    filter_obj.addmorefilterClick();
    filter_obj.nextClick();
    expect(filter_obj.getErrormessage5()).toBe(true);
  });
});

describe("Additional filters check",function()
{
  beforeAll(function()
  {
    login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);
    news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef4); 
  });  
  //Advanced filters - default values
  it('Advanced filters - default values', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef16);
    browser.executeScript('window.scrollTo(0, document.body.scrollHeight)').then(function()//should find a solution
    {
      filter_obj.matchtitle.getAttribute('disabled').then(function(attr)
      {
        expect(attr).toBe('true');
      });
      //expect(filter_obj.ismatchtitleDisabled()).toBe('true');   
      expect(filter_obj.defaultincludeWholecontent()).toBe(false);
      expect(filter_obj.defaultautoremoveduplicate()).toBe(true);
      expect(filter_obj.getTitleboost()).toBe(filter_data.datadriven.defaulttitleboost);
      expect(filter_obj.defaultmaxnoarttextDisplayed()).toBe(true);
      expect(filter_obj.getDuplicatethreshold()).toBe(filter_data.datadriven.defaultthreshold);
    });
  });
  it('Advanced filters values retained when navigate to next page', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef18);
    filter_obj.commonfiltersClick();  
    filter_obj.setCommonfilters(filter_data.datadriven.commonfilter1);
    browser.executeScript('window.scrollTo(0,300)').then(function()
    {
      filter_obj.savebuttonClick();
    });
    filter_obj.setTitleboost();
    filter_obj.getTitleboost().then(function(text)
    {
      value1=text;
      //console.log("current threshold"+value1);
    });
    filter_obj.setDuplicatethreshold();
    filter_obj.getDuplicatethreshold().then(function(text)
    {
      value2=text;
      //console.log("current threshold"+value2);
    });
    filter_obj.setIncludewholecontent();
    filter_obj.uncheckAutoremoveduplicate();
    filter_obj.nextClick();
    expect(template_obj.checkTitle()).toBe(true);
    template_obj.previousbtnClick();
    browser.executeScript('window.scrollTo(0,400)').then(function()
    {
      expect(filter_obj.getTitleboost()).toBe(value1);
      expect(filter_obj.getDuplicatethreshold()).toBe(value2);
      expect(filter_obj.defaultincludeWholecontent()).toBe(true);
      expect(filter_obj.defaultautoremoveduplicate()).toBe(false);
      expect(filter_obj.defautsizeOfArticle()).toBe(filter_data.datadriven.Articlesize);
    });
  });
});
describe("Smart filters navigate to next page",function()
{
  beforeAll(function()
  {
    login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);
    news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef5); 
  });  
  it('Smart filters - values retained when navigate to next page', function() 
  {
    //news_obj.createNewnewsletter(filter_data.datadriven.newsfeednamef17);
    filter_obj.commonfiltersClick();  
    filter_obj.setCommonfilters(filter_data.datadriven.commonfilter1);
    browser.executeScript('window.scrollTo(0,300)').then(function()
    {
    filter_obj.savebuttonClick();
    });
    filter_obj.negativefiltersClick();  
    filter_obj.setnegativefilters(filter_data.datadriven.commonfilter1);
    filter_obj.savebuttonClick();
    filter_obj.positivefiltersClick();  
    filter_obj.setpositivefilters(filter_data.datadriven.positivefilter1);
    browser.executeScript('window.scrollTo(0,400)').then(function()
    {
    filter_obj.savebuttonClick();
    });
    filter_obj.nextClick();
    template_obj.previousbtnClick();
    expect(filter_obj.iskeywordPresent()).toBe(true);
    expect(filter_obj.getCommonfilters()).toBe(filter_data.datadriven.commonfilter1);
    expect(filter_obj.isediticonPresent()).toBe(true);

    expect(filter_obj.isnegativeKeyword()).toBe(true);
    expect(filter_obj.isnegativefilterkeyword()).toBe(true);
    expect(filter_obj.editnegativefilter()).toBe(true);
    expect(filter_obj.deletenegativefilter()).toBe(true);
    expect(filter_obj.overallweightagecheck()).toBe(true);

    expect(filter_obj.ispositiveKeyword()).toBe(true);
    expect(filter_obj.ispositivefilterkeyword()).toBe(true);
    expect(filter_obj.editpositivefilter()).toBe(true);
    expect(filter_obj.deletepositivefilter()).toBe(true);
    expect(filter_obj.overallweightagecheckPositive()).toBe(true);
  });
});  

