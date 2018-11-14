export interface Children{
  name: string,
  age: number
}
export interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Children[] | null
}
