import { WebreqService } from './webreq.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebReqService:WebreqService) { }

  createNewList(title:string){
    return this.WebReqService.post('lists',{title});
  }

  getLists(){
    return this.WebReqService.get('lists');
  }

  getTasks(listId:string){
    return this.WebReqService.get(`lists/${listId}/tasks`);
  }

}
