var that = {
    is: {
        not: {
            funny: "that.is.not.funny",
            a: {
                test: "that.is.not.a.test"
            }
        },
        funny: "that.is.funny",
        a: {
            test: "that.is.a.test"
        }
    },
}



//Proxy
var handler = {
    get: function (target, name) {
        if (name == "hello") {
            return "world"
        }
        
        if(target.hasOwnProperty(name)){
            return target[name]
        }
        // if (target[name] != undefined) {
        //     return target[name]
        // }
        else {
            return 42;
        }
    }
}

var person = {
    name: "Your Name",
    age: 400,
    food: "burgers",
    sex: "male",
    foo: "bar",
    hello: "person"
}

var obj = new Proxy(person, handler);

