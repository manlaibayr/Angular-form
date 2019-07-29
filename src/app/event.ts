export class EventModel {

    constructor(
      public id: number,
      public title: string,
      public description: string,
      public category: object,
      public payment: number,
      public reward: number,
      public responsible: string,
      public email: string,
      public start: number,
      public hour: number,
      public duration : number

    ) {  }
  
  }