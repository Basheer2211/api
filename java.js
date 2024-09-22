var data =["ahmad","Ali" ,"Basheer","Aya","sondos"];
var n="";

for (var index = 0; index < data.length; index++) {
   n +=`<tr><td>${data[index]}</td> </tr>`;

   
}
document.querySelector("tbody").innerHTML=n;