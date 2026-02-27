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
    this.valorSalvo = event.target.value;
    console.log(event);
  }
}
