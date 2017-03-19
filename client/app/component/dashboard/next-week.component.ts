import {Component, Class} from '@angular/core';
import  {TaskServices} from '../../services/task.services';

@Component({
  selector : 'next-week',
  moduleId : module.id,
  templateUrl : './next-week.component.html',
  providers: [TaskServices]
})

export class NextWeekComponent {

  allProducts;
  selectedProdcutData = "Pepsi";
  selectedProduct;

  constructor(private allProductList : TaskServices){

    this.allProducts = this.allProductList.getAllProducts();
    var allproducts = this.allProducts;
    var allProductLength = allproducts.length;
    for(var i = 0; i < allProductLength; i++) {
      if (this.allProducts[i].product_name === this.selectedProdcutData) {
        this.selectedProduct = this.allProducts[i];
      }
    }

  }

  checkDistTotal(NextWeek){

  }

  compute(NextWeek){

  }
  updateNextWeekData(){

  }
}
