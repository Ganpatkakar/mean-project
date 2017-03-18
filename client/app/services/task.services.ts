///<reference path="../../node_modules/@angular/http/src/http.d.ts"/>
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskServices{
    constructor(private http:Http){
        console.log('TaskServices Injectable available');
    }
    getTasks(){
        return this.http.get('http://localhost:3001/api/tasks').map(res => res.json());
    }
    addTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:3001/api/task', JSON.stringify(task), {headers : headers})
            .map(res => res.json());
    }
    removeTask(removetaskId){
        return this.http.delete('http://localhost:3001/api/task/'+removetaskId)
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(task);
        return this.http.put('http://localhost:3001/api/task/'+task._id, JSON.stringify(task), {headers : headers})
            .map(res => res.json());
    }
}
