import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import{FormsModule} from '@angular/forms';
import { TerminadosPage } from './terminados.component';

@NgModule({
    imports: [
        IonicModule, 
        CommonModule, 
        FormsModule, 
        RouterModule.forChild([{path: '', component:TerminadosPage}])
    ],
    declarations: [TerminadosPage]
})

export class TerminadoModule {}
