
describe('Login to snap', function() 
{
  var login=require("../page-objects/login_page.page.js");
  var d=require("../data-files/Login_page.js");
  var log4js = require('log4js');

  log4js.configure({
    appenders: { logfile: { type: 'file', filename: 'log4j.log' } },
    categories: { default: { appenders: ['logfile'], level: 'debug' } }
});

var logger = log4js.getLogger('logfile');
logger.debug("Some debug messages");

  beforeEach(function()
  {
    login.getURL(d.datadriven.URL);
    logger.info('opened the url');
  });

  it('Successful Login', function() 
  {
    login.setUserName(d.datadriven.username);
    logger.info('Enter correct username');
    login.setPassword(d.datadriven.password);
    logger.info('Enter correct password');
    login.submitClick();
    logger.info('logged in to SNAP');
    expect(login.getTitle()).toBe(d.datadriven.Title); 
  });

  xit('Invalid login with incorrect username and password', function() 
  {
    login.setUserName(d.datadriven.username4);
    logger.info('Enter incorrect username');
    login.setPassword(d.datadriven.password4);
    logger.info('Enter incorrect password');
    expect(login.getErrormessage()).toBe(d.datadriven.error);
    logger.info('not logged in to SNAP');
    expect(login.checkAttribute()).toBe('true');
  }); 

  it('Unsuccessful login - blank username', function() 
  {
    login.setUserName(d.datadriven.username6);
    logger.info('Enter blank username');
    login.setPassword(d.datadriven.password6);
    logger.info('Enter correct password');
    expect(login.getErrormessage()).toBe(d.datadriven.error);
    logger.info('not logged in to SNAP with blank username');
    expect(login.checkAttribute()).toBe('true');
  }); 
  it('Unsuccessful login - Blank password', function() 
  {
    login.setUserName(d.datadriven.username);
    logger.info('Enter correct username');
    login.passwordloc.click();
    logger.info('Enter blank password');
    login.usernameloc.click(); //Anywhere in login form
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(login.getErrormessage2()),2000);
    expect(login.getErrormessage2()).toBe(d.datadriven.error2);
    logger.info('not logged in to SNAP with blank password');
    expect(login.checkAttribute()).toBe('true');
  }); 
  it('Unsuccessful login - invalid password', function() 
  {
    login.setUserName(d.datadriven.username);
    logger.info('Enter correct username');
    login.setPassword(d.datadriven.password7);
    logger.info('Enter incorrect password');
    login.submitClick();//check
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(login.getErrormessage3()),2000);
    logger.info('not logged in to SNAP with incorrect password');
    expect(login.getErrormessage3()).toBe(d.datadriven.error3);
    
  }); 
  it('blank username and password', function() 
  {
    login.usernameloc.click(); 
    logger.info('Enter blank username');
    login.passwordloc.click();
    logger.info('Enter blank password');
    login.usernameloc.click(); //Anywhere in login form
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(login.getErrormessage2()),2000);
    expect(login.getErrormessage1()).toBe(d.datadriven.error1);
    expect(login.getErrormessage2()).toBe(d.datadriven.error2);
    logger.info('not logged in to SNAP with blank username and password');
    expect(login.checkAttribute()).toBe('true');
  });

 /* afterEach(function()
  {
    login.logoutbtnClick();
  });*/
});