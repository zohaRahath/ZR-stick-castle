class CKnight1{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies4=Bodies.rectangle(600,200,50,200,options) 
     this.w=50
     this.h=200
     World.add(world,this.bodies4)  
    }
    display(){
    rect(this.bodies4.position.x,this.bodies4.position.y,this.w,this.h)
    fill("green")
    }
}