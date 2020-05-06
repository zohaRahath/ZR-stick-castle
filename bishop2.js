class bishop2{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies3=Bodies.rectangle(150,170,50,500,options) 
     this.w=50
     this.h=500
     World.add(world,this.bodies3)  
    }
    display(){
    rect(this.bodies3.position.x,this.bodies3.position.y,this.w,this.h)
    fill("purple")
    }
}