var newsfeed_obj = require('../page-objects/newsfeed_home.page.js');
var newsfeed_data = require('../data-files/newsfeed_home.js');
var login = require("../page-objects/login_page.page.js");
var login_data = require("../data-files/Login_page.js");
var audience_obj = require('../page-objects/setup_audience.page.js');
var audience_data = require('../data-files/setup_audience.js');
var news_obj = require('../page-objects/create_newsletter.page.js');
var filter_obj = require('../page-objects/smart_filters.page.js');
var template_obj = require('../page-objects/select_template.page.js');
var generate_obj = require('../page-objects/generate_newsfeed.page.js');
var generate_data = require("../data-files/generate_newsfeed.js");
var articles_obj = require('../page-objects/select_articles.page.js');
var articles_data = require("../data-files/select_articles.js");
var array2 = [];
var array1 = [];
var arr=[];
var a = [];
describe('Select Articles', function () {
    beforeAll(function () {
        login.logintoApp(login_data.datadriven.URL, login_data.datadriven.username, login_data.datadriven.password);
        news_obj.createNewnewsletter(articles_data.datadriven.newsfeedname10);
        filter_obj.smartfilterspage(audience_data.datadriven.commonfilter1);
        template_obj.selecttemplatePage();
        browser.executeScript('window.scrollTo(0,300)').then(function () { });
        audience_obj.setupaudience(audience_data.datadriven.audience, audience_data.datadriven.audience2);
        newsfeed_obj.getalldetails();
        browser.executeScript('window.scrollTo(0,0)').then(function () { });
        newsfeed_obj.generatebuttonClick();
        generate_obj.generateNF();
    });
    
    //Generate news feed title check
    it('Generate news feed - title check',function()
    {
        expect(articles_obj.checkTitle()).toBe(true);
        expect(articles_obj.getgenerateTitle()).toBe("Generate Newsfeed > "+articles_data.datadriven.newsfeedname10);
    });
    //Select articles and check selected count
    it('Select articles and check selected count',function()
    {
        articles_obj.selectArticles();
        expect(articles_obj.getselectedarticles()).toBe(4);   
    });
    //Check the default load count
    it('Select all articles- check',function()
    {
        articles_obj.selectallarticlesClick();
        expect(articles_obj.getselectedarticles()).toBe(articles_data.datadriven.defaultloadcount); 

    });
    it('Check uploaded documents retained on navigating back', function () {
        array1 = [generate_obj.paidsourceForg.then(function (t) {
            return t;
        }), generate_obj.paidsourceNorg.then(function (t) {
            return t;
        }), generate_obj.paidsourceRorg.then(function (t) {
            return t;
        })];
        articles_obj.prevbtnClick();
        expect(generate_obj.alreadyuploadedConfirm()).toBe(generate_data.datadriven.alreadyuploadmsg);
        generate_obj.alreadyuploadkeepClick();
        generate_obj.getfilesUploaded().then(function(text)
        {
            arr=text.toString().split(",");
        })
        arr.forEach(x => expect(array1).toContain(x));
    });
    xit('Scroll page to end',function() // check
    {  
        this.lastelement=element(by.xpath("//*[@id='curatedTab']/div[4]/div/table/tbody/tr[474]/td[2]/a"));
        browser.controlFlow().execute(function() {
            browser.executeScript('scrollTo(0,scrollHeight);');
            this.lastelement.getText().then(function(text)
            {
            console.log("text"+text);
            });
        },10000);   
    });
    /*
    // Enable Article summary
    it('Enable Article summary:',function()
    {
        
    });
    */
});    