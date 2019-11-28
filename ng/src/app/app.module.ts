import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsListComponent } from './screen/news-list/news-list.component';
import { NewsDetailComponent } from './screen/news-detail/news-detail.component';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
} from '@angular/material';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './service/news.service';
import { GetCategoryPipe } from './pipe/get-category.pipe';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent,
    GetCategoryPipe,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
