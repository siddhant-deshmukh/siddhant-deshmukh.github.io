const arr = [1, 3, 6, 9]

const min = 1
const max = 9

for(let i=min;i<max;i++){
  if(arr.indexOf(i) == -1){
    console.log(i)
  }
}