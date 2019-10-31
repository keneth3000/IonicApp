import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pendientes',
        children: [
          {
            path: '', 
            loadChildren: () =>
              import('../pendientes/pendientes.module').then(m => m.PendientesModule)
          }
        ]
      },
      {
        path: 'terminados',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../terminados/terminados.module').then(m => m.TerminadoModule)
          }
        ]
      },
      {
        path: 'agregar',
        children: [
          {
            path: '',
            loadChildren: ()=>
              import('../agregar/agregar.module').then(m => m.AgregarModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pendientes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pendientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
