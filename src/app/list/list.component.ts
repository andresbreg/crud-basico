import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  lista:any=[];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.serviceService.getData().subscribe (
      response => {this.lista = response});
  }

  remove(id:String) {
    this.serviceService.deleteElement(id).subscribe (
      response => {this.ngOnInit()}
    );
  }
}
