function myPromise() {
    var isValid = true;
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (isValid) {
                console.log("Resolving");
                resolve("Hurrah");
            } else {
                reject();
            }
        }, 5000);
    });
    return promise;
}

var output = myPromise().then(
    function(value) {
        console.log(value);
    },
    function(value) {
        console.log("It's not working anymore");
    });