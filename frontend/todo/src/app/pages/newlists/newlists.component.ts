import { Router, Routes } from '@angular/router';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newlists',
  templateUrl: './newlists.component.html',
  styleUrls: ['./newlists.component.scss']
})
export class NewlistsComponent implements OnInit {

  constructor(private taskService:TaskService, private router:Router) { }

  ngOnInit(): void {
  }

  createNewList(title:string){
    this.taskService.createNewList(title).subscribe((list: any) => {
      console.log(list);
      this.router.navigate(['/lists', list._id ]);
    });
  }

}
