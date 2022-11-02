


// const s = "hello";
// let n = s.length;
// console.log(n);
// let f =1;
// for(let i =0,j=n-1;i<j;i++,j--){
  
//         if(s[i]===s[j])continue;
//         else{
//             f=0;
//             break;
     
//     }

    
// }
// if(f===1)
// console.log("Yes");
// else
// console.log("No")
const prompt = require('prompt-sync')();

// console.log(process.argv);
// const s = process.argv[2];
console.log("Enter string");
const s = prompt("");

let n = s.length;
console.log(n);
let f =1;
for(let i =0,j=n-1;i<j;i++,j--){
  
        if(s[i]===s[j])continue;
        else{
            f=0;
            break;
     
    }

    
}
if(f===1)
console.log(`Yes, ${s} is  a palindrome`);
else
console.log(`No, ${s} is  not  a palindrome`)
