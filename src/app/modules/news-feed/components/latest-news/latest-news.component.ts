import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent {

  articles:any[];
  constructor(private matDialog:MatDialog,private newsService:NewsService) {}

  ngOnInit():void {
    this.newsService.getLatestNews().subscribe(res=>{
      this.articles=res.response.docs.slice(0,4);
    })
  }

  openDialog(article) {
    this.matDialog.open(DialogComponent,{
      data:article
    });
  }
}
