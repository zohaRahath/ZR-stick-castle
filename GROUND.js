class Ground{
    constructor(){
     var options={
         isStatic:true
     }   
     this.bodies=Bodies.rectangle(0,385,1600,5,options) 
     this.w=1600
     this.h=5
     World.add(world,this.bodies)  
    }
    display(){
        rect(this.bodies.position.x,this.bodies.position.y,this.w,this.h)
        fill("cyan") 
    }
}