import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/staticData/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  carouseImg = [
    {
      id: 1,
      img: '../../assets/images/carousel/1.webp'
    },
    {
      id: 2,
      img: '../../assets/images/carousel/2.webp'
    },
    {
      id: 3,
      img: '../../assets/images/carousel/3.webp'
    },
    {
      id: 4,
      img: '../../assets/images/carousel/4.webp'
    },
    {
      id: 5,
      img: '../../assets/images/carousel/5.webp'
    },
    {
      id: 6,
      img: '../../assets/images/carousel/6.webp'
    },
    {
      id: 7,
      img: '../../assets/images/carousel/7.webp'
    },

  ]


  getCategories:any
  getGroceryData:any = []
  getMobileAndTablets:any = []
  getFashionData:any = []
  constructor(private staticData:DataService){}

  ngOnInit(): void {
    this.getCategories = this.staticData.categoriesData;


    this.staticData.productData.filter((ele:any)=>{
      if(ele.pdCategory == 'grocery'){
        this.getGroceryData.push(ele)
      }
      if(ele.pdCategory == 'mobile&tablets'){
        this.getMobileAndTablets.push(ele)
      }
      if(ele.pdCategory == 'fashion'){
        this.getFashionData.push(ele)
      }
    })
  }
}
