import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropExamComponent } from './drag-drop-exam.component';

describe('DragDropExamComponent', () => {
  let component: DragDropExamComponent;
  let fixture: ComponentFixture<DragDropExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
