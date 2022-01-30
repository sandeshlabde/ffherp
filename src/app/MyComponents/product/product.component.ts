import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productdata: any;
  productdata2: any;
  pageType: any;

  constructor( private listService: ProspectService,private root:ActivatedRoute ) {
    this.root.params.subscribe((param)=>{
    console.warn(param["flag"],param["id"])
      this.listService.getProductList(param["flag"],param["id"]).subscribe((data: any)=>{ 
        this.productdata =data;
         
         this.productdata2 =JSON.parse(this.productdata);
      }) ; 
      this.pageType=param['flag']
  
    });
    
  } 
  
 

  ngOnInit(): void {
  }

}