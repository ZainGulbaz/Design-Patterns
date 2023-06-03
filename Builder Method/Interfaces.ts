export interface CarSpecifications{
    body:string;
    engine:string;
    wheels:number;
    seats:number;
    setEngine(engine:string):void;
    setBody(body:string):void;
    setSeats(seats:number):void;
    setWheels(wheels:number):void;
}

export interface CarBuilder{
    car:CarSpecifications;

    makeEngine():void;
    makeBody():void;
    makeSeats():void;
    makeWheels():void;
    getCar():CarSpecifications;
}