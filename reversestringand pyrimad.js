function reversestring(str){
    updatedstr="";
    for(let i=str.length-1;i>=0;i--){
        updatedstr = updatedstr+str[i];  
         console.log(updatedstr)
    }
    for(let j=updatedstr;j<=str.length/2;j++ ){
        console.log(j);
    }
 


}
console.log(reversestring("WELCOME"));
