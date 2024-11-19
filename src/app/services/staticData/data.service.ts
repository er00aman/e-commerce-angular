import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  subCategorisFilterData = [
    {
      id:1,
      categories:'grocery',
      subcategories:'Staples'
    },
    {
      id:2,
      categories:'grocery',
      subcategories:'Snacks & Beverages'
    },
    {
      id:3,
      categories:'grocery',
      subcategories:'Packaged Food'
    },
    {
      id:4,
      categories:'grocery',
      subcategories:'Personal & Baby Care'
    },
    {
      id:5,
      categories:'grocery',
      subcategories:'Household Care'
    },
    {
      id:6,
      categories:'grocery',
      subcategories:'Dairy & Eggs'
    },
    {
      id:7,
      categories:'grocery',
      subcategories:'Home & Kitchen'
    },



    {
      id:8,
      categories:'mobile&tablets',
      subcategories:'i phone'
    },
    {
      id:9,
      categories:'mobile&tablets',
      subcategories:'Samsung'
    },
    {
      id:10,
      categories:'mobile&tablets',
      subcategories:'Oppo'
    },
    {
      id:11,
      categories:'mobile&tablets',
      subcategories:'Vivo'
    },




    {
      id:12,
      categories:'fashion',
      subcategories:"Man's clothes"
    },
    {
      id:13,
      categories:'fashion',
      subcategories:"Women's clothes"
    },
    {
      id:14,
      categories:'fashion',
      subcategories:"Boy's clothes"
    },
    {
      id:15,
      categories:'fashion',
      subcategories:"Girl's clothes"
    },







    {
      id:16,
      categories:'electronics',
      subcategories:"Speakers"
    },
    {
      id:17,
      categories:'electronics',
      subcategories:"Chargers"
    },
    {
      id:18,
      categories:'electronics',
      subcategories:"Air pods"
    },





    {
      id:19,
      categories:'home&furniture',
      subcategories:"Chair"
    },
    {
      id:20,
      categories:'home&furniture',
      subcategories:"Table"
    },
    {
      id:21,
      categories:'home&furniture',
      subcategories:"Sofa"
    },




    {
      id:22,
      categories:'tv&appliances',
      subcategories:"Mi"
    },
    {
      id:23,
      categories:'tv&appliances',
      subcategories:"Realme"
    },
    {
      id:24,
      categories:'tv&appliances',
      subcategories:"Sumsung"
    },



    {
      id:24,
      categories:'toys',
      subcategories:"Bike's"
    },
    {
      id:25,
      categories:'toys',
      subcategories:"Car's"
    },
    {
      id:26,
      categories:'toys',
      subcategories:"Avengers"
    },



    {
      id:27,
      categories:'beauty',
      subcategories:"Boy's cream"
    },
    {
      id:28,
      categories:'beauty',
      subcategories:"Girl's cream"
    },
    {
      id:29,
      categories:'beauty',
      subcategories:"Boy's feshwash"
    },
    {
      id:30,
      categories:'beauty',
      subcategories:"Girl's feshwash"
    },
  ]


  //categories data

  categoriesData = [
    {
      id:1,
      name:'Grocery',
      img: '../../../assets/images/categories/1.webp',
      code:'grocery'
    },
    {
      id:2,
      name:'Mobile & Tablets',
      img: '../../../assets/images/categories/2.webp',
      code:'mobile&tablets'
    },
    {
      id:3,
      name:'Fashion',
      img: '../../../assets/images/categories/3.webp',
      code:'fashion'
    },
    {
      id:4,
      name:'Electronics',
      img: '../../../assets/images/categories/4.webp',
      code:'electronics'
    },
    {
      id:5,
      name:'Home & Furniture',
      img: '../../../assets/images/categories/5.webp',
      code:'home&furniture'
    },
    {
      id:6,
      name:'Tv & appliances',
      img: '../../../assets/images/categories/6.webp',
      code:'tv&appliances'
    },
    {
      id:7,
      name:'Toys',
      img: '../../../assets/images/categories/7.webp',
      code:'toys'
    },
    {
      id:7,
      name:'Beauty',
      img: '../../../assets/images/categories/8.webp',
      code:'beauty'
    },
  ]

  productData = [
    {
      pdId: 101,
      pdName: "Natureland Organics Moong Dal (Whold)",//oil ke liye porduct detail aayega
      pdDesc: "Organic, protein-rich, and versatile, Natureland Organics Moong Dal is perfect for healthy meals. Non-GMO and free from pesticides, it's ideal for soups, salads, and curries. Enjoy the natural goodness!",
      pdPrice: 209,
      pdCategory: "grocery",
      pdSubCategory: "Staples",
      pdImg: "../../assets/images/staples/1.webp"
    },
    {
      pdId: 102,
      pdName: "Tata Sampann Green Organics Moong Dal (Whold)",
      pdDesc: "Organic, protein-rich, and versatile, Natureland Organics Moong Dal is perfect for healthy meals. Non-GMO and free from pesticides, it's ideal for soups, salads, and curries. Enjoy the natural goodness!",
      pdPrice: 76,
      pdCategory: "grocery",
      pdSubCategory: "Staples",
      pdImg: "../../assets/images/staples/2.webp"
    },
    {
      pdId: 103,
      pdName: "Desi Choice White Peas (Mater) (Whole)",
      pdDesc: "Organic, protein-rich, and versatile, Natureland Organics Moong Dal is perfect for healthy meals. Non-GMO and free from pesticides, it's ideal for soups, salads, and curries. Enjoy the natural goodness!",
      pdPrice: 88,
      pdCategory: "grocery",
      pdSubCategory: "Staples",
      pdImg: "../../assets/images/staples/4.webp"
    },





    {
      pdId: 104,
      pdName: "Iron Choco Pie Chocolate",
      pdDesc: "This is the iron choco pie chocolate",
      pdPrice: 99,
      pdCategory: "grocery",
      pdSubCategory: "Snacks & Beverages",
      pdImg: "../../assets/images/snacks&beverages/1.webp"
    },
    {
      pdId: 105,
      pdName: "UNIBIC Chocolate cookies",
      pdDesc: "This is the iron choco pie chocolate",
      pdPrice: 79,
      pdCategory: "grocery",
      pdSubCategory: "Snacks & Beverages",
      pdImg: "../../assets/images/snacks&beverages/2.webp"
    },






    {
      pdId: 106,
      pdName: "Kwality Choco Flakes, Made with Whole Wheat, Source of Protein & Fibre",
      pdDesc: "This is the iron choco pie chocolate",
      pdPrice: 99,
      pdCategory: "grocery",
      pdSubCategory: "Packaged Food",
      pdImg: "../../assets/images/packgedFood/1.webp"
    },
    {
      pdId: 107,
      pdName: "Kellogg's Chocos Moons & Stars with Whole Grain, High In Calcium & Protein",
      pdDesc: "This is the iron choco pie chocolate",
      pdPrice: 199,
      pdCategory: "grocery",
      pdSubCategory: "Packaged Food",
      pdImg: "../../assets/images/packgedFood/2.webp"
    },



    {
      pdId: 108,
      pdName: "Antibacterial neem soap",
      pdDesc: "This is the iron antibacterial neem soap",
      pdPrice: 59,
      pdCategory: "grocery",
      pdSubCategory: "Personal & Baby Care",
      pdImg: "../../assets/images/personalCare/1.webp"
    },
    {
      pdId: 109,
      pdName: "FIAMA Golden Sandalwood Oil & Patchouli Soap Gel Bathing Bar for Moisturised Soft Sceen",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 59,
      pdCategory: "grocery",
      pdSubCategory: "Personal & Baby Care",
      pdImg: "../../assets/images/personalCare/2.webp"
    },




    {
      pdId: 110,
      pdName: "Wheel Active 2 in 1 Green Detergent Powder",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 99,
      pdCategory: "grocery",
      pdSubCategory: "Household Care",
      pdImg: "../../assets/images/householdCare/1.webp"
    },
    {
      pdId: 111,
      pdName: "Godrej Fab Refill Pouch for Machine & Hand Wash Fresh Liquid Detergent",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 89,
      pdCategory: "grocery",
      pdSubCategory: "Household Care",
      pdImg: "../../assets/images/householdCare/2.webp"
    },





    {
      pdId: 112,
      pdName: "HERSHEY'S Chocolate flavored Milkshake Enriched with Calcium",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 60,
      pdCategory: "grocery",
      pdSubCategory: "Dairy & Eggs",
      pdImg: "../../assets/images/dairyEggs/1.webp"
    },
    {
      pdId: 113,
      pdName: "Cavin's Chocolate Milkshake, with Zinc, Vitamin A & D",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 49,
      pdCategory: "grocery",
      pdSubCategory: "Dairy & Eggs",
      pdImg: "../../assets/images/dairyEggs/1.webp"
    },





    {
      pdId: 114,
      pdName: "MACARIZE Plastic Grodery Container",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 49,
      pdCategory: "grocery",
      pdSubCategory: "Home & Kitchen",
      pdImg: "../../assets/images/homeKitchen/1.webp"
    },
    {
      pdId: 115,
      pdName: "MACARIZE Plastic Grodery Container",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 149,
      pdCategory: "grocery",
      pdSubCategory: "Home & Kitchen",
      pdImg: "../../assets/images/homeKitchen/2.webp"
    },




    {
      pdId: 116,
      pdName: "Apple iPhone 14",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 57999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "i phone",
      pdImg: "../../assets/images/iphone/1.webp"
    },
    {
      pdId: 117,
      pdName: "Apple iPhone 12 (Blue, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 37999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "i phone",
      pdImg: "../../assets/images/iphone/2.webp"
    },




    {
      pdId: 118,
      pdName: "SAMSUNG Galaxy F15 (Black, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 12999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "Samsung",
      pdImg: "../../assets/images/samsung/2.webp"
    },
    {
      pdId: 119,
      pdName: "SAMSUNG Galaxy F15 (Groovy Violet, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 12999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "Samsung",
      pdImg: "../../assets/images/samsung/2.webp"
    },




    {
      pdId: 120,
      pdName: "OPPO K12X 5G (Groovy Violet, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 15999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "Oppo",
      pdImg: "../../assets/images/oppo/1.webp"
    },
    {
      pdId: 121,
      pdName: "OPPO K12X 5G  F15 (Light gray Violet, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 12999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "Oppo",
      pdImg: "../../assets/images/oppo/2.webp"
    },





    {
      pdId: 122,
      pdName: "Vivo T3x 5G(Crimson Bliss, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 14999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "Vivo",
      pdImg: "../../assets/images/vivo/1.webp"
    },
    {
      pdId: 123,
      pdName: "Vivo T3x 5G(Celestial Green, 64 GB)",
      pdDesc: "This is the iron sandalwood oil",
      pdPrice: 14999,
      pdCategory: "mobile&tablets",
      pdSubCategory: "Vivo",
      pdImg: "../../assets/images/vivo/2.webp"
    },




    {
      pdId: 124,
      pdName: "Man Regular Fit Printed Spread Collar",
      pdDesc: "This is the man clothes",
      pdPrice: 359,
      pdCategory: "fashion",
      pdSubCategory: "Man's clothes",
      pdImg: "../../assets/images/manClothes/1.webp"
    },
    {
      pdId: 125,
      pdName: "Man Regular Fit Printed Spread Collar",
      pdDesc: "This is the man clothes",
      pdPrice: 359,
      pdCategory: "fashion",
      pdSubCategory: "Man's clothes",
      pdImg: "../../assets/images/manClothes/2.webp"
    },



    {
      pdId: 126,
      pdName: "Women Regular Fit Printed Spread Collar",
      pdDesc: "This is the women clothes",
      pdPrice: 359,
      pdCategory: "fashion",
      pdSubCategory: "Women's clothes",
      pdImg: "../../assets/images/manClothes/1.webp"
    },
    {
      pdId: 127,
      pdName: "Women Regular Fit Printed Spread Collar",
      pdDesc: "This is the women clothes",
      pdPrice: 359,
      pdCategory: "fashion",
      pdSubCategory: "Women's clothes",
      pdImg: "../../assets/images/womenClothes/2.webp"
    },




    {
      pdId: 128,
      pdName: "Boy Regular Fit Printed Spread Collar",
      pdDesc: "This is the Boy clothes",
      pdPrice: 559,
      pdCategory: "fashion",
      pdSubCategory: "Boy's clothes",
      pdImg: "../../assets/images/boyClothes/1.webp"
    },
    {
      pdId: 129,
      pdName: "Boy Regular Fit Printed Spread Collar",
      pdDesc: "This is the Boy clothes",
      pdPrice: 799,
      pdCategory: "fashion",
      pdSubCategory: "Boy's clothes",
      pdImg: "../../assets/images/boyClothes/2.webp"
    },




    {
      pdId: 130,
      pdName: "Girl Regular Fit Printed Spread Collar",
      pdDesc: "This is the Girl clothes",
      pdPrice: 399,
      pdCategory: "fashion",
      pdSubCategory: "Girl's clothes",
      pdImg: "../../assets/images/girlClothes/1.webp"
    },
    {
      pdId: 131,
      pdName: "Girl Regular Fit Printed Spread Collar",
      pdDesc: "This is the Girl clothes",
      pdPrice: 299,
      pdCategory: "fashion",
      pdSubCategory: "Girl's clothes",
      pdImg: "../../assets/images/girlClothes/2.webp"
    },




    {
      pdId: 132,
      pdName: "Speakers Regular Fit Printed Spread Collar",
      pdDesc: "This is the Speakers",
      pdPrice: 799,
      pdCategory: "electronics",
      pdSubCategory: "Speakers",
      pdImg: "../../assets/images/speakers/1.webp"
    },
    {
      pdId: 133,
      pdName: "Speakers Regular Fit Printed Spread Collar",
      pdDesc: "This is the Speakers",
      pdPrice: 999,
      pdCategory: "electronics",
      pdSubCategory: "Speakers",
      pdImg: "../../assets/images/speakers/2.webp"
    },




    {
      pdId: 134,
      pdName: "Charger Fit Printed Spread Collar",
      pdDesc: "This is the Speakers",
      pdPrice: 1499,
      pdCategory: "electronics",
      pdSubCategory: "Chargers",
      pdImg: "../../assets/images/chargers/1.webp"
    },
    {
      pdId: 135,
      pdName: "Charger Regular Fit Printed Spread Collar",
      pdDesc: "This is the Speakers",
      pdPrice: 1599,
      pdCategory: "electronics",
      pdSubCategory: "Chargers",
      pdImg: "../../assets/images/chargers/2.webp"
    },




    {
      pdId: 136,
      pdName: "Air pod's",
      pdDesc: "This is the Speakers",
      pdPrice: 19999,
      pdCategory: "electronics",
      pdSubCategory: "Air pods",
      pdImg: "../../assets/images/airPods/1.webp"
    },
    {
      pdId: 137,
      pdName: "AirPods Regular Fit Printed Spread Collar",
      pdDesc: "This is the Speakers",
      pdPrice: 21000,
      pdCategory: "electronics",
      pdSubCategory: "Air pods",
      pdImg: "../../assets/images/airPods/2.webp"
    },





    {
      pdId: 138,
      pdName: "Chair Regular Fit Printed Spread Collar",
      pdDesc: "This is the chair",
      pdPrice: 21000,
      pdCategory: "home&furniture",
      pdSubCategory: "Chair",
      pdImg: "../../assets/images/chairs/1.webp"
    },
    {
      pdId: 139,
      pdName: "Chair Regular Fit Printed Spread Collar",
      pdDesc: "This is the Chair",
      pdPrice: 21000,
      pdCategory: "home&furniture",
      pdSubCategory: "Chair",
      pdImg: "../../assets/images/chairs/2.webp"
    },




    {
      pdId: 140,
      pdName: "Table Regular Fit Printed Spread Collar",
      pdDesc: "This is the Table",
      pdPrice: 1000,
      pdCategory: "home&furniture",
      pdSubCategory: "Table",
      pdImg: "../../assets/images/tables/1.webp"
    },
    {
      pdId: 141,
      pdName: "Table Regular Fit Printed Spread Collar",
      pdDesc: "This is the Table",
      pdPrice: 21000,
      pdCategory: "home&furniture",
      pdSubCategory: "Table",
      pdImg: "../../assets/images/tables/2.webp"
    },




    {
      pdId: 142,
      pdName: "Sofa Regular Fit Printed Spread Collar",
      pdDesc: "This is the Sofa",
      pdPrice: 21000,
      pdCategory: "home&furniture",
      pdSubCategory: "Sofa",
      pdImg: "../../assets/images/sofas/1.webp"
    },
    {
      pdId: 143,
      pdName: "Sofa Regular Fit Printed Spread Collar",
      pdDesc: "This is the Sofa",
      pdPrice: 21000,
      pdCategory: "home&furniture",
      pdSubCategory: "Sofa",
      pdImg: "../../assets/images/sofas/2.webp"
    },





    {
      pdId: 144,
      pdName: "Mi Regular Fit Printed Spread Collar",
      pdDesc: "This is the Mi",
      pdPrice: 21000,
      pdCategory: "tv&appliances",
      pdSubCategory: "Mi",
      pdImg: "../../assets/images/mis/1.webp"
    },
    {
      pdId: 145,
      pdName: "Mi Regular Fit Printed Spread Collar",
      pdDesc: "This is the Mi",
      pdPrice: 21000,
      pdCategory: "tv&appliances",
      pdSubCategory: "Mi",
      pdImg: "../../assets/images/mis/2.webp"
    },






    {
      pdId: 146,
      pdName: "Realme Regular Fit Printed Spread Collar",
      pdDesc: "This is the Realme",
      pdPrice: 21000,
      pdCategory: "tv&appliances",
      pdSubCategory: "Realme",
      pdImg: "../../assets/images/realmes/1.webp"
    },
    {
      pdId: 147,
      pdName: "Realme Regular Fit Printed Spread Collar",
      pdDesc: "This is the Realme",
      pdPrice: 21000,
      pdCategory: "tv&appliances",
      pdSubCategory: "Realme",
      pdImg: "../../assets/images/realmes/2.webp"
    },





    {
      pdId: 148,
      pdName: "Samsung Regular Fit Printed Spread Collar",
      pdDesc: "This is the Samsung",
      pdPrice: 21000,
      pdCategory: "tv&appliances",
      pdSubCategory: "Samsung",
      pdImg: "../../assets/images/samsungs/1.webp"
    },
    {
      pdId: 149,
      pdName: "Samsung Regular Fit Printed Spread Collar",
      pdDesc: "This is the Samsung",
      pdPrice: 21000,
      pdCategory: "tv&appliances",
      pdSubCategory: "Samsung",
      pdImg: "../../assets/images/samsungs/2.webp"
    },




    {
      pdId: 150,
      pdName: "Bike Regular Fit Printed Spread Collar",
      pdDesc: "This is the Bike",
      pdPrice: 1000,
      pdCategory: "toys",
      pdSubCategory: "Bike's",
      pdImg: "../../assets/images/bikes/2.webp"
    },
    {
      pdId: 151,
      pdName: "Bike Regular Fit Printed Spread Collar",
      pdDesc: "This is the Bike",
      pdPrice: 21000,
      pdCategory: "toys",
      pdSubCategory: "Bike's",
      pdImg: "../../assets/images/bikes/2.webp"
    },




    {
      pdId: 152,
      pdName: "Car Regular Fit Printed Spread Collar",
      pdDesc: "This is the Car",
      pdPrice: 200,
      pdCategory: "toys",
      pdSubCategory: "Car's",
      pdImg: "../../assets/images/cars/1.webp"
    },
    {
      pdId: 153,
      pdName: "Car Regular Fit Printed Spread Collar",
      pdDesc: "This is the Car",
      pdPrice: 100,
      pdCategory: "toys",
      pdSubCategory: "Car's",
      pdImg: "../../assets/images/cars/2.webp"
    },





    {
      pdId: 154,
      pdName: "Avenger Regular Fit Printed Spread Collar",
      pdDesc: "This is the Avenger",
      pdPrice: 1800,
      pdCategory: "toys",
      pdSubCategory: "Avengers",
      pdImg: "../../assets/images/avengers/1.webp"
    },
    {
      pdId: 155,
      pdName: "Avenger Regular Fit Printed Spread Collar",
      pdDesc: "This is the Avenger",
      pdPrice: 1200,
      pdCategory: "toys",
      pdSubCategory: "Avengers",
      pdImg: "../../assets/images/avengers/2.webp"
    },



    {
      pdId: 156,
      pdName: "Boy's cream Regular Fit Printed Spread Collar",
      pdDesc: "This is the Boy's cream",
      pdPrice: 1200,
      pdCategory: "beauty",
      pdSubCategory: "Boy's cream",
      pdImg: "../../assets/images/boysCream/1.webp"
    },
    {
      pdId: 157,
      pdName: "Boy's cream Regular Fit Printed Spread Collar",
      pdDesc: "This is the Boy's cream",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Boy's cream",
      pdImg: "../../assets/images/boysCream/2.webp"
    },



    {
      pdId: 158,
      pdName: "Girl's cream Regular Fit Printed Spread Collar",
      pdDesc: "This is the Girl's cream",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Girl's cream",
      pdImg: "../../assets/images/girlsCream/1.webp"
    },
    {
      pdId: 159,
      pdName: "Girl's cream Regular Fit Printed Spread Collar",
      pdDesc: "This is the Girl's cream",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Girl's cream",
      pdImg: "../../assets/images/girlsCream/2.webp"
    },





    {
      pdId: 160,
      pdName: "Boy's feshwash Regular Fit Printed Spread Collar",
      pdDesc: "This is the Boy's feshwash",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Boy's feshwash",
      pdImg: "../../assets/images/boysFeshwash/1.webp"
    },
    {
      pdId: 161,
      pdName: "Boy's feshwash Regular Fit Printed Spread Collar",
      pdDesc: "This is the Boy's feshwash",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Boy's feshwash",
      pdImg: "../../assets/images/boysFeshwash/2.webp"
    },




    {
      pdId: 162,
      pdName: "Girl's feshwash Regular Fit Printed Spread Collar",
      pdDesc: "This is the Girl's feshwash",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Girl's feshwash",
      pdImg: "../../assets/images/girlsFeshwash/1.webp"
    },
    {
      pdId: 163,
      pdName: "Girl's feshwash Regular Fit Printed Spread Collar",
      pdDesc: "This is the Girl's feshwash",
      pdPrice: 200,
      pdCategory: "beauty",
      pdSubCategory: "Girl's feshwash",
      pdImg: "../../assets/images/boysFeshwash/2.webp"
    },
  ]
}
