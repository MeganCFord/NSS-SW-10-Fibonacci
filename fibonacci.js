var recursive = function(n) {
    if(n <= 2) {
        return 1;//note the return (see below)
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);//the 'return' here is important to get it out of the function when it's done.
    }
};
console.log(recursive(7));//this function is able to find a specific number. I tried putting it in a for loop and broke it, not sure how to combine for loops and recursivity at this point. I think it might just be that it takes a long time to do.


var looping = function() {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= 20; i++) {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
    } 
}

looping();

//you can also do this with an array. 
//
fibArray = [0,1];
var fastFib = function(n) {
  for (var i = 2; i < n; i++) {
    fibArray.push(fibArray[i-1] + fibArray[i-2]);
  }
  var prettyArray = fibArray.join(",");
  console.log(prettyArray);
}
fastFib(16);
