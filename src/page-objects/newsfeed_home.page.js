var data= require('../data-files/newsfeed_home.js');
var HashMap = require('hashmap');
var news_data= require("../data-files/create_newsletter.js");
//var map = require("collections/map");
function newsfeedhome()
{
    this.newsfeedname=element(by.xpath("//app-home-page//div[@class='hompage-nwsltr-details']/h3"));
    this.clientname=element(by.xpath("//app-home-page//div[@class='hompage-nwsltr-details']//li[1]/div"));
    this.domainname=element(by.xpath("//app-home-page//div[@class='hompage-nwsltr-details']//li[2]/div"));
    this.sources=element(by.xpath("//app-home-page//div[@class='hompage-nwsltr-details']//li[3]/div"));
    this.createdby=element(by.xpath("//app-home-page//div[@class='hompage-nwsltr-details']//li[4]/div"));
    this.lastPublished=element(by.xpath("//app-home-page//div[@class='hompage-nwsltr-details']//li[5]/div"));
    this.commonfilter=element(by.xpath("//app-home-page//div[@class='col-md-12 col-sm-12 padding0']//span"));
    this.titleboost=element(by.xpath("//app-home-page//div[@class='col-md-12 col-sm-12 paddingL0 paddingTopBoost']//div[@class='bold darkGrey size18 LH25']"));
    this.duplicatethreshold=element(by.xpath("//app-home-page//div[@class='col-md-12 col-sm-12 paddingL0 paddingTopduplicacy']//div[@class='bold darkGrey size18 LH25']"));
    this.maxarticles=element(by.xpath("//app-home-page//div[@class='col-md-12 col-sm-12 paddingL0 paddingmaxnUmber']//div[@class='bold darkGrey size18 LH25']"));
    this.matchwholecontent=element(by.xpath("//app-home-page//div[@class='col-md-12 col-sm-12 paddingL0 paddingDuplicate']/label[contains(text(),'Match Whole Content')]/following-sibling::div[@class='bold darkGrey size18 LH25']/span"));
    this.removeduplicate=element(by.xpath("//app-home-page//div[@class='col-md-12 col-sm-12 paddingL0 paddingDuplicate']/label[contains(text(),'Remove Duplicate')]/following-sibling::div[@class='bold darkGrey size18 LH25']/span"));
    this.negativefilters=element(by.xpath("//app-home-page//label[contains(text(),'Negative Filters')]/following-sibling::div[@class='col-md-12 col-sm-12 selectedFiltersBox']//label[contains(text(),'Keywords')]/following-sibling::span"));
    this.overallweightage=element(by.xpath("//app-home-page//label[contains(text(),'Negative Filters')]/following-sibling::div[@class='col-md-12 col-sm-12 selectedFiltersBox']//label[contains(text(),'Overall Weightage')]/following-sibling::span"));
    this.positivefilters=element(by.xpath("//app-home-page//label[contains(text(),'Positive Filters')]/following-sibling::div[1]//label[contains(text(),'Keywords')]/following-sibling::span"));
    this.overallweightageP=element(by.xpath("//app-home-page//label[contains(text(),'Positive Filters')]/following-sibling::div[1]//label[contains(text(),'Overall Weightage')]/following-sibling::span"));
    this.audience1=element(by.xpath("//app-home-page//div/h4[contains(text(),'Audience')]/following-sibling::div//span/a"));
    this.audience2=element(by.xpath("//app-home-page//div[@class='homepage-target-audience-box marginT30 fLeft widthfull']/div[@class='fLeft widthfull']/following-sibling::div/span/a"));
    this.audienceedit=element(by.xpath("//app-home-page//div/h4[contains(text(),'Audience')]/following-sibling::div/a[@class='editSpriteIcon noMargin']"));
    this.smartfilteredit=element(by.xpath("//app-home-page//div/h4[contains(text(),'Smart Filters')]/following-sibling::div/a[@class='editSpriteIcon noMargin']"))
    this.editnewsletter=element(by.xpath("//div[@class='homepage-topbar-right col-md-12 col-sm-12']//a[@class='editSpriteIcon']"));
    this.editnewsfeed=element(by.xpath("//app-setup-get-started//h2[contains(text(),'EDIT NEWSFEED')]"));
    this.activenewsfeedname=element(by.xpath("//li[@class='active']/h3"));
    this.activeclientname=element(by.xpath("//li[@class='active']/div[1]"));
    this.activelastpublished=element(by.xpath("//li[@class='active']/div[2]"));
    this.searchnewsfeed=element(by.xpath("//input[@placeholder='Search Newsfeeds...']"));
    this.newsfeedcount=element(by.xpath("//app-home-page//div[@class='marginT10 fNone']/small"));
    this.deleteicon=element(by.xpath("//a[@class='deleteSpriteIcon']"));
    this.deletealert=element(by.xpath("//app-confirmation-dialog"));
    this.alertmessage=element(by.xpath("//app-confirmation-dialog//div[@class='modal-body']"));
    this.deletebutton=element(by.xpath("//i[@class='fa fa-check']/../.."));
    this.confirmdialogbox=element(by.xpath("//app-confirmation-dialog"));
    this.confirmmessage=element(by.xpath("//app-confirmation-dialog/div[@class='modal-body']"));
    this.delfinalconfirm=element(by.xpath("//button[@class='btn btn-primary snapInnerBtn']"));
    this.generatebutton=element(by.xpath("//button[@class='generate']"));
    this.activeNewsletter=element(by.xpath("//li[@class='active']"));
    this.loginuser=element(by.xpath("//u[@class='userImg']/following-sibling::span[@class='menu-name']"));
    this.logoutbtn=element(by.xpath("//a[contains(text(),'Logout')]"));
    this.newsfeeds=element(by.xpath("//u[@class='newsletters']"));
    this.initialNFcount;
    this.usernameorg;
    this.newsfeednameorg;
    this.clientnameorg;
    this.newsfeeddomainorg;
    this.paidsourceorg;
    this.common_filterorg;
    this.negative_filterorg;
    this.overall_weightage_norg;
    this.positive_filterorg;
    this.overall_weightage_porg;
    this.title_boostorg;
    this.duplicate_thresholdorg;
    this.max_articlesorg;
    this.match_wholecontentorg;
    this.remove_duplicateorg;
    this.target_audience1org;
    this.target_audience2org;
    this.map  = new HashMap();
    this.map1 = new HashMap();
    this.map1
            .set("username",data.datadriven.username)
            .set("newsfeedname",data.datadriven.newsfeednamef1)
            .set("clientname",news_data.datadriven.clientname)
            .set("newsfeeddomain",news_data.datadriven.newsfeeddomain)
            .set("paidsource",data.datadriven.paidsource)
            .set("common_filter",data.datadriven.commonfilter1);
    this.getCurrentURL=function()
    {
        return browser.getCurrentUrl();
    }; 
    this.getnewsfeedname=function()
    {
        return this.newsfeedname.getText().then(function(text)
        {
            return text;
        });   
    };
    this.getclientname=function()
    {
        return this.clientname.getText().then(function(text)
        {
            return text.toString().split(':')[1];
        }); 
    };
    this.getdomainname=function()
    {
        return this.domainname.getText().then(function(text)
        {
            return text.toString().split(':')[1];
        }); 
    };
    this.getsources=function()
    {
        return this.sources.getText().then(function(text)
        {
            return text.toString().split(':')[1].trim();
        });   
    };
    
    this.getcreatedby=function()
    {
        return this.createdby.getText().then(function(text)
        {
            return text.toString().split(':')[1].toLowerCase();
        });   
    };
    this.getlastPublished=function()
    {
        return this.lastPublished.getText().then(function(text)
        {
            return text.toString().split(':')[1];
        }); 
    };
    this.getCommonfilter=function()
    {
       return this.commonfilter.getText();
       
    };
    this.getNegativefilters=function()
    {
        return this.negativefilters.getText();  
    };
    this.getoverallweightageN=function()
    {
        return this.overallweightage.getText();
    };
    this.getPositivefilters=function()
    {
        return this.positivefilters.getText(); 
    };
    this.getoverallweightageP=function()
    {
        return this.overallweightageP.getText();
    };
    this.getTitleboost=function()
    {
        return this.titleboost.getText();
    };
    this.getDuplicatethreshold=function()
    {
        return this.duplicatethreshold.getText();
    };
    this.getMaxarticles=function()
    {
        return this.maxarticles.getText();
    };
    this.getmatchwholecontent=function()
    {
        return this.matchwholecontent.getText().then(function(flag1)
        {
            if(flag1=="Yes")
            {
                return true;
            } 
            else 
            {
                return false;  
            }

        });
    }; 
    this.getremoveduplicate=function()
    {
        return this.removeduplicate.getText().then(function(flag2)
        {
            if(flag2=="Yes")
            {
                return true;
            }
            else 
            {
                return false;
            } 
        });
    };
    this.getTargetaudience1=function()
    {
        return this.audience1.getText();
    };
    this.getTargetaudience2=function()
    {
        return this.audience2.getText();
    };
    this.isaudienceeditEnabled=function()
    {
        return this.audienceedit.isEnabled().then(function(flag)
        {
            return flag;
        });
    };
    this.issmartfiltereditEnabled=function()
    {
        return this.smartfilteredit.isEnabled().then(function(flag)
        {
            return flag;
        });
    };
    this.isnewslettereditEnabled=function()
    {
        return this.editnewsletter.isEnabled().then(function(flag)
        {
            return flag;
        });
    };
    this.smartfiltereditClick=function()
    {
        this.smartfilteredit.click();
    };
    this.audienceeditClick=function()
    {
        this.audienceedit.click();
    };
    this.editnewsletterClick=function()
    {
        this.editnewsletter.click();
    };
    this.iseditnewsfeedDisplayed=function()
    {
        return this.editnewsfeed.isDisplayed();
    };
    this.getnewsfeednameActive=function()
    {
        return this.activenewsfeedname.getText().then(function(text)
        {
            return text.toString();
        });
    };
    this.getactiveclientname=function()
    {
        return this.activeclientname.getText().then(function(text)
        {
            return text.toString().split(':')[1].trim();
        });  
    };
    this.getactivelastpublished=function()
    {
        return this.activelastpublished.getText().then(function(text)
        {
            return text.toString().split(':')[1];
        });  
    };
    this.setSearchnewsfeed=function(keyword)
    {
        this.searchnewsfeed.sendKeys(keyword);
    };
    this.getsearchresultCount=function()
    {
        var EC = protractor.ExpectedConditions;
        var counttext = this.newsfeedcount;
        browser.wait(EC.visibilityOf(counttext), 10000);
        return this.newsfeedcount.getText().then(function(text)
        {
            return parseInt(text.split(" ")[5]);
        });
    };
    this.deleteClick=function()
    {
        this.deleteicon.click();
    };
    this.confirmDelete=function()
    {
        this.deletebutton.click();
    };
    this.deletenewsletterAlert=function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.deletealert), 5000);
        return this.alertmessage.getText().then(function(text)
        {
            return text.toString().replace(/(\r\n|\n|\r)/gm,'');
        });
    };
    this.getconfirmdeleteMsg=function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.confirmdialogbox), 5000);
        return this.confirmmessage.getText().then(function(text)
        {
            return text;
        }); 
    };
    this.delfinalconfirmClick=function()
    {
        this.delfinalconfirm.click();
    };
    this.generatebuttonClick=function()
    {
        this.generatebutton.click();
    };
    this.selectactivenewsletter = function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.activeNewsletter), 5000);
        this.activeNewsletter.click();
    };
    this.loginuserClick=function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.loginuser), 5000);
        browser.actions().mouseMove(this.loginuser).click().perform();
        console.log("Loginuser arrow clicked");
       // this.loginuser.click();
    };
    this.logoutbtnClick=function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.logoutbtn), 5000);
        browser.actions().mouseMove(this.logoutbtn).click().perform();
        this.logoutbtn.click();
    };
    this.newsfeedsClick=function()
    {
        this.newsfeeds.click();
    };
    this.getalldetails=function()
    {
        this.usernameorg=this.getcreatedby();
        this.newsfeednameorg=this.getnewsfeedname();
        this.clientnameorg=this.getclientname();
        this.newsfeeddomainorg=this.getdomainname();
        this.paidsourceorg=this.getsources();
        this.common_filterorg=this.getCommonfilter();
        this.negative_filterorg=this.getNegativefilters();
        this.overall_weightage_norg=this.getoverallweightageN();
        this.positive_filterorg=this.getPositivefilters();
        this.overall_weightage_porg=this.getoverallweightageP();
        this.title_boostorg=this.getTitleboost();
        this.duplicate_thresholdorg=this.getDuplicatethreshold();
        this.max_articlesorg=this.getMaxarticles();
        this.match_wholecontentorg=this.getmatchwholecontent();
        this.remove_duplicateorg=this.getremoveduplicate();
        this.target_audience1org=this.getTargetaudience1();
        this.target_audience2org=this.getTargetaudience2();
        /*this.map
        .set("username",this.usernameorg)
        .set("newsfeedname",this.newsfeednameorg)
        .set("clientname",this.clientnameorg)
        .set("newsfeeddomain",this.newsfeeddomainorg)
        .set("paidsource",this.paidsourceorg)
        .set("common_filter",this.common_filterorg);*/
    };
    /*this.isEquivalent=function()
    {
        for (Map.Entry<String, List<String>> entry : this.map.entrySet()
         {
            List<String> list = entry.getValue();
            // Do things with the list
        });
            this.map.forEach(function(value, key)
            {
                this.map1.forEach(function(value1,key1)
                {
                    if (value !== value1) 
                    {
                        return false;
                    }  
                })
                
            });
            return true;
    }
    */
};
module.exports=new newsfeedhome();