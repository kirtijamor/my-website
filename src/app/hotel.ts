export class Hotel {
  constructor() {}
  public country: string;
  public location: string;
  public checkin: Date;
  public checkout: Date;
  public duration: number;
  public members: number;
}

export const Hotels: Hotel[] = [
  {country: 'Turkey' , location: 'Istanbul' , checkin: new Date(2018, 12, 15) ,
  checkout: new Date(2018, 12, 18)  , duration: 3 , members: 5},

  {country: 'Turkey' , location: 'Istanbul' , checkin: new Date(2018, 12, 15) ,
  checkout: new Date(2018, 12, 22)  , duration: 7 , members: 15},

  {country: 'Turkey' , location: 'Moscow' , checkin:  new Date(2018, 12, 25)  ,
  checkout: new Date(2018, 12, 29) , duration: 4 , members: 10},

  {country: 'Turkey' , location: 'Cairo' , checkin: new Date(2018, 12, 15)  ,
  checkout: new Date(2018, 12, 25) , duration: 10 , members: 5},

  {country: 'Russia' , location: 'Istanbul' , checkin: new Date(2018, 12, 15) ,
  checkout: new Date(2018, 12, 20) , duration: 5 , members: 15},

  {country: 'Russia' , location: 'Moscow' , checkin: new Date(2018, 12, 15) ,
  checkout: new Date(2018, 12, 18) , duration: 3 , members: 20},

  {country: 'Russia' , location: 'Cairo' , checkin: new Date(2018, 12, 15) ,
  checkout: new Date(2018, 12, 21) , duration: 6 , members: 10},

  {country: 'Egypt' , location: 'Istanbul' , checkin: new Date(2018, 12, 16) ,
  checkout: new Date(2018, 12, 19) , duration: 3 , members: 15},

  {country: 'Egypt' , location: 'Moscow' , checkin: new Date(2018, 12, 15) ,
  checkout: new Date(2018, 12, 16) , duration: 1 , members: 10}
  // {country: 'Egypt' , location: 'Cairo' , checkin:  , checkout:  , duration:  , members: },
];
