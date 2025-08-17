import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service'
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  id?: number;
  nome: string = '';
  periodo: string = '';
  turma: string = '';
  nota1: number = 0;
  nota2: number = 0;


  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

    ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      const aluno = this.alunoService.obterAlunoPorId(this.id);
      if (aluno) {
        this.nome = aluno.nome;
        this.periodo = aluno.periodo;
        this.turma = aluno.turma;
        this.nota1 = aluno.nota1;
        this.nota2 = aluno.nota2;
      }
    }
  }

  cadastrarAluno(form: any) {
    if (form.valid) {
      if (this.id) {
        this.alunoService.editarAluno(this.id, {
          nome: this.nome,
          periodo: this.periodo,
          turma: this.turma,
          nota1: this.nota1,
          nota2: this.nota2
        });
      } else {
        this.alunoService.adicionarAluno({
          nome: this.nome,
          periodo: this.periodo,
          turma: this.turma,
          nota1: this.nota1,
          nota2: this.nota2
        });
      }
      this.router.navigate(['/home']);
    } else {
      alert('Preencha os Campos Obrigatórios');
      alert('Utilize o formato 0,0')
    }
  }
}