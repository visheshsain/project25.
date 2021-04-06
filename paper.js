class paper
{
    constructor(x,y,r){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        Push();
        Translate(this.body.x,this.body.y,this.body.r);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.r);
        pop();
        
    }
}