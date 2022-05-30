import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-tarefa',
    templateUrl: './tarefa.component.html',
    styleUrls: ['./tarefa.component.css']
  })

export class TarefaComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() numeroTarefa: string = "";
  @Input() contato: string = "";
  @Input() assunto: string = "";
  @Input() descricao: string = "";
  @Input() tipoTarefa: string = "";
  @Input() statusTarefa: string = "";
  @Input() prioridadeTarefa: string = "";
  value: string = "12";
  longText: string = "12";

  ngOnInit(): void {
    this.titulo = this.titulo;
    this.assunto = this.assunto;
    this.descricao = this.descricao;
    this.tipoTarefa = this.tipoTarefa;
    this.statusTarefa = this.statusTarefa;
    this.prioridadeTarefa = this.prioridadeTarefa;    
  }

}