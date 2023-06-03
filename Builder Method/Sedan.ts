import { CarBuilder, CarSpecifications } from "./Interfaces";
import Car from "./Car";

export default class Sedan implements CarBuilder {
  car: Car;
  constructor() {
    this.car = new Car();
    
  }
  makeBody(): void {
    this.car.setBody("Sedan");
  }
  makeEngine(): void {
    this.car.setEngine("v2 1200cc");
  }
  makeSeats(): void {
    this.car.setSeats(4);
  }
  makeWheels(): void {
    this.car.setWheels(2);
  }
  getCar(): CarSpecifications {
      return this.car;
  }
}
