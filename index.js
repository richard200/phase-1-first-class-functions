function receivesAFunction(callback){
    return callback()
}

receivesAFunction(() => "Hello World")

function returnsANamedFunction(){
    return function namedFunc(){
        return "Hello World"
    }
}

returnsANamedFunction()

let returnsAnAnonymousFunction = function(){
    return function(){
        return "Hello World"
    }
}

returnsAnAnonymousFunction()