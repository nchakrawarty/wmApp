import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NoauthGuard } from './noauth.guard';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { EnterWastePage } from './enter-waste/enter-waste.page';
import { ItemsInsidePage } from './items-inside/items-inside.page';

/*const routes: Routes = [
  { path: '', redirectTo: 'enter-waste', pathMatch: 'full' }, // Set login page as default route
  { path: 'enter-waste', component: EnterWastePage  },
 // { path: 'home', component: HomePage, canActivate: [AuthGuard] },
 { path: '', redirectTo: 'home', pathMatch: 'full' },
*/

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Set login page as default route
  /* {
     path: '',
     redirectTo: 'folder/Inbox',
     pathMatch: 'full'
   },*/
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoauthGuard]
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trips',
    loadChildren: () => import('./trips/trips.module').then( m => m.TripsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'qrscan',
    loadChildren: () => import('./qrscan/qrscan.module').then( m => m.QRScanPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'qrentry',
    loadChildren: () => import('./qrentry/qrentry.module').then( m => m.QREntryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'enter-waste',
    loadChildren: () => import('./enter-waste/enter-waste.module').then( m => m.EnterWastePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-payment',
    loadChildren: () => import('./add-payment/add-payment.module').then( m => m.AddPaymentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-image',
    loadChildren: () => import('./add-image/add-image.module').then( m => m.AddImagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recycle-add',
    loadChildren: () => import('./recycle-add/recycle-add.module').then( m => m.RecycleAddPageModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoauthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trip-start',
    loadChildren: () => import('./trip-start/trip-start.module').then( m => m.TripStartPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trip-end',
    loadChildren: () => import('./trip-end/trip-end.module').then( m => m.TripEndPageModule),
    canActivate: [AuthGuard]
  },
  //{
      //path: 'nonrecycle-add',
      //loadChildren: () => import('./nonrecycle-add/nonrecycle-add.module').then( m => m.NonrecycleAddPageModule)
    //},
    {
      path: 'items-inside',
      loadChildren: () => import('./items-inside/items-inside.module').then( m => m.ItemsInsidePageModule)
    }
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
