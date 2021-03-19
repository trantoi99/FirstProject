import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  constructor() {}

  public id: number = 0;

  listArrs = [
    {
      id: this.id,
      scopeOfQuestion: 10,
      wrongAnswers: 5,
      referenceLink: '',
    },
  ];

  object: any = {
    id: this.id,
    scopeOfQuestion: 0,
    wrongAnswers: 0,
    referenceLink: '',
  };

  // push object to array to add element
  addElement() {
    // this.listArrs.push({})
    // this.listArrs.push({
    // });
    this.object.id += 1;
    this.listArrs.push(this.object);
    console.log(this.object.id);
  }

  // delete item in array to delete element
  removeArrItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }

  // remove advise
  removeAdvise(value) {
    var span = document.getElementById(value);
    span.style.display = ' none';
  }
  ngOnInit(): void {}
}
