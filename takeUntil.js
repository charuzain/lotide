const takeUntil=function(array,callback){
let result =[];
for(let elem of array){
  
  if(!callback(elem)){
  result.push(elem)
      };
   if(callback(elem)){
    break;}
  
}
return result;
}

module.exports = takeUntil;