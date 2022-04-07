import { Injectable } from '@angular/core';
import { WebreqService } from './webreq.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebReqService:WebreqService) { }

  getLists(){
    return this.WebReqService.get('lists');
  }

  createNewList(title:string){
    return this.WebReqService.post('lists',{title});
  }

  getTasks(listId:string){
    return this.WebReqService.get(`lists/${listId}/tasks`);
  }

  createNewTask(title:string , listId:string){
    return this.WebReqService.post(`lists/${listId}/tasks`,{title});
  }
}
