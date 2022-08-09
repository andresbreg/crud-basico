import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Tarea } from '../model/Tarea';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  id: String = '';
  selectedElement: Tarea = {id:this.id, tarea:'', finalizado:false};

  constructor(private serviceService: ServiceService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.serviceService.getElement(this.id).subscribe (
      response => {this.selectedElement = response}
    );
  }

  updateElement() {
    this.serviceService.editElement(this.id, this.selectedElement).subscribe (
      response => {this.router.navigate(['list'])}
    );
  }
}
