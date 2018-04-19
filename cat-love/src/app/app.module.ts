import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MeiositeComponent } from './meiosite/meiosite.component';
import { FotosComponent } from './fotos/fotos.component';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    MeiositeComponent,
    FotosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
