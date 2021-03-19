import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-drag-drop-exam',
  templateUrl: './drag-drop-exam.component.html',
  styleUrls: ['./drag-drop-exam.component.css'],
})
export class DragDropExamComponent implements OnInit {
  listQuestion: any[] = [
    {
      id: 6,
      fileName: 'Thư mục 6',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 7,
      fileName: 'Thư mục 7',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 8,
      fileName: 'Thư mục 8',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 9,
      fileName: 'Thư mục 9',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
    {
      id: 10,
      fileName: 'Thư mục 10',
      pointPerQuestion: 1,
      numberQuestions: 10,
    },
  ];
  constructor(private ss: QuestionService) {}
  onDrop(event: CdkDragDrop<string[]>) {
    this.ss.drop(event);
  }

  ngOnInit(): void {}
}
