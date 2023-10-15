var button=document.getElementById('calculate-me');
let inputDate=document.getElementById('birthDate');

inputDate.max = new Date().toISOString().split("T")[0];
let result=document.getElementById('result');

button.addEventListener('click',()=>{
   
   let birth=new Date(inputDate.value);
   let d1=birth.getDate();
   let m1=birth.getMonth()+1;
   let y1=birth.getFullYear();
   
   let today=new Date();
   let d2=today.getDate();
   let m2=today.getMonth()+1;
   let y2=today.getFullYear();

   let m3,d3;
   let y3=y2-y1;
 
   if(m1>m2)
   {
      y3--;
      m3=12+m2-m1;
   }
   else
   {
      m3=m2-m1;
   }
    if(d1>d2)
   {  
      m3--;
      d3=getDays(y1,m1)+d2-d1;
   }
   else
   {
      d3=d2-d1;
   }
   if(m3<0)
   {
      m3=11;
      y3--;
   }
console.log(y3,m3,d3);
result.innerHTML=`You are ${y3} years ${m3} month and ${d3} days old`;
});

function getDays(year,month){
   return new Date(year,month,0).getDate();

}


