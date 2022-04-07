import { Injectable } from '@angular/core';
import { WebreqService } from './webreq.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService:WebreqService) { }

  getLists(){
    return this.webReqService.get('lists');
  }

  createNewList(title:string){
    return this.webReqService.post('lists',{title});
  }

  getTasks(listId:string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createNewTask(title:string , listId:string){
    return this.webReqService.post(`lists/${listId}/tasks`,{title});
  }
}
