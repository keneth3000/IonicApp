import { Injectable } from '@angular/core';
import { Lista } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DeseosService {

    listas: Lista[] = [];

    constructor(private http:HttpClient) {
        this.cargarStorage();
    }

    getListas(lista:Lista){
        return this.http.get(`/agregar/${lista}`)
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));

    }

    cargarStorage() {

        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }

    }

}
