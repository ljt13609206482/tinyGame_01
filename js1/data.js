var dataObj = function(){
 this.rows = [];
 this.y = [];
 this.x = [];
 this.spd = [];
 //console.log(1);
}
dataObj.prototype.init = function(){
  //this.rows.push("1231");
  //this.rows.push("1232");
  //this.rows.push("1233");
  //this.rows.push("1234");
  this.rows.push("11");
  this.rows.push("22");
  for(var i=0;i<this.rows.length;i++){
    this.y[i] = Math.random()*canvasHeight;  
    this.x[i] = canvasWidth; 
    this.spd[i] = Math.random()*0.017+0.003;
 }  
 //console.log(2);
}
dataObj.prototype.draw = function(){
    ctx1.save();
    ctx1.font = "39px SimeHei";
    ctx1.fillStyle = "red";
    for(var i=0;i<this.rows.length;i++){
        var msg = this.rows[i]; 
        ctx1.fillText(msg,this.x[i],this.y[i]);
        //console.log(this.x[i]+":"+this.y[i]);
        this.x[i] -= this.spd[i] * 30 * deltaTime;
        if(this.x[i]<1){
            this.x[i] = canvasWidth; 
        }
    }

    ctx1.restore();
    //console.log(3);
}



dataObj.prototype.addMsg = function(msg){
    this.rows.push(msg);
    for(var i=0;i<this.rows.length;i++){
        this.y[i] = Math.random()*canvasHeight;  
        this.x[i] = canvasWidth; 
        this.spd[i] = Math.random()*0.017+0.003;
     }  
   
}