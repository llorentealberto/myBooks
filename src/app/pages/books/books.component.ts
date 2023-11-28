import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  id_book: number = 0;
  id_user: number = 0;
  title: string = "";
  type: string = "";
  author: string = "";
  price: number = 0;
  photo: string = "";

  public libros:Book[];
  constructor(){

    this.libros=[new Book(3 ,14 ,'el señior de los anillos ' , 'ficcion' , 'no se ' , 45 ,'gandalf'),
                new Book(23,12,'Harry Potter' , 'mmagia' , 'jk Rowling' , 10 , 'ron')
    ]
   
  }
   anadirlibro(){
    let nuevoLibro=new Book(this.id_book, this.id_user , this.title , this.type , this.author , this.price , this.photo);

    this.libros.push(nuevoLibro);

    alert('se añadio un nuevo libro ');


   }
}
