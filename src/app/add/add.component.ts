import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from '../model/Tarea';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newElement: Tarea = {id:'', tarea:'', finalizado:false};

  constructor(private ServiceService:ServiceService,
              private router:Router) {}

  ngOnInit(): void {
  }

  saveElement() {
    this.ServiceService.addElement(this.newElement).subscribe (
      response => {console.log(response)}
    );
    this.router.navigate(["list"]);
  }
}
