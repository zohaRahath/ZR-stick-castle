class WALLS{
constructor(){ 
    var options={
        isStatic:true
    }  
this.bodies=Bodies.rectangle(100,10,50,600,options)
this.w=50
this.h=600
World.add(world,this.bodies)
}
display(){
rect(this.bodies.position.x,this.bodies.position.y,this.w,this.h)

}
}
