let arrayVal=[1300,5200,3004,4400,1500,600,700,800,900,2000];
let b=arrayVal[0];
let c;
function myFunc(){
   for(i=0;i<arrayVal.length;i++){
      if(arrayVal[i]<b){
      b=arrayVal[i];
      }
   }
   document.write(b+"<br>");
   
}
myFunc();
