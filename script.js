var array = [
  { 
    color:"lime"
  },
  {
    color:"purple"
  },
  {
    color:"aqua"
  }
]
var boxer =[];

function boxes(hue){
  var that = this;
  this.color=hue;
  this.number=0;
  this.element=document.createElement("div");
  this.element.style.backgroundColor=this.color;
  this.element.style.height="100px";
  this.element.style.width="200px";
  this.element.style.textalign="center";
  this.element.style.borderradius="10px";
  this.digit=document.createElement("div");
  this.digit.classList.add("box");
  this.digit.style.fontSize="18px";  
  this.digit.style.textAlign="center";
  this.digit.style.padding = "40px";
  this.digit.innerHTML=this.number;
  this.element.appendChild(this.digit);
  
  this.element.addEventListener("click", function(){
    that.addUp();
  });
  
  document.body.appendChild(this.element);

}

boxes.prototype.addUp = function(){
  this.number++;
  this.digit.innerHTML=this.number;
}

for(var i=0; i<array.length; i++){
  boxer.push(new boxes(array[i].color))
}