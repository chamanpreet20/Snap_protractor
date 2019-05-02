describe('forgot password', function() 
{
  var login=require("../page-objects/login_page.page.js");
  var f_obj=require("../page-objects/forgot_password.page.js");
  var d=require("../data-files/Login_page.js");
  var d_f=require("../data-files/forgot_password_page.js");
  beforeEach(function()
  {
    login.getURL(d.datadriven.URL);
  });
  it('forgot password page check', function() 
  {
    f_obj.forgotclick();  
    expect(f_obj.getCurrentURL()).toBe(d_f.datadriven.forgoturl);
    expect(f_obj.isresetDisabled()).toBe("true");
  });
  it('forgot password page error message', function() 
  {
    f_obj.forgotclick();
    f_obj.email.click();
    f_obj.formheading.click();
    expect(f_obj.getErrormessage1()).toBe(d_f.datadriven.error1);
    expect(f_obj.isresetDisabled()).toBe("true");
  });
  it('forgot password page invalid email ID', function() 
  {
    f_obj.forgotclick();
    f_obj.setEmail(d_f.datadriven.invalidemailid);
    //f_obj.email.sendKeys(d_f.datadriven.invalidemailid);
    expect(f_obj.getErrormessage2()).toBe(d_f.datadriven.error2);
    expect(f_obj.isresetDisabled()).toBe("true");
  });
  it('forgot password page for unauthorized user', function() 
  {
    f_obj.forgotclick();
    f_obj.setEmail(d_f.datadriven.unauthoriseduser);
    f_obj.resetlink.click();
    expect(f_obj.getErrormessage3()).toBe(d_f.datadriven.error3);
    expect(f_obj.isresetEnabled()).toBe(true);
  });
}); 