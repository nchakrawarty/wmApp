import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { ItemsInsidePage } from './items-inside/items-inside.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Set login page as default route
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
 //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{
     //path: '',
     //redirectTo: 'folder/Inbox',
    // pathMatch: 'full'
  //},
  //{
    //path: 'folder/:id',
    //loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
   // canActivate: [AuthGuard]
  //},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
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
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'items-inside',
    loadChildren: () => import('./items-inside/items-inside.module').then( m => m.ItemsInsidePageModule),
    canActivate: [AuthGuard]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

