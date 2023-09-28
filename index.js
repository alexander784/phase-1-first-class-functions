function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    return function sum(a,b){
        return a + b
    
}
}

function returnsAnAnonymousFunction(){
    return function(){console.log ("Learning JS")
}
}