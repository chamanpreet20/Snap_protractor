module.exports={
    datadriven:
    {
        "CreatenewsfeedTitle"  : "http://evs01dvp02:8082/setup-newsfeed/create-newsfeed/i/1/0/0/all",
        "newsfeedname":"Test0 news feed"+ Math.floor(Math.random() * 13),
        "newsfeedname1":"Test0 news feed"+ Math.floor(Math.random() * 14),
        "newsfeedname2":"Test",
        "newsfeedname3":"abc*gf",
        "newsfeedname5":"test: ; # invalid check",
        "newsfeedname6": 'test "'+',"invalid check',
        "newsfeedname7": "test' invalid check",
        "newsfeednamef1":"Test0 news feed"+ Math.floor(Math.random() * 15),
        "clientname": "Bloomberg",
        "newsfeeddomain":"Chemical",
        "error1": "Newsfeed Name is required",
        "error2": "Only Whitespace is not allowed",
        "error3": "Client Name is required",
        "error4": "Domain Name is required",
        "error5": "Newsfeed with this name already exists.",
        "error6": "Newsfeed Name should not be less than 10 characters.",
        "error7": "Newsfeed Name should be alphanumeric and these characters are ' "+'" ; : , # allowed.'
    },
    invaliddata:{
        "invalidnewsname1":{value: "abc/gfghjeg"},
        'invalidnewsname2':{value: "abc`gfghjeg"},
        "invalidnewsname3":{value: "abc~gfghjeg"},
        "invalidnewsname4":{value: "abc!gfghjeg"},
        "invalidnewsname5":{value: "abc@gfghjeg"},
        "invalidnewsname6":{value: "abc$gfghjeg"},
        "invalidnewsname7":{value: "abc%gfghjeg"},
        "invalidnewsname8":{value: "abc^gfghjeg"},
        "invalidnewsname9":{value: "abc&gfghjeg"},
        "invalidnewsname10":{value: "abc(gfghjeg"},
        "invalidnewsname11":{value: "abc)gfghjeg"},
        "invalidnewsname12":{value: "abc-gfghjeg"},
        "invalidnewsname13":{value: "abc_gfghjeg"},
        "invalidnewsname14":{value: "abc+gfghjeg"},
        "invalidnewsname15":{value: "abc=gfghjeg"},
        "invalidnewsname16":{value: "abc{gfghjeg"},
        "invalidnewsname17":{value: "abc}gfghjeg"},
        "invalidnewsname18":{value: "abc[gfghjeg"},
        "invalidnewsname19":{value: "abc]gfghjeg"},
        "invalidnewsname20":{value: "abc|gfghjeg"},
        "invalidnewsname21":{value: "abc\\\gfghjeg"},
        "invalidnewsname22":{value: "abc<gfghjeg"},
        "invalidnewsname23":{value: "abc>gfghjeg"},
        "invalidnewsname24":{value: "abc.gfghjeg"},
        "invalidnewsname25":{value: "abc?gfghjeg"},
        "invalidnewsname26":{value: "abc/gfghjeg"},
        "invalidnewsname27":{value: "abc*gfghjeg"},
    }
}
