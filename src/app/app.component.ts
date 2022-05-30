import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo: string = "";
  numeroTarefa: string = "";
  assunto: string = "";
  contato: string = "";
  tipoTarefa: string = "";
  statusTarefa: string = "";
  prioridade: string = "";
  descricao: string = "";

  cadastroTarefa: boolean = true;

  tiposTarefas: string[] = [
    "Alterar Professor",
    "Alterar Aluno",
    "Alterar Pergunta",
    "Cadastro Professor",
    "Cadastro Aluno",
    "Cadastro Pergunta",
    "Excluir Professor",
    "Excluir Aluno",
    "Excluir Pergunta",
    "Login",
    "Ranckin",
    "Resposta Pergunta"
  ];

  statusTarefas: string[] = [
    "Aberto",
    "Andamento",
    "Desenvolvimento",
    "Finalizado",
    "Teste"
  ];

  prioridadesTarefas: string[] = [
    "Tranquila",
    "De Boa",
    "Urgente",
    "Mais ou Menos"
  ];

  titulosTarefas: string[] = [
    "Feature",
    "Bug"
  ]

  tarefas = [
    {
      titulo: "Bug",
      numeroTarefa: "1000",
      contato: "Thiago",
      assunto: "Tela de Cliente",
      descricao: "Tela de professor não filtra o nome do professor.",
      tipoTarefa: "Cadastro Professor",
      statusTarefa: "Teste",
      prioridadeTarefa: "De Boa"
    },
    {
      titulo: "Feature",
      numeroTarefa: "1001",
      contato: "Guilherme",
      assunto: "Tela de Aluno",
      descricao: "Tela de Aluno não filtra o nome do Aluno.",
      tipoTarefa: "Cadastro Aluno",
      statusTarefa: "Andamento",
      prioridadeTarefa: "Tranquila"
    }
  ];

  isLinear = false;
  primeiroFormGroup!: FormGroup;
  segundoFormGroup!: FormGroup;
  terceiroFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.primeiroFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.segundoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.terceiroFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  habilitaCadastroTarefa() {
    this.cadastroTarefa = !this.cadastroTarefa;
  }

  recebeValoresFiltro() {
    this.titulo = this.titulo;
  }

  selectTitulo(event: Event) {
    var tituloT = (event.target as HTMLSelectElement).value;
    this.titulo = tituloT;
  }
 
}
