function MyPromise(executor){
    let onResolve;
    let onReject;
    let isCalled = false;

    const resolve = function(val){
        if(typeof onResolve === 'function' && !isCalled){
            onResolve(val)
            isCalled = true;
        }
    };
    const reject = function(err){
        if(typeof onReject === 'function' && !isCalled){
            onReject(err)
            isCalled = true;
        }
    };
    

    this.then = function(thenHandler){
        onResolve = thenHandler
        return this;
    }
    this.catch = function(catchHandler){
        onReject = catchHandler;
        return this;
    }

    executor(resolve, reject);
} 