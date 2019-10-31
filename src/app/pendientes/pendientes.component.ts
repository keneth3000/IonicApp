import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import {  AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.componet.html'
})

export class PendientesPage{
    constructor(public deseoService: DeseosService, 
                private navCtrl: Router, 
                private alertCtrl:AlertController,){
        
    }

    listaSeleccionada(lista:Lista){
        this.navCtrl.navigate(['/agregar/:titulo', {titulo:lista.titulo, lista:lista}]);
    }

    async agregarLista(){
        
        const alerta = await this.alertCtrl.create({
            header: 'Nueva lista',
            message: ' Nombre de la nueva lista que desea',
            inputs: [
                {
                  name: 'titulo',
                  type: 'text',
                  placeholder: 'Nombre de la lista'
                }],
                buttons:[{
                    text:'Cancelar',
                    role: 'cancel',
                    cssClass: 'dark',       
                },{
                    text: 'Agregar',
                    handler: data => {
                        if(data.titulo.length === 0){
                            return;
                        }
                        this.navCtrl.navigate(['/agregar/:titulo', {titulo:data.titulo}]);
                        //console.log(titulo);
                    }
                }]
            });
        await alerta.present();
    }
} 