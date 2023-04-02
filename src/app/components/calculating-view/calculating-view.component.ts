import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { InfoArray } from '../../interfaces/info.interface';
import { TaskCalculationService } from '../../services/task-calculation.service';

@Component({
  selector: 'app-calculating-view',
  templateUrl: './calculating-view.component.html',
  styleUrls: ['./calculating-view.component.css'],
})
export class CalculatingViewComponent implements OnInit {
  public mainLimit?: number;
  public mainRetention?: number;
  public select = '';
  public inforArray!: InfoArray[];

  @ViewChild('myForm') myForm!: NgForm;

  constructor(private taskService: TaskCalculationService) {}

  ngOnInit(): void {
    this.inforArray = [];
  }

  validateFormat(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  validInput(inputName: string): boolean {
    return (
      this.myForm?.form?.controls[inputName]?.value < 1 ||
      (this.myForm?.form?.controls[inputName]?.invalid &&
        this.myForm?.form?.controls[inputName]?.touched)
    );
  }

  send() {
    if (this.inforArray.length < 20) {
      this.inforArray?.unshift(this.myForm.value);
    } else {
      this.inforArray?.unshift(this.myForm.value);
      this.inforArray?.pop();
    }

    this.taskService.setInfoArray(this.inforArray);

    this.myForm.reset();
  }
}
