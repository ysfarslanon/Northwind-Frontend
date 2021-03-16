import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded=false;

  constructor(private ProductService: ProductService,private activatedRoute:ActivatedRoute) { }
  //private httpClient sadece bu classının içinde kulllanılabilsin
  //başkası için getirmesin diye
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     if(params["categoryId"]){
       this.getProductsByCategory(params["categoryId"])
     }else{
       this.getProducts();
     }
   })
  }
  getProducts() {
      this.ProductService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded=true;
    })
  }
  getProductsByCategory(categoryId:number) {
    this.ProductService.getProductsByCategory(categoryId).subscribe(response => {
    this.products = response.data
    this.dataLoaded=true;
  })
}
  
}
