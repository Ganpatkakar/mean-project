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
var HomeComponent = (function () {
    function HomeComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    HomeComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.title);
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask).subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
    };
    HomeComponent.prototype.deletTask = function (taskId, index) {
        var _this = this;
        this.taskService.removeTask(taskId).subscribe(function (task) {
            _this.tasks.splice(index, 1);
        });
    };
    HomeComponent.prototype.updateTask = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateTask(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        moduleId: module.id,
        templateUrl: "home.component.html"
    }),
    __metadata("design:paramtypes", [task_services_1.TaskServices])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map