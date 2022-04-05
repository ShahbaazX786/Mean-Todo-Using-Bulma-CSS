import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  createNewList(title:String){
    this.taskService.createList('Testing').subscribe((res:any)=>{
      console.log(res);

    });
  }

}
