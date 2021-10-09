student=[];
function submit(){
for (i=1; i<=5; i++)
{
var temp=document.getElementById("name_"+i).value;
var temp2="<h4>Name-"+temp+"</h4>";
student.push(temp2);
}
document.getElementById("result").innerHTML=student;
}

function sort(){
  var no_comma=student.join("");
  document.getElementById("result_nocommas").innerHTML=student;
  document.getElementById("btn_smt")=style.display=none;
  document.getElementById("btn_sort").style.display="inline block";

}


    
