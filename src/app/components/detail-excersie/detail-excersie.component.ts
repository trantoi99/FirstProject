import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-detail-excersie',
  templateUrl: './detail-excersie.component.html',
  styleUrls: ['./detail-excersie.component.css'],
})
export class DetailExcersieComponent implements OnInit {
  constructor(private ss: QuestionService) {}
  onDrop(event: CdkDragDrop<string[]>) {
    this.ss.drop(event);
  }
  listFileName : any[] = [
    {
      id: 1,
      fileName: 'Thư mục 1',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 2,
      fileName: 'Thư mục 2',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 3,
      fileName: 'Thư mục 3',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 4,
      fileName: 'Thư mục 4',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 5,
      fileName: 'Thư mục 5',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
  ];
  ngOnInit(): void {}
}
