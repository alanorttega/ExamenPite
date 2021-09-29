import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JugueteService } from 'src/app/services/juguete.service';
import { Juguete } from '../../interfaces/Juguete';

@Component({
  selector: 'app-addor-edit',
  templateUrl: './addor-edit.component.html',
  styleUrls: ['./addor-edit.component.css']
})
export class AddorEditComponent implements OnInit {

  Accion = 'Agregar';
  AgregarJuguete: FormGroup;
  ID = 0;
  Juguete: Juguete | undefined;
  

  constructor(private fb: FormBuilder, 
              private _JugueteService: JugueteService,
              private router: Router,
              private aroute: ActivatedRoute) {

    this.AgregarJuguete = this.fb.group({
      Nombre: ['',Validators.required],
      Descripcion: [''],
      Restriccion: [''],
      Fabricante: ['',Validators.required],
      Precio: ['',Validators.required],
    });

    this.ID = +this.aroute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar(){
    if(this.ID != 0){
      this.Accion = 'Editar';
      this._JugueteService.getJuguete(this.ID).subscribe(data => {
        console.log(data);
        this.Juguete = data;
        this.AgregarJuguete.patchValue({
          Nombre: data.nombre,
          Descripcion: data.descripcion,
          Restriccion: data.restriccion,
          Fabricante: data.fabricante,
          Precio: data.precio,
        });
      }, error => {
        console.log(error);
      });
    }
  }

  AddOrEditJuguete(){

    if(this.Juguete == undefined){
      
      //Agregamos Juguete
      console.log(this.AgregarJuguete);

      const Juguete: Juguete = {
        id: 0,
        nombre: this.AgregarJuguete.get("Nombre")?.value,
        descripcion: this.AgregarJuguete.get("Descripcion")?.value,
        restriccion: this.AgregarJuguete.get("Restriccion")?.value,
        fabricante: this.AgregarJuguete.get("Fabricante")?.value,
        precio: this.AgregarJuguete.get("Precio")?.value,
      }

      this._JugueteService.guardarJuguete(Juguete).subscribe(data =>{
        this.router.navigate(['/']);
      }, error => {
        console.log(error);      
      });

      console.log(Juguete);
    }else{

      //Editamos Juguete
      const Juguete: Juguete = {
        id: this.Juguete.id,
        nombre: this.AgregarJuguete.get("Nombre")?.value,
        descripcion: this.AgregarJuguete.get("Descripcion")?.value,
        restriccion: this.AgregarJuguete.get("Restriccion")?.value,
        fabricante: this.AgregarJuguete.get("Fabricante")?.value,
        precio: this.AgregarJuguete.get("Precio")?.value,
      }

      this._JugueteService.ActualizarJuguete(this.ID, Juguete).subscribe(data =>{
        this.router.navigate(['/']);
      },error =>{
        console.log(error);
      });
    }

    
  }

}
