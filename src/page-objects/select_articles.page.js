var articles_data= require("../data-files/select_articles.js");
function selectarticles()
{
    this.title=element(by.xpath("//app-generate-newsfeed-navigation//h2[contains(text(),'SELECT ARTICLES')]"));
    this.articletitle=element(by.xpath("//app-generate-newsfeed-navigation//div[@class='create-nwsltr-head paddingTop20 paddingL0']/div"));
    this.webTable=element(by.xpath("//table[@class='table table-responsive']//td"));
    this.selectarticlesno=element(by.xpath("//span[@class='selectedArticlesNo']"));
    this.selectallarticle=element(by.xpath("//th[@class='haveChkBox']//i[@class='cr-icon glyphicon glyphicon-ok']"));
    this.prevbtn=element(by.xpath("//button[@class='prevBtn']"));
    //this.articlesummarybtn=element(by.xpath(""));
    this.desirearticlename;
    this.checkTitle=function()
    {
        return this.title.isDisplayed();
    };
    this.getgenerateTitle=function()
    {
        return this.articletitle.getText().then(function(text)
        {
            return text;
        });
    };
    this.selectArticles=function()
    {
        this.beforexpath="//*[@id='curatedTab']/div[4]/div/table/tbody/tr[";
        this.afterxpath="]/td[2]/a";
        for(var i=1;i<30;i++)
        {
            element(by.xpath(this.beforexpath+i+this.afterxpath)).getText().then(function(text)
            {
                element(by.xpath('//td/a[contains(text(),"'+text+'")]/parent::*/preceding-sibling::td//i')).click();
            })
            if(i>3)
            break;
        };
    };
    this.getselectedarticles=function()
    {
        return this.selectarticlesno.getText().then(function(num)
        {
            return parseInt(num);
        });
    };
    this.selectallarticlesClick=function()
    {
        this.selectallarticle.click();
    };
    this.prevbtnClick=function()
    {
        var EC = protractor.ExpectedConditions;
        var buttonone = this.prevbtn;
        browser.wait(EC.visibilityOf(buttonone), 10000);
        browser.actions().mouseMove(buttonone).click().perform();
    };

};
module.exports=new selectarticles();