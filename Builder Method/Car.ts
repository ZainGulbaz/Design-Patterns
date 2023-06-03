import { CarSpecifications } from "./Interfaces";

export default class Car implements CarSpecifications {
  body: string;
  engine: string;
  seats: number;
  wheels: number;
  constructor(){
    
  }
  setEngine(engine: string): void {
    this.engine = engine;
  }
  setBody(body: string): void {
    this.body = body;
  }
  setSeats(seats: number): void {
    this.seats = seats;
  }
  setWheels(wheels: number): void {
    this.wheels = wheels;
  }
}
