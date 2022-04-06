import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newlists',
  templateUrl: './newlists.component.html',
  styleUrls: ['./newlists.component.scss']
})
export class NewlistsComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  createNewList(title:string){
    this.taskService.createNewList(title).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
