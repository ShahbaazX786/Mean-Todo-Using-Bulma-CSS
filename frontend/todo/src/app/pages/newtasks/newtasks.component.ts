import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtasks',
  templateUrl: './newtasks.component.html',
  styleUrls: ['./newtasks.component.scss']
})
export class NewtasksComponent implements OnInit {

  constructor(private taskService:TaskService, private route:ActivatedRoute, private router:Router) { }

  listId!:string;

  ngOnInit(): void {
     this.route.params.subscribe(
      (params:Params)=>{
        this.listId=params['listId'];
      }
    )
  }

  createNewTask(title: string){
    this.taskService.createNewTask(title,this.listId).subscribe((task:any)=>{
      console.log(task);
      this.router.navigate(['../'],{relativeTo:this.route});
    });
  }
}
