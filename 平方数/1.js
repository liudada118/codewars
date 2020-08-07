function digPow(n, p){
    // ...
    let a = n.toString()
    let arr = [] , add = 0
    for(let number of a){
        arr.push(number)
    }
    arr.forEach((ar,i)=>{
        add+=Math.pow(ar,p+i)
    })
    console.log(add,n,add%n)
    if (add % n == 0){
        return add/n
    }else{
        return -1
    }
  }
  console.log(digPow(46288,3))

//   function digPow(n, p) {
//     var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
//   }

// function digPow(n, p){
//     var ans = (''+n).split('')
//       .map(function(d,i){return Math.pow(+d,i+p) })
//       .reduce(function(s,v){return s+v}) / n
//     return ans%1 ? -1 : ans    
//   }//z.