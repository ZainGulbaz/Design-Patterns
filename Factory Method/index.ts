import Circle from "./Circle";
import ShapeFactory from "./Factory";
import Rectangle from "./Rectanlge";
import Square from "./Square";
export class Logic{
    cirlce:Circle;
    square:Square;
    rectangle:Rectangle;
    constructor(){
      let sf= new ShapeFactory();
      this.cirlce=sf.getCircle();
      this.square=sf.getSquare();
      this.rectangle=sf.getRectangle();
    }
    
    drawCircle(){
        this.cirlce.draw();
    }

    drawRectangle(){
        this.rectangle.draw();
    }

    drawSquare(){
        this.rectangle.draw();
    }


}


let l1= new Logic();
l1.drawCircle();
l1.drawRectangle();
l1.drawSquare();