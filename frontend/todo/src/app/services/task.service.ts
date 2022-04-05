import { WebreqService } from './webreq.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebReqService:WebreqService) { }

  createList(title:string){
    return this.WebReqService.post('lists',{title});
  }
}
