import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: any;
  questionList: any = [];
  nextUrl: any;
  prevUrl: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.search)
    const params ='';
    this.apiService.search(this.search, params).subscribe(
      (res) => {
        console.log(res);
        this.questionList = res['result'];
        this.nextUrl = res['next_url'];
        this.prevUrl = res['prev_url'];
      }, (err) => {
        console.log(err);
        
      }
    )

  }

}
