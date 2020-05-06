class Beam{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies8=Bodies.rectangle(300,235,100,50,options) 
     this.w=200
     this.h=50
     World.add(world,this.bodies8)  
    }
    display(){
    rect(this.bodies8.position.x,this.bodies8.position.y,this.w,this.h)
    fill("white")
    }
}