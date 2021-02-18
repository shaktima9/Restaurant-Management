import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL="http://localhost:3000/restoinfo";
regURL="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
 
  getRestoList(){
  console.log("this method works")
  return this._http.get(this.URL);

  }
  addResto(data){
  return this._http.post(this.URL,data);

  }

createUser(data){
  return this._http.post(this.regURL,data);
}

getCurrentData(id){
  return this._http.get(`${this.URL}/${id}`)
}
updateResto(id,data){
  return this._http.put(`${this.URL}/${id}`,data)  
}
deleteResto(id){
  return this._http.delete(`${this.URL}/${id}`)  
}
}

