import { CursosService } from "./cursos.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CursosComponent, CursoDetalheComponent],
  exports: [CursosComponent],
  providers: [CursosService],
})
export class CursosModule {}
