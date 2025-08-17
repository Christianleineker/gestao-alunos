import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  imgLogo = 'assets/icon-enroll.png';

  links = [
    {nome: "Home", rota: '/home'},
    {nome: "Cadastro", rota: '/cadastro'}
  ]
}
