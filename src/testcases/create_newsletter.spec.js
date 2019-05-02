describe('News letter', function() 
{
  var using = require('jasmine-data-provider');
  var obj = require('../page-objects/create_newsletter.page.js');
  var login= require("../page-objects/login_page.page.js");
  var d= require("../data-files/Login_page.js");
  var data1= require('../data-files/create_newsletter.js');
  beforeEach(function()
  {
    login.logintoApp(d.datadriven.URL,d.datadriven.username,d.datadriven.password);
  });

  it('Create new news letter page visibility check', function() 
  {
    obj.clickCreatenewsletter();
    expect(obj.getURL()).toBe(data1.datadriven.CreatenewsfeedTitle);
    /* browser.getCurrentUrl().then(function(newurl){
      expect(newurl).toBe(data1.datadriven.CreatenewsfeedTitle);
     });*/
  });
  
  it('Successfully create a news letter', function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname);
    expect(obj.checkTitle()).toBe(true);
  });
  xit('Valid special characters in news letter name-1',function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname5);
    expect(obj.checkTitle()).toBe(true);
  });
  xit('Valid special characters in news letter name-2',function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname6);
    expect(obj.checkTitle()).toBe(true);
  });
  xit('Valid special characters in news letter name-3',function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname7);
    expect(obj.checkTitle()).toBe(true);
  });
  it('Check duplicate news letter name', function() 
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname1);
    expect(obj.getErrormessage2()).toBe(data1.datadriven.error5);//"Newsfeed with this name already exists."
  });
  xit('Create a news letter with blank values',function()
  {
    obj.clickCreatenewsletter();
    expect(obj.sourcetypeEnabled()).toBe(false);
    obj.nextClick();
    expect(obj.getErrormessage1()).toBe(data1.datadriven.error1);//"Newsfeed Name is required"
    expect(obj.getErrormessage3()).toBe(data1.datadriven.error2);//"Only Whitespace is not allowed"
    expect(obj.getErrormessage4()).toBe(data1.datadriven.error3);//"Client Name is required"
    expect(obj.getErrormessage5()).toBe(data1.datadriven.error4);//"Domain Name is required"
  });
  it('News letter name character length check',function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname2);
    expect(obj.getErrormessage6()).toBe(data1.datadriven.error6);//"Newsfeed Name should not be less than 10 characters."
  });
  it('Invalid News letter name-(Minimum length & invalid special characters) ',function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname3);
    expect(obj.getErrormessage6()).toBe(data1.datadriven.error6);//Newsfeed Name should not be less than 10 characters.
    expect(obj.getErrormessage7()).toBe(data1.datadriven.error7);//Newsfeed Name should be alphanumeric and these characters are ' "; : , # allowed.
  });
  using(data1.invaliddata, function(data, description) 
  {
    it('Invalid News letter name'+description,function()
    {
      obj.createNewnewsletter(data.value);
      expect(obj.getErrormessage7()).toBe(data1.datadriven.error7);//Newsfeed Name should be alphanumeric and these characters are ' "; : , # allowed.
    });
  });
  /*it('Invalid News letter name-(invalid special characters)',function()
  {
    obj.createNewnewsletter(data1.datadriven.newsfeedname4);
    expect(obj.getErrormessage7()).toBe(data1.datadriven.error7);//Newsfeed Name should be alphanumeric and these characters are ' "; : , # allowed.
     });*/
  xit('Create news letter without client name',function()
  {
    obj.clickCreatenewsletter();
    obj.setNewsfeedname(data1.datadriven.newsfeedname);
    obj.setNewsfeeddomain();
    expect(obj.sourcetypeEnabled()).toBe(false);
    obj.nextClick();
    expect(obj.getErrormessage4()).toBe(data1.datadriven.error3);//"Client Name is required"
  });
  it('Create news letter without news feed domain name',function()
  {
    obj.clickCreatenewsletter();
    obj.setNewsfeedname(data1.datadriven.newsfeedname);
    obj.setClientname();
    expect(obj.sourcetypeEnabled()).toBe(false);
    obj.nextClick();
    expect(obj.getErrormessage5()).toBe(data1.datadriven.error4);//"Domain Name is required"
  });
  /*afterEach(function()
  {
    login.logoutbtnClick();
  });*/
});