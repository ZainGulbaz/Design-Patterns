import { CarBuilder, CarSpecifications } from "./Interfaces";
import Car from "./Car";

export default class Hatch implements CarBuilder {
  car: Car;

  constructor() {
    this.car = new Car();
  }

  makeBody(): void {
    this.car.setBody("Hatch Back");
  }
  makeEngine(): void {
    this.car.setEngine("v3 660cc");
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
