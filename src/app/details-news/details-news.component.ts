import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { ApiService } from '../service/api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-details-news',
    standalone: true,
    templateUrl: './details-news.component.html',
    styleUrl: './details-news.component.css',
    imports: [AppComponent,RouterLink]
})
export class DetailsNewsComponent implements OnInit{

    data: any;
    idnoticia = Number(localStorage.getItem('id_noticia'));
;
    constructor(private serviceNews: ApiService) { }

    ngOnInit(): void {
        this.getNoticia();
    }


    getNoticia() {
        console.log(localStorage.getItem('id_noticia'));
        this.serviceNews.GetNoticeById(this.idnoticia).subscribe(response => {
            this.data = response;
            console.log(this.data.data);
        })
    }

    retroceder(){
      localStorage.removeItem('id_noticia');
    }

}
