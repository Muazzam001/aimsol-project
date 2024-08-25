import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipes/sort.pipe';
import { RemoveBetweenSpacesPipe } from './pipes/remove-between-spaces.pipe';
import { TestComponent } from './components/test/test.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    SortPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    //Pipes
    RemoveBetweenSpacesPipe,
    //Components
    NotFoundComponent,
    TestComponent
  ],
  exports: [
    NotFoundComponent,
    TestComponent
  ],
  providers: [
  ],
})
export class SharedModule { }
