class stool2{
    constructor(x,y,width,height){ 
        var options={
            isStatic:true
        }    
     this.bodies7=Bodies.rectangle(x,y,width,height,options) 
     this.w=50
     this.h=100
     World.add(world,this.bodies7)  
    }
    display(){
    rect(300,100,this.w,this.h)
    fill("red")
    }
}