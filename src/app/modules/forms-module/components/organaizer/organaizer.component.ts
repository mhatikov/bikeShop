import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-organaizer',
  templateUrl: './organaizer.component.html',
  styleUrls: ['./organaizer.component.scss']
})
export class OrganaizerComponent implements OnInit {

  constructor(
  ) { }

  nowDate: Date = new Date();

  MONTH: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  selectedMonth: number = this.nowDate.getMonth();
  selectedYear: number = this.nowDate.getFullYear();
  selectedDate: number | undefined = undefined;

  selectedDateObj: Date | undefined = undefined;

  @Output() onSelectDate: EventEmitter<Date> = new EventEmitter<Date>();

  increaseSelectedMonth(): void{
    if(this.selectedMonth === 11){
        this.selectedMonth = 0;
        this.selectedYear++;
    }else{
        this.selectedMonth++
    }
  }
  decreaseSelectedMonth(): void{
    if(this.selectedMonth === 0){
        this.selectedMonth = 11;
        this.selectedYear--;
    }else{
        this.selectedMonth--;
    }
  }
  private _getMaxDaysOnMonth(): number{
    let month = new Date(this.selectedYear, this.selectedMonth);
    let maxDays = 0;
    for(let i = 1; i<=31; i++){
        let date = new Date(this.selectedYear, this.selectedMonth, i);
        if(date.getMonth() === month.getMonth()){
            maxDays++;
        }
    }
    return maxDays;
  }
  checkOther(value: any): boolean{
    return typeof value === 'string';
  }
  generateDays(dayIndex: number): (string|number)[]{
    const arrayDays = [];
    let dayStarted = dayIndex;
    if(dayIndex === 0){
      dayStarted = 7;
    }
    for(let i = 1; i <= this._getMaxDaysOnMonth(); i++){
        let date = new Date(this.selectedYear, this.selectedMonth, i);
        if(date.getDay() === dayIndex){
            arrayDays.push(i);
        }else if(date.getDay() !== dayIndex && i === dayStarted){
            if(arrayDays.length < 1){
                arrayDays.push('');
            }
        }
    }
    return arrayDays;
  }
  changeDate(ev: any): void{
    if(!Number(ev.target.textContent)) return;
    this.selectedDate = Number(ev.target.textContent);
    this.selectedDateObj = new Date(this.selectedYear, this.selectedMonth, this.selectedDate);
    this.onSelectDate.emit(this.selectedDateObj);
  }

  ngOnInit(): void {
  }
}