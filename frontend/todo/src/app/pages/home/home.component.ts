import { List } from './../../models/list.model';
import { Task } from './../../models/task.model';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists: List[]=[];
  tasks: Task[]=[];
  constructor(private taskService:TaskService, private route:ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      this.taskService.getTasks(params['listId']).subscribe((tasks:any)=>{
        this.tasks=tasks;
      })
    }
  )

    this.taskService.getLists().subscribe((lists:any)=>{
      //console.log(lists);
      this.lists = lists;
    })

  }

  ontaskclick(task:Task){
    this.taskService.complete(task).subscribe(()=>{
      console.log("Completed Successfully");
      task.completed=!task.completed;
    })
  }
  /*createNewList(){
    this.taskService.createNewList('Testing').subscribe((response: any)=>{

    });
  }*/
}
