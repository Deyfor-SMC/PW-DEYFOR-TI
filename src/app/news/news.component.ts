import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { News } from '../models/news.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.css',
    imports: [CommonModule, AppComponent]
})
export class NewsComponent implements OnInit{
[x: string]: any;

  listNews: News[] = [];
  constructor(private serviceNews: ApiService, private ruta: Router){}

  ngOnInit(): void {
  this.getNews();
  }

  getNews() {
    this.serviceNews.getNews().subscribe(response=>{
      this.listNews = response;
    })
  }

 viewNotice(noticia: News){
    localStorage.setItem('id_noticia',''+noticia.id);
    this.ruta.navigateByUrl('/details-news');
  }

}
