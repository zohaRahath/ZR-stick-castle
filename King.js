class King{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies9=Bodies.rectangle(375,85,50,200,options) 
     this.w=50
     this.h=200
     World.add(world,this.bodies9)  
    }
    display(){
    rect(this.bodies9.position.x,this.bodies9.position.y,this.w,this.h)
    fill("blue");
    }
}