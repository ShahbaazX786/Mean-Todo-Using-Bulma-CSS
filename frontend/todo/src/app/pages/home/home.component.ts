import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists: any[]=[];
  tasks: any[]=[];
  constructor(private taskService:TaskService, private route:ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      this.taskService.getTasks(params.listId).subscribe((tasks:any)=>{
        this.tasks=tasks;
      })
    }
  )

    this.taskService.getLists().subscribe((lists:any)=>{
      //console.log(lists);
      this.lists = lists;
    })
  }

  /*createNewList(){
    this.taskService.createNewList('Testing').subscribe((response: any)=>{

    });
  }*/
}
