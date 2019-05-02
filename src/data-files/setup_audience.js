
module.exports=
{
    datadriven:
    {
        "selectaudiencetitle"   : "SETUP AUDIENCE",
        "newsfeednamef1"        : "Test news letter"+Math.floor(Math.random() * 200),
        "newsfeednamef2"        : "Test news letter"+Math.floor(Math.random() * 100),
        "newsfeednamef3"        : "Test news letter"+Math.floor(Math.random() * 300),
        "newsfeednamef9"        : "Test news letter"+Math.floor(Math.random() * 400),
        "newsfeednamef10"       : "Test news letter"+Math.floor(Math.random() * 500),
        "newsfeednamef11"       : "Test news letter"+Math.floor(Math.random() * 600),
        "newsfeednamef12"       : "Test news letter"+Math.floor(Math.random() * 2),
        "newsfeednamef13"       : "Test news letter"+Math.floor(Math.random() * 5),
        "audience"              : "Preetha.Thomas@evalueserve.com",
        "audience2"             : "chaman.preet@evalueserve.com",  
        "commonfilter1"         : '"the"~1',
        "error1"                : "Target Audience Email IDs is required",
        "audiencerule"          : "Enter Target Audience Email IDs and keep them comma ',' separated...",
        "newsfeedsubmit1"       : 'Newsfeed created/updated successfully.Find and edit your Newsfeed @Newsfeed Page',
        "error2"                : '"Invalid emails: " abcdef.th@Click "OK" to continue.',
        "error3"                : '"Invalid emails: " #$@%@%$@#$#$%Click "OK" to continue.',
        "error4"                : '"Invalid emails: "'+" &*()_-+={}[]\;:./?@!#$%` ~ " +"'"+" |@abc.com"+'Click "OK" to continue.', 
        //Enter employee details to be searched
        "searchemailid" : "Reshma",
        "searchempname" : "Reshma Jain",
        "searchempid"   : "Reshma.Jain@evalueserve.com",
        "searchemailid1" : "Preetha",
        "searchempname1" : "Preetha Thomas",
        "searchempid1"   : "Preetha.Thomas@evalueserve.com",
        "searchresult"  : "Search Results",
        "empdeptname"   : "DEPARTMENT NAME",
        "empname"       : "EMPLOYEE NAME",
        "emptitle"      : "TITLE",
        "error5"        : "Please enter a name.",
        "invalidsearch1": "!@#$%^&Preetha",  
        "error6"        : "***No results found***"       
    },
    validaudience:
    {
        "audience1" : { newsfeedname:"Test news letter"+Math.floor(Math.random() * 3),
                        value1:"Preetha.Thomas@evalueserve.com",
                        value2:"chaman.preet@evalueserve.com"
                      },
        "audience2" : { newsfeedname:"Test news letter"+Math.floor(Math.random() * 6),
                        value1:"Preetha.Thomas@evalueserve.com"+","+"chaman.preet@evalueserve.com",
                        value2:"Reshma.jain@evalueserve.com"+","+"Pradyumna.madan@evalueserve.com"
                      },
        "audience3" : { newsfeedname:"Test news letter"+Math.floor(Math.random() * 7),
                        value1:"Preetha.th@gmail.com",
                        value2:"Preetha.Thomas@evalueserve.com"
                      }
    },
    invaliddata:
    {
        "invalidaudience1" : {  newsfeedname:"Test news letter"+Math.floor(Math.random() * 4),
                                value1: "abcdef.th@"
                             },
        "invalidaudience2" : {  newsfeedname:"Test news letter"+Math.floor(Math.random() * 8),
                                value1: "#$@%@%$@#$#$%"
                             },
        "invalidaudience3" :{   newsfeedname:"Test news letter"+Math.floor(Math.random() * 9),
                                value1:"&*()_-+={}[]\;:./?@!#$%` ~ " +"'"+" |@abc.com"
                             }                                        
        /*"invalidaudience3" : {value: "Preetha@thomas@evs.com"},
        "invalidaudience4" : {value: "123252121355@evalueserve.com"},
        "invalidaudience5" : {value: "Preetha.#!$%th@gmail.com"},
        "invalidaudience6" : {value: "!@#$@jain@evalueserve.com"}*/
    },  
    invaliddata2:
    {
        "invalidaudience1" : {  newsfeedname:"Test news letter"+Math.floor(Math.random() * 0),
                                value: "abcdef.th@"
                             },
        "invalidaudience2" : {  newsfeedname:"Test news letter"+Math.floor(Math.random() * 1),
                                value: "#$@%@%$@#$#$%"
                             },
        "invalidaudience3" :{   newsfeedname:"Test news letter"+Math.floor(Math.random() * 20),
                                value:"&*()_-+={}[]\;:./?@!#$%` ~ " +"'"+" |@abc.com"
                             }                                        
        /*"invalidaudience3" : {value: "Preetha@thomas@evs.com"},
        "invalidaudience4" : {value: "123252121355@evalueserve.com"},
        "invalidaudience5" : {value: "Preetha.#!$%th@gmail.com"},
        "invalidaudience6" : {value: "!@#$@jain@evalueserve.com"}*/
    },
    
}