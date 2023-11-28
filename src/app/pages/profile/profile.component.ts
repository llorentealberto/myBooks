import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public usuario: User;

  constructor(){
    this.usuario = new User(1,'alberto' ,'llorente' , 'llorentealberto@hotmail.com' , '123456','123456');

  }

  mostrarNombre(){
    console.log(this.usuario.name);
  }

}
