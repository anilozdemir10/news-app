import { Component, OnInit, Inject } from '@angular/core';
import { NewsHeader } from 'src/app/model/news-header';
import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { NewsService } from 'src/app/service/news.service';
import marked from 'marked';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: NewsHeader, private dataService: NewsService) { }
  newsDetail;

  ngOnInit() {
    localStorage.setItem(this.data.id.toString(), JSON.stringify(true));

    this.newsDetail = this.dataService.getNewsDetail(this.data.id);
    this.newsDetail.content = marked(this.newsDetail.content);

  }

}
