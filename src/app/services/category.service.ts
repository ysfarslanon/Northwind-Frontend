import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({ //servis injecte edilecek demektir.
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:44301/api/categories/getall";
  constructor(private httpClient:HttpClient) { }

  //subscribe olunabilen bir response model return olacaktır dönüş tipi observable veri tipi productResponseModel
  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);    
  }
}