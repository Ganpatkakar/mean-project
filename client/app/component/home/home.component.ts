import { Component } from '@angular/core';
import  {TaskServices} from '../../services/task.services';
import { Task } from '../../../home.model'

@Component({
    selector: 'home',
    moduleId : module.id,
    templateUrl: `home.component.html`
})
export class HomeComponent {
    tasks : Task[];
    title : string;

    constructor(private taskService:TaskServices){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }

    addTask(event){
        event.preventDefault()
        console.log(this.title);
        var newTask = {
            title : this.title,
            isDone : false
        }

        this.taskService.addTask(newTask).subscribe(task => {
            this.tasks.push(task);
            this.title = '';
        })
    }

    deletTask(taskId, index){
        this.taskService.removeTask(taskId).subscribe(task => {
            this.tasks.splice(index, 1);
        })
    }

    updateTask(task){
        var _task = {
            _id : task._id,
            title : task.title,
            isDone : !task.isDone
        }
        this.taskService.updateTask(_task).subscribe(data =>{
            task.isDone = !task.isDone;
        });
    }
}