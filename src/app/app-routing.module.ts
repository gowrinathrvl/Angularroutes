import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AuthGuard } from './authguard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent, 
  loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard] ,
    children: [
      { path: 'users', component: AdminUserComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  },
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
