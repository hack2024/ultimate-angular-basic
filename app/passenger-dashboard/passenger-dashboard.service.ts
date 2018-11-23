import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
  constructor() {}
  getPassengers(): Passenger[] {
    return [
      {
        id: 1,
        fullname: "Leila",
        checkedIn: false,
        checkInDate: null,
        children: null
      },
      {
        id: 2,
        fullname: "Mauricio",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: [
          {
            name: "Thiago",
            age: 10
          }
        ]
      },
      {
        id: 3,
        fullname: "Fernando",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: null
      },
      {
        id: 4,
        fullname: "Liliana",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: [
          {
            name: "Fernando",
            age: 31
          }
        ]
      },
      {
        id: 5,
        fullname: "virgina",
        checkedIn: false,
        checkInDate: null,
        children: [
          {
            name: "Maximo",
            age: 6
          }
        ]
      }
    ];
  }
}
