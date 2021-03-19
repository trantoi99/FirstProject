import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExcersieComponent } from './detail-excersie.component';

describe('DetailExcersieComponent', () => {
  let component: DetailExcersieComponent;
  let fixture: ComponentFixture<DetailExcersieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailExcersieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExcersieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
