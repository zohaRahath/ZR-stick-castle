class Cknight2{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies5=Bodies.rectangle(200,200,50,200,options) 
     this.w=50
     this.h=200
     World.add(world,this.bodies5)  
    }
    display(){
    rect(this.bodies5.position.x,this.bodies5.position.y,this.w,this.h)
    fill("pink")
    }
}