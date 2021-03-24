import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const API = '/api/users/';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {


  constructor(private httpService: HttpClient) {

   }
   getAllData() {
    var obj = JSON.parse(localStorage.getItem("myData"));
    if(obj == null)
    {
      return this.setAllDataToLocalStorageInitially();
    }
    return of(JSON.parse(localStorage.getItem("myData")));
  }
  setAllDataToLocalStorage(data: any) {
    localStorage.setItem("myData", JSON.stringify(data));
  }

  setAllDataToLocalStorageInitially() {
    return this.httpService.get(' assets/DataSource/raw-data.json');
  }
}
