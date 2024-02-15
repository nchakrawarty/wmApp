import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'folder',
        loadChildren: () => import('../folder/folder.module').then(m => m.FolderPageModule)

      },
      {
        path: 'folder/:id',
        loadChildren: () => import('../folder/folder.module').then(m => m.FolderPageModule)

      },
      {
        path: 'customerlist',
        loadChildren: () => import('../coustomerlist/coustomerlist.module').then(m => m.CoustomerlistPageModule)
      },
      {
        path: 'vehicletracking',
        loadChildren: () => import('../vehicletracking/vehicletracking.module').then(m => m.VehicletrackingPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
