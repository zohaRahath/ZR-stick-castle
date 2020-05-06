class bishop1{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies2=Bodies.rectangle(650,170,50,500,options) 
     this.w=50
     this.h=500
     World.add(world,this.bodies2)  
    }
    display(){
    rect(this.bodies2.position.x,this.bodies2.position.y,this.w,this.h)
    fill("blue")
    }
}