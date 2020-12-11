import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto = {
    nombreProducto: '',
    descripcion: '',
    precio: '',
    img: '',
    categoria: '',
  }

  idEmpresa:any;
  productos:any;
  categorias:any;


  constructor(private serviceImagen: ImagenService, private serviceEmpresa: EmpresasService, private serviceProducto:ProductoService, private serviceCategoria: CategoriaService) { }

  ngOnInit(): void {
    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));

    this.obtenerProdcutos();
    this.obtenerCategorias();
  }

  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log(imagen);
    const formData = new FormData();
    formData.append('upload_preset', 'bancoImg');
    formData.append('file', imagen);

    this.serviceImagen.subirImagen(formData).subscribe((data: any) => {
      this.producto.img = data.url;
      console.log(data);

    });
  }

  validarCampos() {

    if (this.producto.nombreProducto == '') return false;
    if (this.producto.descripcion == '') return false;
    if (this.producto.precio == '') return false;
    if (this.producto.img== '') return false;
    if (this.producto.categoria == '') return false;




    return true;
  }


  agregarPrudcto() {
    this.serviceProducto.agregarProducto(this.idEmpresa, this.producto).subscribe((data:any)=> {
      console.log(data);
      this.obtenerProdcutos();
    });
  }

  obtenerProdcutos(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data:any)=> {
      this.productos = data.productos;
      console.log(data.productos);
    });
  }

  obtenerCategorias(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data:any)=> {
      this.categorias = data.categorias;
      console.log(data);
    });
  }

  eliminarProducto(idProducto){
    this.serviceProducto.eliminarProducto(this.idEmpresa, idProducto).subscribe((data:any)=> {
     this.obtenerProdcutos();
      console.log(data);
    });
  }

}
