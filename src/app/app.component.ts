import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { articuloI } from 'src/Models/interfaces/articulo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'red5G';
  btnVenderDisabled: boolean = true;
  urlImagenes = './assets/img/';
  articuloMostrar: articuloI[] = [];
  total:number=0;
  colorEf:string='';
  fondoEf:string='';
  colorMv:string='';
  fondoMv:string='';
  venderModalDisabled:boolean=true;
  venderCarritoDisabled:boolean=true;
  bodyMetodoPago:boolean=false;
  bodyVender:boolean=false;
  registarDisabled:boolean=true;
  txtNombre:string='';
  txtCelular:string='';
  celularCliente:string='';
  nombreCliente:string='';
  celularClienteCarrito:string='';
  bodyRegistroEx:boolean=false;

  ngOnInit() {
    this.articuloMostrar = this.articulos;
  }

  restarProducto(idArticulo: number) {
    this.articuloMostrar.forEach(el=>{
      if(el.id==idArticulo){
        if(el.cantidad!=0){
          el.cantidad=el.cantidad-1;
        }
      }
    });
    this.total=0;
    this.articuloMostrar.forEach(el=>{
      this.total=this.total+(el.precio*el.cantidad);
    });
    if(this.total!=0){
      this.venderCarritoDisabled=false;
    }else{
      this.venderCarritoDisabled=true;
    }
  }

  sumarProducto(idArticulo: number) {
    this.articuloMostrar.forEach(el=>{
      if(el.id==idArticulo){
          el.cantidad=el.cantidad+1;
      }
    });
    this.total=0;
    this.articuloMostrar.forEach(el=>{
      this.total=this.total+(el.precio*el.cantidad);
    });
    if(this.total!=0){
      this.venderCarritoDisabled=false;
    }else{
      this.venderCarritoDisabled=true;
    }
  }

  quitarItemCanasta(idArticulo:number){
    this.articuloMostrar.forEach(el=>{
      if(el.id==idArticulo){
          el.cantidad=0;
      }
    });
    this.total=0;
    this.articuloMostrar.forEach(el=>{
      this.total=this.total+(el.precio*el.cantidad);
    });
    if(this.total!=0){
      this.venderCarritoDisabled=false;
    }else{
      this.venderCarritoDisabled=true;
    }
  }

  cambiarColorEf(){
    this.colorEf='#FFFFFF';
    this.fondoEf='#FF5D54';
    this.colorMv='#FF5D54';
    this.fondoMv='#FFFFFF';
    this.venderModalDisabled=false;
  }

  cambiarColorMv(){
    this.colorEf='#FF5D54';
    this.fondoEf='#FFFFFF';
    this.colorMv='#FFFFFF';
    this.fondoMv='#FF5D54';
    this.venderModalDisabled=false;
  }

  reiniciarColores(){
    this.colorMv='#FF5D54';
    this.fondoMv='#FFFFFF';
    this.colorEf='#FF5D54';
    this.fondoEf='#FFFFFF';
    this.venderModalDisabled=true;
  }

  VenderCarrito(){
    this.bodyMetodoPago=true;
    this.bodyVender=false;
    this.bodyRegistroEx=false;
    this.txtCelular=this.celularClienteCarrito;
  }

  vender(){
    this.bodyMetodoPago=false;
    this.bodyRegistroEx=false;
    this.bodyVender=true;
  }

  registrar(){
    this.bodyMetodoPago=false;
    this.bodyVender=false;
    this.bodyRegistroEx=true;
  }

  cambioInput(){
    if(this.txtNombre!='' && this.txtCelular!=''){
      this.registarDisabled=false;
    }else{
      this.registarDisabled=true;
    }
  }

  finalizar(){
    this.articuloMostrar.forEach(el=>{
      el.cantidad=0
    });
    this.total=0
    this.bodyMetodoPago=false;
    this.bodyVender=false;
    this.nombreCliente='';
    this.celularCliente='';
    this.celularClienteCarrito='';
    this.txtCelular='';
    this.txtNombre='';
    this.bodyRegistroEx=false;
    this.venderCarritoDisabled=true;
    this.venderModalDisabled=true;
    this.reiniciarColores();
  }

  articulos: articuloI[] = [
    {
      id: 1,
      descripcion: 'Arroz Roa 1000g',
      precio: 3000,
      imagen: this.urlImagenes + 'Imagen_2.png',
      cantidad: 0,
    },
    {
      id: 2,
      descripcion: 'Coca-cola 250ml',
      precio: 2500,
      imagen: this.urlImagenes + 'Imagen 3.png',
      cantidad: 0,
    },
    {
      id: 3,
      descripcion: 'Atún VanCamp 180g',
      precio: 4000,
      imagen: this.urlImagenes + 'Imagen 4.png',
      cantidad: 0,
    },
    {
      id: 4,
      descripcion: '  Maíz Tostado la Especial 40g',
      precio: 1500,
      imagen: this.urlImagenes + 'Imagen 5.png',
      cantidad: 0,
    },
  ];
}

