import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'; //Requisições Ajax
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './component/usuario/usuario/usuario.component';

export const appRouters : Routes = [
  
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
  {path : 'usuarioList', component : UsuarioComponent}
];

export const routes : ModuleWithProviders<{}> = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
