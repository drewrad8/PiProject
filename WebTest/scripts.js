var intbut = 0;
var strbut = "Big Broke";

function test(){
  document.getElementById('Buttest').style.color = "Blue";
}

function button(){
if (intbut = 0){
    strbut = "Hello World";
    intbut = 1;
} elseif (intbut = 1){
  strbut = "Bye World"
  intbut = 0;
} else {document.getElementById('Buttest').innerHTML = "Biggest Broke";}
document.getElementById('Buttest').innerHTML = strbut;
}
