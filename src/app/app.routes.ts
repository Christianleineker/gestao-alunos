import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home/home';
import { Cadastro } from './Pages/cadastro/cadastro';
import { Error } from './Pages/Error/error'

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: Cadastro},
    {path: 'cadastro/:id', component: Cadastro},
    {path: '**', component: Error}
];