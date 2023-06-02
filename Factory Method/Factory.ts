import Circle from "./Circle";
import Square from "./Square";
import Rectangle from "./Rectanlge";
export default class ShapeFactory{
    getCircle():Circle{
        return new Circle();
    }
    getSquare():Square{
        return new Square();
    }
    getRectangle():Rectangle{
        return new Rectangle();
    }
}