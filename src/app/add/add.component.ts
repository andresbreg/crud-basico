import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Tarea } from '../model/Tarea';

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
      response => {this.router.navigate(["list"])}
    );
  }
}
