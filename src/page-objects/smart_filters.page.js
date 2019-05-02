var data = require('../data-files/smart_filters.js');
function smartfilters() {
    this.nextbutton = element(by.cssContainingText('button.btn.btn-lg.btn-primary.fRight.snapBtn.bdrRad3.R10', 'Next'));
    this.errormessage1 = element(by.xpath("//div[@class='text-danger']/div[contains(text(), 'Common filters is required')]"));
    this.titlefilters = element(by.cssContainingText('h2.text-uppercase.size24.bold', data.datadriven.smartfiltertitle));
    //All filter options
    this.addcommonfilters = element(by.xpath("//app-add-filters//div[contains(text(),'Add Filters')]"));
    this.addnegativefilters = element(by.xpath("//app-add-negative-filters//div[contains(text(),'Add Filters')]"));
    this.addpositivefilters = element(by.xpath("//app-add-positive-filters//div[contains(text(),' Add Filters ')]"));
    this.addmorepositivefilters = element.all(by.xpath("//app-add-positive-filters//div[contains(text(),' Add Filters ')]"));
    //Advanced filters
    this.matchtitle = element(by.xpath("//app-advanced-filters//input[@formcontrolname='matchTitleOnly']"));
    this.includewholecontent1 = element(by.xpath("//app-advanced-filters//input[@formcontrolname='matchWholeContent']"));
    this.includewholecontent = element(by.xpath("//app-advanced-filters//label[@class='paddingL0 paddingRight15'][contains(text(),' Include Whole Content ')]//span[@class='cr checkmark']"));
    this.autoremoveduplicate = element(by.xpath("//app-advanced-filters//label[@class='paddingL0 paddingRight15'][contains(text(),' Auto Remove Duplicate Articles ')]//span[@class='cr checkmark']"));
    this.autoremoveduplicate1 = element(by.xpath("//app-advanced-filters//input[@formcontrolname='removeDuplicateArticle']"));
    this.titleboostcurrentvalue = element(by.xpath("//div[@class='col-md-12 col-sm-12 padding0 paddingTop24']//div[@class='tooltip tooltip-main top in']//div[@class='tooltip-inner']"));
    this.titleboostSlidetracker = element(by.xpath("//div[@class='col-md-12 col-sm-12 padding0 paddingTop24']//div[@class='slider-handle min-slider-handle round']"));
    this.defaultmaxnoarttext = element(by.xpath("//app-advanced-filters//input[@formcontrolname='sizeOfArticleCtrl']"));
    this.currentduplicatethreshold = element(by.xpath("//div[@class='col-md-12 col-sm-12 padding0']//div[@class='tooltip tooltip-main top in']//div[@class='tooltip-inner']"));
    this.duplicatethresholdSlidetracker = element(by.xpath("//div[@class='col-md-12 col-sm-12 padding0']//div[@class='slider-handle min-slider-handle round']"));
    this.sizeOfArticle = element(by.xpath("//app-advanced-filters//input[@formcontrolname='sizeOfArticleCtrl']"));
    //Rules for all filters
    this.filterrule1 = element(by.xpath("//app-add-filters//textarea[@id='froala-editor']"));
    this.filterrule2 = element(by.xpath("//app-add-negative-filters//textarea[@formcontrolname='negativeCtrl']"));
    this.filterrule3 = element(by.xpath("//app-add-positive-filters//textarea[@formcontrolname='positiveFilterKeyword']"));
    //Filter keyword inserted by user
    //this.filterkeyword=element(by.xpath("//app-add-filters//span[contains(text(),'"+data.datadriven.commonfilter1+"')]"));
    this.filterkeyword = element(by.xpath("//app-add-filters//span"));
    this.filterkeyword1 = element(by.xpath("//app-add-negative-filters//label[contains(text(),'Keywords')]/following-sibling::span"));
    this.filterkeyword2 = element(by.xpath("//app-add-positive-filters//span[contains(text(),'" + data.datadriven.positivefilter1 + "')]"));
    //Save and Cancel button
    this.savebutton1 = element(by.css("button.toggleKeywordBox.btn.btn-primary.marginT10.submitFilterKeyword.snapInnerBtn"));
    this.cancelbutton1 = element(by.css("button.toggleKeywordBox.btn.btn-primary.marginT10.cancelFilterKeyword.marginR10.snapInnerBtn"));
    //Label - Keywords
    this.keywordlabel = element(by.xpath("//app-add-filters//label[contains(text(),'Keywords')]"));
    this.keywordlabel1 = element(by.xpath("//app-add-negative-filters//label[contains(text(),'Keywords')]"));
    this.keywordlabel2 = element(by.xpath("//app-add-positive-filters//label[contains(text(),'Keywords')]"));
    //Validation messages for invalid keywords
    this.invalidkeyword = element(by.xpath("//div[@class='text-danger']/div[contains(text(),'" + data.datadriven.error2 + "')]"));
    this.invalidkeyword1 = element(by.xpath("//app-add-negative-filters//div[contains(text(),'" + data.datadriven.error3 + "')]"));
    this.invalidkeyword2 = element(by.xpath("//app-add-positive-filters//div[contains(text(),'" + data.datadriven.error4 + "')]"));
    //Edit Icon in all filters
    this.editicon = element(by.xpath("//app-add-filters//a[@class='editSpriteIcon']"));
    this.editicon1 = element(by.xpath("//app-add-negative-filters//a[@class='editSpriteIcon']"));
    this.editicon2 = element(by.xpath("//app-add-positive-filters//a[@class='editSpriteIcon']"));
    //Delete Icon in positive and negative filters
    this.deleteicon = element(by.xpath("//app-add-negative-filters//a[@class='deleteSpriteIcon']"));
    this.deleteconfirm= element(by.xpath("//button[@class='btn btn-primary snapInnerBtn']//i[@class='fa fa-check']"));
    this.deleteicon1 = element(by.xpath("//app-add-positive-filters//a[@class='deleteSpriteIcon']"));
    //overall weightage
    this.overallwNegative = element(by.xpath("//app-add-negative-filters//input[@formcontrolname='weightageNegativeCtrl']"));
    this.overallwPositive = element(by.xpath("//app-add-positive-filters//input[@formcontrolname='positiveFilterWeightage']"));
    this.overallnegativeW = element(by.xpath("//app-add-negative-filters//label[contains(text(),'Overall Weightage')]/following-sibling::span"));
    this.overallpositiveW = element(by.xpath("//app-add-positive-filters//label[contains(text(),'Overall Weightage')]/following-sibling::span"));
    //overall weightage default values
    this.overallweightage = element(by.xpath("//app-add-negative-filters//span[contains(text(),'" + data.datadriven.overallweightage + "')]"));
    this.overallweightage1 = element(by.xpath("//app-add-positive-filters//span[contains(text(),'" + data.datadriven.overallweightage + "')]"));
    //overall weightage error messages
    this.overallweightageerror = element(by.xpath("//app-add-negative-filters//div[contains(text(),'" + data.datadriven.error6 + "')]"));
    this.overallweightageerror1 = element(by.xpath("//app-add-positive-filters//div[contains(text(),'" + data.datadriven.error6 + "')]"));
    this.overallweightageerror2 = element(by.xpath("//app-add-positive-filters//div[contains(text(),'" + data.datadriven.error7 + "')]"));
    //Add more filters section in positive filters
    this.addmorefilter = element(by.css("button.btn.btn-sm.btn-primary.fRight.bdrRad3.snapInnerBtn.addMoreFilterBtn"));
    this.errormessage2 = element(by.xpath("//app-advanced-filters//div[contains(text(),'" + data.datadriven.error5 + "')]"));
    this.editnewsfeedFilters = element(by.xpath("//app-setup-get-started//div[@class='create-nwsltr-head paddingTop20 paddingL0']//div"));
    this.value1;
    this.value2;
    this.artsize = '';
    this.includewholecontentvalue;
    this.removeduplicatevalue;
    this.commonfilterorg;
    this.negativefilterorg;
    this.positivefiltersorg;
    this.overallwNegativeorg;
    this.overallwPositiveorg;
    this.checkTitle = function () {
        return this.titlefilters.isDisplayed();
    };
    this.nextClick = function () {
        var EC = protractor.ExpectedConditions;
        var buttonone = this.nextbutton;
        browser.wait(EC.visibilityOf(buttonone), 5000);
        browser.actions().mouseMove(buttonone).click().perform();
    };
    this.getErrormessage1 = function () {
        return this.errormessage1.isDisplayed();
    };
    this.isaddfiltersDisplayed = function () {
        return this.addcommonfilters.isDisplayed();
    };
    this.commonfiltersClick = function () {
        this.addcommonfilters.click();
    };
    this.commonfilterRule = function () {
        return this.filterrule1.isDisplayed();
    };
    this.setCommonfilters = function (filter) {
        this.filterrule1.sendKeys(filter);
    };
    this.clearCommonfilter = function () {
        this.filterrule1.clear();
    };
    this.getCommonfilters = function () {
        return this.filterkeyword.getText();
    };
    this.cancelbuttonClick = function () {
        var cancel = this.cancelbutton1;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.elementToBeClickable(cancel), 10000);
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            browser.actions().mouseMove(cancel).perform();
            cancel.click();
        });
    };
    this.savebuttonClick = function () {
        var cnl = this.savebutton1;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.elementToBeClickable(cnl), 5000);
        cnl.click();
    };
    this.iskeywordPresent = function () {
        var keyword = this.keywordlabel;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.visibilityOf(keyword), 2000);
        return keyword.isDisplayed();
    };
    this.isfilterkeywordPresent = function () {
        return this.filterkeyword.isDisplayed();
    };
    this.isediticonPresent = function () {
        return this.editicon.isDisplayed();
    };
    this.commonfilteditClick = function () {
        this.editicon.click();
    };

    this.getErrormessage2 = function () {
        return this.invalidkeyword.isDisplayed();
    };
    this.negativefiltersClick = function () {
        this.addnegativefilters.click();
    };
    this.negativefilterRule = function () {
        return this.filterrule2.isDisplayed();
    };
    this.setnegativefilters = function (filter) {
        this.filterrule2.sendKeys(filter);
    };
    this.isnegativeKeyword = function () {
        var keyword = this.keywordlabel1;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.visibilityOf(keyword), 2000);
        return keyword.isDisplayed();
    };
    this.isnegativefilterkeyword = function () {
        return this.filterkeyword1.isDisplayed();
    };
    this.getNegativefilters = function () {
        return this.filterkeyword1.getText();
    };
    this.editnegativefilter = function () {
        return this.editicon1.isDisplayed();
    };
    this.deletenegativefilter = function () {
        return this.deleteicon.isDisplayed();
    };

    this.getErrormessage3 = function () {
        return this.invalidkeyword1.isDisplayed();
    };
    this.getErrormessage4 = function () {
        return this.invalidkeyword2.isDisplayed();
    };

    this.overallweightagecheck = function () {
        return this.overallweightage.isDisplayed();
    };
    this.positivefiltersClick = function () {
        var cnl = this.addpositivefilters;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.elementToBeClickable(cnl), 10000);
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
            browser.actions().mouseMove(cnl).perform();
            cnl.click();
        });
    };
    this.positivefilterRule = function () {
        return this.filterrule3.isDisplayed();
    };
    this.setpositivefilters = function (filter) {
        this.filterrule3.sendKeys(filter);
    };
    this.ispositiveKeyword = function () {
        var keyword = this.keywordlabel2;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.visibilityOf(keyword), 2000);
        return keyword.isDisplayed();
    };
    this.ispositivefilterkeyword = function () {
        return this.filterkeyword2.isDisplayed();
    };
    this.getPositivefilters = function () {
        return this.filterkeyword2.getText();
    };
    this.editpositivefilter = function () {
        return this.editicon2.isDisplayed();
    };
    this.deletepositivefilter = function () {
        return this.deleteicon1.isDisplayed();
    };
    this.deletepositivefiltersClick=function()
    {
        this.deleteicon1.click();
    };
    this.deleteconfirmClick=function()
    {
        this.deleteconfirm.click();
    };
    this.overallweightagecheckPositive = function () {
        return this.overallweightage1.isDisplayed();
    };
    this.addmorefilterClick = function () {
        var cnl = this.addmorefilter;
        var EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.elementToBeClickable(cnl), 10000);
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
            browser.actions().mouseMove(cnl).perform();
            cnl.click();
        });
    };
    this.addmorefilterCount = function () {
        return this.addmorepositivefilters.count();
    };
    this.getErrormessage5 = function () {
        return this.errormessage2.isDisplayed();
    };
    this.getErrormessage6 = function () {
        return this.overallweightageerror.isDisplayed();
    };
    this.setoverallweightageNeg = function (key) {
        this.overallwNegative.sendKeys(key);
    };
    this.getoverallweightageNeg = function () {
        return this.overallnegativeW.getText();
    };
    this.setoverallweightagePositive = function (key) {
        this.overallwPositive.sendKeys(key);
    };
    this.getoverallweightagePos = function () {
        return this.overallpositiveW.getText();
    };
    this.clearoverallweightageNegative = function () {
        this.overallwNegative.clear();
    };
    this.clearoverallweightagepositive = function () {
        this.overallwPositive.clear();
    };
    this.getErrormessage7 = function () {
        return this.overallweightageerror2.isDisplayed();
    };
    this.getErrormessage8 = function () {
        return this.overallweightageerror1.isDisplayed();
    };
    /*this.ismatchtitleDisabled=function()
    {
        this.matchtitle.getAttribute('disabled').then(function(attr)
        {
          return(attr);
        });
    };*/
    this.defaultincludeWholecontent = function () {
        return this.includewholecontent1.isSelected();
    };
    this.getincludeWholecontent = function () {
        return this.includewholecontent1.isSelected();
    }
    this.setIncludewholecontent = function () {
        this.includewholecontent.click();
    };
    this.defaultautoremoveduplicate = function () {
        return this.autoremoveduplicate1.isSelected();
    };
    this.getautoremoveduplicate = function () {
        return this.autoremoveduplicate1.isSelected();
    };
    this.uncheckAutoremoveduplicate = function () {
        this.autoremoveduplicate.click();
    };
    this.defaultmaxnoarttextDisplayed = function () {
        return this.defaultmaxnoarttext.isDisplayed();
    };
    this.setTitleboost = function () {
        browser.executeScript('window.scrollTo(0,300)').then(function () { });
        browser.actions().dragAndDrop(this.titleboostSlidetracker, { x: 50, y: 0 }).perform();
    };
    this.getTitleboost = function () {
        this.value1 = this.titleboostcurrentvalue.getText();
        return this.titleboostcurrentvalue.getText();
    };
    this.setMaxarticles = function (artno) {
        this.defaultmaxnoarttext.sendKeys(artno);
    };
    this.setDuplicatethreshold = function () {
        browser.actions().dragAndDrop(this.duplicatethresholdSlidetracker, { x: 50, y: 0 }).perform();
    };
    this.getDuplicatethreshold = function () {
        this.value2 = this.currentduplicatethreshold.getText();
        return this.currentduplicatethreshold.getText();
    };
    this.defautsizeOfArticle = function () {
        return this.sizeOfArticle.getAttribute('value');
    };
    this.getedittitle = function () {
        return this.editnewsfeedFilters.getText().then(function (text) {
            return text;
            //return text.toString().split('>')[1].trim(); 
        });
    };
    this.smartfilterspage = function (filter) {
        this.commonfiltersClick();
        this.setCommonfilters(filter);
        browser.executeScript('window.scrollTo(0,500)').then(function () { });
        this.savebuttonClick();
        browser.executeScript('window.scrollTo(0,300)').then(function () { });
        this.negativefiltersClick();
        this.setnegativefilters(data.datadriven.commonfilter1);
        this.clearoverallweightageNegative();
        this.setoverallweightageNeg(data.datadriven.value1);
        browser.executeScript('window.scrollTo(0,300)').then(function () { });
        this.savebuttonClick();
        browser.executeScript('window.scrollTo(0,300)').then(function () { });
        this.positivefiltersClick();
        this.setpositivefilters(data.datadriven.positivefilter1);
        this.clearoverallweightagepositive();
        this.setoverallweightagePositive(data.datadriven.value2);
        browser.executeScript('window.scrollTo(0,500)').then(function () { });
        this.savebuttonClick();
        this.setTitleboost();
        this.setDuplicatethreshold();
        this.setMaxarticles(data.datadriven.Articlesize1);
        this.getSmartfilterdetails();
        this.nextClick();
    };
    this.getSmartfilterdetails = function () {
        this.commonfilterorg = this.getCommonfilters();
        this.negativefilterorg = this.getNegativefilters();
        this.overallwNegativeorg = this.getoverallweightageNeg();
        this.positivefiltersorg = this.getPositivefilters();
        this.overallwPositiveorg = this.getoverallweightagePos();
        this.getTitleboost();
        this.getDuplicatethreshold();
        this.artsize = this.defautsizeOfArticle();
        this.includewholecontentvalue = this.defaultincludeWholecontent();
        this.removeduplicatevalue = this.defaultautoremoveduplicate();
    };
};
module.exports = new smartfilters();