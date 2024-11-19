import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/staticData/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  getParamValue: any;
  getProductData: any = [];
  filterProductData: any = [];
  getSubcategoryOption: any = [];

  constructor(private getData: DataService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParamValue = this.activeRoute.snapshot.paramMap.get('name');

    // Initial filtering based on category
    this.getData.productData.forEach((ele: any) => {
      if (ele.pdCategory === this.getParamValue) {
        this.getProductData.push(ele);
        this.filterProductData.push(ele);
      }
    });

    // Populate subcategory options
    this.getData.subCategorisFilterData.forEach((ele: any) => {
      if (ele.categories === this.getParamValue) {
        this.getSubcategoryOption.push(ele);
      }
    });
  }

  filterSelect(selectedSubcategory: string) {
    this.filterProductData = []; // Clear the array before applying new filter

    if (selectedSubcategory !== 'all') {
      this.getProductData.forEach((ele: any) => {
        if (ele.pdSubCategory === selectedSubcategory) {
          this.filterProductData.push(ele);
        }
      });
    } else {
      this.filterProductData = [...this.getProductData]; // Reset to all products if 'all' is selected
    }

    console.log(this.filterProductData, 'Filtered Products');
  }
}
