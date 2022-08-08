import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  // selectedElement: Tarea = {id:'', tarea:'', finalizado:false};

  constructor(private serviceService: ServiceService,
              private router:Router
              ) {}

  ngOnInit(): void {
  }
}
