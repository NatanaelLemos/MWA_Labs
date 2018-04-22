import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

  private _data = [
    { id: '1', name: 'Asaad Saad', stuID: '12345', email: 'asaad@mum.edu' }
  ];

  public getData() {
    return this._data;
  }

}
