"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_services_1 = require("../../services/task.services");
var NextWeekComponent = (function () {
    function NextWeekComponent(allProductList) {
        this.allProductList = allProductList;
        this.selectedProdcutData = "Pepsi";
        this.allProducts = this.allProductList.getAllProducts();
        var allproducts = this.allProducts;
        var allProductLength = allproducts.length;
        for (var i = 0; i < allProductLength; i++) {
            if (this.allProducts[i].product_name === this.selectedProdcutData) {
                this.selectedProduct = this.allProducts[i];
            }
        }
    }
    NextWeekComponent.prototype.checkDistTotal = function (NextWeek) {
    };
    NextWeekComponent.prototype.compute = function (NextWeek) {
    };
    NextWeekComponent.prototype.updateNextWeekData = function () {
    };
    return NextWeekComponent;
}());
NextWeekComponent = __decorate([
    core_1.Component({
        selector: 'next-week',
        moduleId: module.id,
        templateUrl: './next-week.component.html',
        providers: [task_services_1.TaskServices]
    }),
    __metadata("design:paramtypes", [task_services_1.TaskServices])
], NextWeekComponent);
exports.NextWeekComponent = NextWeekComponent;
//# sourceMappingURL=next-week.component.js.map