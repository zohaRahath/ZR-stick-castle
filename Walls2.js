class Walls2{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies1=Bodies.rectangle(700,10,50,600,options) 
     this.w=50
     this.h=600
     World.add(world,this.bodies1)  
    }
    display(){
    rect(this.bodies1.position.x,this.bodies1.position.y,this.w,this.h)
    fill("black")
    }
}