import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/staticData/data.service';
import { LocalStorageService } from '../services/storage/local-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private dataStorage: LocalStorageService
  ) { }

  getParamValue: any;
  getProductDetails: any;
  storeCartData: any = [];
  inCart: boolean = false;

  ngOnInit(): void {
    // Get the ID from the route
    this.getParamValue = this.activatedRoute.snapshot.paramMap.get('id');

    // Retrieve cart data from local storage
    const getVal = this.dataStorage.getCartData();

    // Initialize storeCartData array with retrieved data or empty array
    this.storeCartData = getVal ? getVal : [];

    // Filter product data based on the retrieved ID
    this.dataService.productData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.getProductDetails = ele;
      }
    });

    // Check if the product is already in the cart
    this.storeCartData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.inCart = true;
      }
    });
  }

  addCart(data: any) {
    // Add a counter property to the product data
    data['plusMinusCounter'] = 1;

    // Add the product to the cart data array
    this.storeCartData.push(data);

    // Store updated cart data in local storage
    this.dataStorage.storeCartData(this.storeCartData);

    // Log a message before navigation
    console.log('Navigating to cart...');

    // Navigate to the cart page
    this.router.navigate(['/layout/cart']).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.log('Navigation failed');
      }
    });
  }
}
