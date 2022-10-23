function receivesAFunction(call){
   call()
}

function returnsANamedFunction(){
    let breakfast = 'eggs'
    return breakfast
}


function returnsAnAnonymousFunction (returnsANamedFunction){
    returnsANamedFunction()
}

