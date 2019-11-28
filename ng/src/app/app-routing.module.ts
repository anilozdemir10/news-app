import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './screen/news-list/news-list.component';
import { NewsDetailComponent } from './screen/news-detail/news-detail.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'detail', component: NewsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
