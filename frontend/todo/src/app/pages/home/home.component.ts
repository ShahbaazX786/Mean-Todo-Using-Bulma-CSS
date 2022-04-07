import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/*export class HomeComponent implements OnInit {
}*/
export class HomeComponent implements OnInit {

  constructor(private taskService:TaskService, private route:ActivatedRoute) { }

  ngOnInit(): void{
  }

  createNewList(){
    this.taskService.createNewList('Testing').subscribe((response: any)=>{

    });
  }
}
