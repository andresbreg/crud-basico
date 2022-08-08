import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  lista:any=[];

  constructor(private serviceService: ServiceService,
              private router:Router) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.serviceService.getData().subscribe (
      response => {this.lista = response});
  }

  edit() {
    this.router.navigate(["edit"]);
  }

  remove(id:String) {
    this.serviceService.deleteElement(id).subscribe (
      response => {this.ngOnInit()}
    );
  }
}
