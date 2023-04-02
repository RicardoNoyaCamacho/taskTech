import { Component, Input, OnInit } from '@angular/core';
import { InfoArray } from 'src/app/interfaces/info.interface';
import { TaskCalculationService } from '../../services/task-calculation.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  updatedArray!: InfoArray[];
  referenceDate: Date = new Date();
  benchmarkPercent1: number = 0.23;
  benchmarkPercent2: number = 0.47;
  benchmarkNumber1: number = 0;
  benchmarkNumber2: number = 0;
  isLoading = false;

  constructor(private taskService: TaskCalculationService) {}

  ngOnInit(): void {
    this.taskService.infoArrayemitter.subscribe((resp) => {
      this.updatedArray = resp;
      this.referenceTable();
    });
  }

  load(): void {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 2000);
  }

  referenceTable() {
    this.updatedArray?.forEach((e) => {
      this.load();
      e.referenceDate = this.referenceDate;

      e.benchmarkNumber1 = this.calculating(
        e.mainLimit,
        this.benchmarkPercent1
      );
      e.benchmarkNumber2 = this.calculating(
        e.mainLimit,
        this.benchmarkPercent2
      );
    });
  }

  calculating(number: number, percent: number) {
    number = number * (1 + percent);
    return number;
  }
}
