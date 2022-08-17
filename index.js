function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    return(function parameter(){
        return("parameter")
    });
}

function returnsAnAnonymousFunction(){
    return(function(){

    })
}