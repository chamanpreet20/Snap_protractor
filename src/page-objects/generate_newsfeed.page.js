var generate_data= require("../data-files/generate_newsfeed.js");
function generatenewsfeed()
{
    this.generatetitle=element(by.xpath("//app-generate-newsfeed-navigation//h2[contains(text(),'UPLOAD PAID SOURCES')]"));
    this.generatetitle1=element(by.xpath("//app-generate-newsfeed-navigation//div[@class='create-nwsltr-head paddingTop20 paddingL0']/div"));
    this.errormessage=element(by.xpath("//app-upload-paid-sources//div[@class='text-danger']"));
    this.paidsource=element(by.cssContainingText("[name=selectPaidSource] option",generate_data.datadriven.paidsource));
    this.paidsrcselect=element(by.xpath("//select[@name='selectPaidSource']"));
    this.documentType=element(by.xpath("//app-upload-paid-sources//div/b[contains(text(),'File types allowed:')]/parent::*"));
    this.browsefiles=element(by.xpath("//div[@class='custom-file-upload']//span[contains(text(),'Browse Files (Multiple)')]"));
    this.browsebutton=element(by.xpath("//div[@class='custom-file-upload']//i[@class='fa fa-plus-circle']"));
    this.browsefile=element(by.xpath("//input[@class='inputfile inputfile-4']"));
    this.uploadproceedbtn=element(by.xpath("//button[@class='btn btn-lg btn-primary fRight snapBtn bdrRad3 R10']"));
    this.selecteddocs=element(by.xpath("//table[@class='table table-responsive blueBGtable marginB0 marginT30']//tr"));
    this.doctable=element(by.xpath("//table[@class='table table-responsive blueBGtable marginB0 marginT30']//tbody"));
    this.uploadeddocs=element(by.xpath("//table[@class='table table-responsive blueBGtable marginT30 marginB0']//tbody"));
    this.deletemsg=element(by.xpath("//app-confirmation-dialog/div[@class='modal-body']"));
    this.deleteconfirm=element(by.xpath("//app-confirmation-dialog//i[@class='fa fa-check']"));
    this.maxsizeerror1=element(by.xpath("//div[@class='text-danger']"));
    this.maxsizeerror2=element(by.xpath("//td[contains(text(),'"+generate_data.datadriven.paidsourceF+"')]/preceding-sibling::td/div[@class='textdangerUpload']"));
    this.maxsizeerror3=element(by.xpath("//td[contains(text(),'"+generate_data.datadriven.paidsourceN+"')]/preceding-sibling::td/div[@class='textdangerUpload']"));
    this.selecteddocsAll=element(by.xpath("//th[@class='uploadNew purpleText']/th"));
    this.alreadyuploadmsg=element(by.xpath("//app-confirmation-dialog//div[@class='modal-body']"));
    this.alreadyuploadkeep=element(by.xpath("//button[@class='btn btn-primary snapInnerBtn']//i[@class='fa fa-check']"));
    this.desiredOption;
    this.desiredocname;
    this.selectedfilename;
    this.paidsourceForg;
    this.paidsourceNorg;
    this.paidsourceRorg;
    this.checkTitle=function()
    {
        return this.generatetitle.isDisplayed();
    };
    this.getgenerateTitle=function()
    {
        return this.generatetitle1.getText().then(function(text)
        {
            return text;
        });
    };
    this.getErrormessage=function()
    {
        return this.errormessage.getText().then(function(text)
        {
            return text;
        });
    };
    this.setPaidsource=function()
    {
        this.paidsource.click();
    };
    this.getDocumenttype=function()
    {
        return this.documentType.getText().then(function(text)
        {
            return text.toString().replace(/(\r\n|\n|\r)/gm,' ').split(" ")[3];
        });
    };
    this.getFilesize=function()
    {
        return this.documentType.getText().then(function(text)
        {
            return text.toString().replace(/(\r\n|\n|\r)/gm,' ').split(" ")[7]+" "+text.toString().replace(/(\r\n|\n|\r)/gm,' ').split(" ")[8];
        });
    };
    this.browsefilesDisplayed=function()
    {
        return this.browsefiles.isDisplayed();
    };
    this.selectFile=function(filename)
    {
        this.browsefile.sendKeys(filename);
        var str=filename.split("/");
        this.selectedfilename=str[str.length-1];
    };
    this.uploadproceedbtnClick=function()
    {
        this.uploadproceedbtn.click();
    };
    this.selectOption=function(item)
    {   this.paidsrcselect.click();
        this.paidsrcselect.all(by.tagName('option')).then(function findMatchingOption(options)
        {   options.some(function(option)
            {   option.getText().then(function doesOptionMatch(text)
                {   if (item === text)
                    {   this.desiredOption = option;
                        return true;
                    }
                });
            });
        }).then(function clickOption()
        {   if (this.desiredOption)
            {   this.desiredOption.click();
            }
        });
    };
    this.getSelectedDocs=function(item)
    {   return this.doctable.all(by.tagName('td')).then(function findMatchingOption(options)
        {   options.some(function(option)
            {   option.getText().then(function doesOptionMatch(text)
                {   if (item === text)
                    {   this.desiredocname = option;
                        return true;
                    }
                });
            });
        }).then(function returndesiredoption()
        {   if (this.desiredocname)
            {   return  this.desiredocname.getText().then(function(text1)
                {   return element(by.xpath("//td[@class='uploadNew purpleText' and contains(text(),'"+text1+"')]/preceding-sibling::th/a")).getText().then(function(text1)
                    {   //console.log("text1"+text1);
                        return text1;
                    });
                });
            }
        });
    };
    this.selecteddocsDelete=function(filename)
    {
        browser.executeScript('window.scrollTo(0,300)').then(function(){});
        element(by.xpath("//a[contains(text(),'"+filename+"')]/parent::th/following-sibling::td//a[@class='deleteSpriteIcon noMargin']")).click();
    }; 
    this.confirmdeleteDisplayed=function()
    {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.deletemsg), 5000);
        return this.deletemsg.isDisplayed();
    };
    this.deleteconfirmClick=function()
    {
        this.deleteconfirm.click();
    };
    this.getmaxsizeError1=function()
    {
        return this.maxsizeerror1.getText().then(function(text)
        {
            return text;
        });
    };
    this.getmaxsizeError2=function(sourcetype)
    {
        return this.doctable.all(by.tagName('td')).then(function findMatchingOption(options)
        {   options.some(function(option)
            {   option.getText().then(function doesOptionMatch(text)
                {   if (sourcetype === text)
                    {   this.desiredocname = option;
                        return true;
                    }
                });
            });
        }).then(function returndesiredoption()
        {   if (this.desiredocname)
            {   return  this.desiredocname.getText().then(function(text1)
                {   return element(by.xpath("//td[contains(text(),'"+text1+"')]/preceding-sibling::td/div[@class='textdangerUpload']")).getText().then(function(text1)
                    {   return text1;
                    });
                });
            }
        });  
    };
    this.getallselecteddocs=function(filename)
    {
        return this.doctable.all(by.tagName('a')).getText().then(function(t)
        {
            if(t==filename)
            {
                return t;
            }
            else 
            {
                return "file not found";
            }
        });
    };
    this.alreadyuploadedConfirm=function()
    {
        return this.alreadyuploadmsg.getText().then(function(text)
        {
            return text;
        });
    };
    this.alreadyuploadkeepClick=function()
    {
        //console.log("Already uploaded keep");
        this.alreadyuploadkeep.click();
    };
    this.getfilesUploaded=function()
    {
        //generate_obj.getfilesUploaded().filter((files)
        return this.uploadeddocs.all(by.tagName('th')).all(by.tagName('a')).map(function(elm)
        {
                //console.log("Uploaded docs: "+t);
                return elm.getText();  
        });
    };
    this.generateNF=function()
    {
        this.selectOption(generate_data.datadriven.paidsourceF);
        this.selectFile(generate_data.datadriven.factivafilename);
        this.paidsourceForg=this.getSelectedDocs(generate_data.datadriven.paidsourceF)
        this.selectOption(generate_data.datadriven.paidsourceN);
        this.selectFile(generate_data.datadriven.Nexisfilename);
        this.paidsourceNorg=this.getSelectedDocs(generate_data.datadriven.paidsourceN);
        this.selectOption(generate_data.datadriven.paidsourceR);
        this.selectFile(generate_data.datadriven.RSSfilename);
        this.paidsourceRorg=this.getSelectedDocs(generate_data.datadriven.paidsourceR);
        this.uploadproceedbtnClick();
    };
};
module.exports=new generatenewsfeed();