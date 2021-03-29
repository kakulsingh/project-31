class Umbrella{
    constructor(x,y){
        var options={
            isStatic=true
        }
        this.image=loadImage("Walking Frame/walking_1.png")
        this.radius=55
        this.umbrella=Bodies.circle(x,y,55,options)
       World.add(world,this.umbrella)
    }
    display(){
        var pos=this.umbrella.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y+70,300,300)
    }
}







