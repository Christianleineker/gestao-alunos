import { Component, OnInit } from '@angular/core';
import { AlunoService, Aluno } from '../cadastro/aluno.service';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.html',
    styleUrl: 'home.css',
    imports: [CommonModule, DecimalPipe, RouterModule, FormsModule]
})

export class HomeComponent implements OnInit{
    alunos: Aluno[] = [];
    filtro: string = '';
    cadastroRouter = '/cadastro';

    constructor(private alunoService: AlunoService){}

    ngOnInit(): void {
        this.alunoService.alunos$.subscribe(alunos => {
            this.alunos = alunos;
        })
    }

    excluirAluno(index: number){
        if(confirm('Tem certeza que deseja excluir esse aluno?')){
            this.alunoService.removerAluno(index);
        }
    }

    get alunosFiltrados(): Aluno[]{
        if(!this.filtro){
            return this.alunos;
        }
        return this.alunos.filter(aluno =>
            aluno.nome.toLowerCase().includes(this.filtro.toLowerCase())
        )
    }
}