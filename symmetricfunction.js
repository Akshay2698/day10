function symmetric(){
var a1=[1,2,3]
var a2=[4,5,3]
var arr=a1.concat(a2)
arr.sort()
console.log(arr)

for(var i=0;i<arr.length;i++)
  {
    if(arr[i]==arr[i+1]){
      arr.splice(i,2)
    }
  }
console.log(arr)  
}

symmetric()