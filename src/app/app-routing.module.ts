import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module')
        .then(m => m.LayoutModule)
  },
  // Fallback when no prior routes is matched
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
