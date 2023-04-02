import { EventEmitter, Injectable, Output } from '@angular/core';
import { InfoArray } from '../interfaces/info.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskCalculationService {
  private infoArray: InfoArray[] = [];

  @Output()
  infoArrayemitter = new EventEmitter<InfoArray[]>();

  constructor() {}

  setInfoArray(infoForArray: InfoArray[]) {
    this.infoArray = infoForArray;
    this.updateArray();
  }

  updateArray() {
    this.infoArrayemitter.emit(this.infoArray);
  }
}
