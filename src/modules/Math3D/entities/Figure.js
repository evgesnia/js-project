//import Point from "./Point";

export default  class Figure {
    constructor(points = [], edges = [], polygons = [], name = '') {
        this.points = points;
        this.edges = edges;
        this.polygons = polygons;
        this.name = name;
        //this.center = center;
        //this.animations = [];
    }
    
    /*dropAnimation(){
        this.animations = [];
    }
    setAnimation(method,value,center){
        this.animations.push({
            [method]:value,
            center:center ? center : this.center
        });
    }

    //updateAnimation (По индексу меняет анимацию) Work in progress*/
}