import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PendientesPage } from './pendientes.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: PendientesPage }])
    ],
    declarations: [PendientesPage]
})

export class PendientesModule { }
