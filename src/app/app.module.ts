import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordMaskPipe } from './password-mask.pipe';
import { UserComponentComponent } from './about/user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    AdminComponent,
    AdminUserComponent,
    AdminSettingsComponent,
    PasswordMaskPipe,
    UserComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
