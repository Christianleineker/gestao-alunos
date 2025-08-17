import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Aluno {
  id: number;
  nome: string;
  periodo: string;
  turma: string;
  nota1: number;
  nota2: number;
  media: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [];
  private alunosSubject = new BehaviorSubject<Aluno[]>([]);

  alunos$ = this.alunosSubject.asObservable();

  constructor(){
    this.carregarDoLocalStorage();
  }

  private salvarNoLocalStorage(){
    localStorage.setItem('alunos', JSON.stringify(this.alunos));
  }

  private carregarDoLocalStorage(){
    const dados = localStorage.getItem('alunos');
    if(dados){
      this.alunos = JSON.parse(dados);
      this.alunosSubject.next(this.alunos);
    }
  }

  adicionarAluno(novoAluno: Omit<Aluno, 'id' | 'media'>) {
    const id = this.alunos.length > 0
    ? this.alunos[this.alunos.length - 1].id + 1
    : 1;
    const media = (novoAluno.nota1 + novoAluno.nota2) / 2;

    const aluno: Aluno = { id, media, ...novoAluno };
    this.alunos.push(aluno);
    this.atualizar();
  }

  obterAlunos() {
    return [...this.alunos];
  }

  removerAluno(index: number){
    this.alunos.splice(index, 1);
    this.atualizar();
  }

  obterAlunoPorId(id: number): Aluno | undefined{
    return this.alunos.find(aluno => aluno.id === id);
  }

  editarAluno(id: number, dados: Omit<Aluno, 'id' | 'media'>) {
  const index = this.alunos.findIndex(a => a.id === id);
  if (index !== -1) {
    this.alunos[index] = {
      id,
      media: (dados.nota1 + dados.nota2) / 2,
      ...dados
    };
    this.atualizar();
  }
}

  private atualizar(){
    this.salvarNoLocalStorage();
    this.alunosSubject.next([...this.alunos]);
  }
}