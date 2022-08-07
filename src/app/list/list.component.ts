import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataBase:any = {};

  lista:any=[];

  constructor(private data:ServiceService,
              private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.serviceService.getData().subscribe (
      response => {this.lista = response});
  }
}
