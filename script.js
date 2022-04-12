var names = new Array();
names = ["jake","ash","bario","mario","julia","drake","jackson","tarik","berg"];

function nameCaller(){

    for (let i = 0; i < names.length; i++) {
        if(names[i].charAt(0) == "J" || names[i].charAt(0) == "j"){
            console.log("Goodbye " + names[i])
        } else {
            console.log("Hello " + names[i])
        };
    };


};

nameCaller();