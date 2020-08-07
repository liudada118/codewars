function solve(s){
    let aee = 'aeiou'
    let arr = []
    let i = 0
    for (let a of s){
      if(aee.includes(a)){
        arr.push(a)
      }else{
        i<arr.length ? arr.length : i
        arr = []
      }
    }
   return i;
  }
  console.log(solve('daeiousdfdas'))