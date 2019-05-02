var template_obj=require('../page-objects/select_template.page.js');
var template_data=require('../data-files/select_template.js');
var news_obj = require('../page-objects/create_newsletter.page.js');
var filter_obj=require('../page-objects/smart_filters.page.js');
var login= require("../page-objects/login_page.page.js");
var login_data= require("../data-files/Login_page.js");
describe('select template',function()
{
    beforeEach(function()
    {
        login.logintoApp(login_data.datadriven.URL,login_data.datadriven.username,login_data.datadriven.password);  
    });
    it('Select template - check title',function()
    {
        news_obj.createNewnewsletter(template_data.datadriven.newsfeednamef1);
        filter_obj.smartfilterspage(template_data.datadriven.commonfilter1);
        //filter_obj.nextClick();
        expect(template_obj.checkTitle()).toBe(true);
    });
});