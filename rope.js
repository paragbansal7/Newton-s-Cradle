class Rope{

    constructor(obj1,obj2,offsetX,offsetY){
    
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var options={
            bodyA : obj1,
            bodyB : obj2,
            stiffness : 0.4,
            length : 50,
            pointB:{x:this.offsetX , y:this.offsetY}
        }
    
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
    
        strokeWeight(3);
        line(pointA.x,pointA.y,
            pointB.x+this.offsetX,
            pointB.y+this.offsetY);
    }
    
    }