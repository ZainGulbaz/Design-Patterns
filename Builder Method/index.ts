import Sedan from "./Sedan";

class Main{

constructor(){
    let sedan=new Sedan();
    sedan.makeEngine();
    sedan.makeBody();
    sedan.makeSeats();
    sedan.makeWheels();
    
    let sedanCar=sedan.getCar();
    console.log(sedanCar.body);
}

}

let main= new Main();