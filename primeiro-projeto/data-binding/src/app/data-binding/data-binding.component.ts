import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"],
})
export class DataBindingComponent implements OnInit {
  url: string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImagem = "https://picsum.photos/400/200";

  valorAtual: string = "";
  valorSalvo = "";

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";

  nome: string = "abc";

  valorInicial = 15;

  ngOnInit(): void {
    console.log("Componente iniciado!");
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado!");
  }

  onKeyUp(event: any) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor.value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
