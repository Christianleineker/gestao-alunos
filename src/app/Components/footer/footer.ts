import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
    appName = "Gerenciamento de Alunos";
    dateCurrenty = new Date().getFullYear();
}
