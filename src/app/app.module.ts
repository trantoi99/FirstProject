import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { DetailExcersieComponent } from './components/detail-excersie/detail-excersie.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DragDropExamComponent } from './components/drag-drop-exam/drag-drop-exam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    SelectFormComponent,
    DetailExcersieComponent,
    FeedbackComponent,
    DragDropExamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
