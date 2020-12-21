import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  login(params){
    return this.http.post(environment.ApiService + 'identity/login', params)
  }

  register(params){
    return this.http.post(environment.ApiService + 'identity/register', params)
  }

  search(searchKey, page){
    return this.http.get(environment.ApiService + 'stack/search?q=' + searchKey  + page)
  }


}
