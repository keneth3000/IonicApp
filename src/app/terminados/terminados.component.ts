import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import{ Lista } from '../../models/lista.model';

@Component({
    selector: 'terminado-page',
    templateUrl: 'terminados.componet.html'
})

export class TerminadosPage{
    constructor(public deseoService:DeseosService){

    }
    listaSeleccionada(lista:Lista){
        console.log(lista);
    }
}