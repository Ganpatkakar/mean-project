import { Component } from '@angular/core';
import  {TaskServices} from './services/task.services';

@Component({
    moduleId : module.id,
    selector: 'my-app',
    template: `<home></home>`,
    providers : [TaskServices]
})
export class AppComponent { name = 'Angular'; }