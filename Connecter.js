class Connecter{
    constructor(bodya,bodyb){

        var option={
            bodyA:bodya,
            bodyB:bodyb,
            length:1,
            stiffness:0.7
        }

        this.connecter=Matter.Constraint.create(option);
        World.add(world,this.connecter)

    }

    display(){
        push ();

        strokeWeight(3);
        stroke("brown");

        //line(x1,y1,x2,y2)
        var a=this.connecter.bodyA.position;
        var b=this.connecter.bodyB.position;
        line (a.x,a.y,b.x,b.y)
        pop ();
    }
}