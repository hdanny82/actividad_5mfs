import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrayNoticias: Noticia[] = [];
  newNoticia: Noticia = { titulo: '', urlImagen: '', cuerpoNoticia: '', fechaPublicacion: '' };

  constructor() {
    this.arrayNoticias = [
      {
        titulo: 'Que es la Seguridad Operacional ',
        urlImagen: 'https://www.gob.mx/cms/uploads/article/main_image/126190/baner-Seg-Op.jpg',
        cuerpoNoticia: 'La seguridad operacional se define como el compromiso organizacional de una empresa o institución, reflejado en políticas y objetivos claros, con el fin de garantizar un entorno seguro y minimizar los riesgos en todas sus operaciones.',
        fechaPublicacion: '2024-07-28'
      },
      {
        titulo: 'Los Fundamentos de la Seguridad Operacional ',
        urlImagen: 'https://pbs.twimg.com/media/DkgN8OHUcAA3aum?format=jpg&name=900x900',
        cuerpoNoticia: 'Los pilares de la Seguridad Operacional, establece el compromiso de una organización con la seguridad, definiendo políticas claras y objetivos específicos que guíen todas las actividades.',
        fechaPublicacion: '2024-07-30'
      }
    ]
  }

  cargarNoticias(): string {

    let lista = "";

    this.arrayNoticias.forEach(noticia => {
      //lista += `<li>${noticia.titulo}- ${noticia.urlImagen} - ${noticia.cuerpoNoticia} - ${noticia.fechaPublicacion}</li>`
      lista += `<article class="noticia">
                  <img src="${noticia.urlImagen}" alt="${noticia.titulo}">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.cuerpoNoticia}</p>
                    <p>${noticia.fechaPublicacion}</p>
                </article>`
    })

    return lista;

  }

  guardarNoticia(): void {
    if (this.newNoticia.titulo === "" || this.newNoticia.urlImagen === "" || this.newNoticia.cuerpoNoticia === "" || this.newNoticia.fechaPublicacion === "") {
      alert('No se permiten campos vacios')
    } else {
      this.arrayNoticias.push(this.newNoticia);
      this.newNoticia = { titulo: '', urlImagen: '', cuerpoNoticia: '', fechaPublicacion: '' };

    }



  }
}
