import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JugueteService } from 'src/app/services/juguete.service';
import { Juguete } from '../../interfaces/Juguete';

@Component({
  selector: 'app-lista-juguetes',
  templateUrl: './lista-juguetes.component.html',
  styleUrls: ['./lista-juguetes.component.css']
})
export class ListaJuguetesComponent implements OnInit {

  ListJuguetes: Juguete[] =[];
  ID = 0;

  constructor(private _JugueteService: JugueteService,
              private modal:NgbModal) { }

  ngOnInit(): void {
    this.getJuguetes();
  }

  getJuguetes(){
    this._JugueteService.getListaJuguetes().subscribe(data => {
      console.log(data);
      this.ListJuguetes = data;
    }, error => {
      console.log(error);
    });
  }

  EliminarJuguete(){
    console.log(this.ID);
    this._JugueteService.EliminarJuguete(this.ID).subscribe(data => {
      this.getJuguetes();
      this.modal.dismissAll();
    },error =>{
      console.log(error);
    });
  }

  AbrirModal(Modal: any, id: number){
    this.ID = id;
    this.modal.open(Modal, {size: 'sm'});
  }

  Cancelar(){
    this.modal.dismissAll();
  }
}
