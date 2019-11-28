import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewsService } from 'src/app/service/news.service';
import { NewsCategory } from 'src/app/model/news-category';
import { NewsHeader } from 'src/app/model/news-header';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewsDetailComponent } from '../news-detail/news-detail.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['date', 'time', 'headline', 'category'];
  categories: NewsCategory[];
  headers;
  dataSource: any;

  headerFilter = '';
  headerFilter2 = '';
  categoryFilter;

  constructor(private dataService: NewsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.categories = this.dataService.getNewsCategories();
    this.categories.sort((a, b) => a.description.localeCompare(b.description));

    this.headers = this.dataService.getNewsHeaders();

    this.dataSource = new MatTableDataSource(this.headers);
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      if (property === 'time') {
        return new Date(item.date).toUTCString();
      }
    };
  }

  selectRow(row) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = row;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '400px';

    this.dialog.open(NewsDetailComponent, dialogConfig);
  }

  isRead(headerId) {
    return localStorage.getItem(headerId);
  }

  applyFilter() {
    let filteredData;

    if (this.categoryFilter === undefined) {
      filteredData = this.headers.filter(x => x.headline.toLocaleLowerCase().trim().includes(this.headerFilter));
    } else {
      filteredData = this.headers.filter(x => x.headline.toLocaleLowerCase().trim().includes(this.headerFilter) &&
        x.category === this.categoryFilter);
    }

    this.dataSource = new MatTableDataSource(filteredData);

  }

}
