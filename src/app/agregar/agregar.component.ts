import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'
@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarPage {
    lista: Lista;
    titulo: string;
    nombreItem: string = '';

    constructor(public deseoService: DeseosService, private navParams: ActivatedRoute) {

        const titulo = this.navParams.snapshot.paramMap.get('titulo');

        const newLista = this.navParams.params.subscribe(params => {
            this.getLista(params['lista']);
            this.lista = new Lista(titulo);
            this.deseoService.agregarLista(this.lista);
        });

        if (this.navParams.snapshot.paramMap.get('lista')) {
            const obt: any = this.navParams.snapshot.paramMap.get('lista');
            this.lista = obt;
        } else {
            this.lista = new Lista(titulo);
            this.deseoService.agregarLista(this.lista);
        }
    }

    getLista(lista: Lista) {
        this.deseoService.getListas(lista)
            .subscribe(lista => {
                console.log(lista)
                this.lista = new Lista(this.titulo);
                this.deseoService.agregarLista(this.lista);
            });
    }


    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }

        const newItem = new ListaItem(this.nombreItem);
        this.lista.items.push(newItem);

        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {

        item.completado = !item.completado;
    }

    borrar(idx: number) {
        this.lista.items.splice(idx, 1);
    }

}


