import { Routes } from '@angular/router';
import { AreaUsuarioComponent } from './components/area-usuario/area-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { Login } from './components/login/login';
import { CalUsuarioComponent } from './components/cal-usuario/cal-usuario.component';
import { ModpassComponent } from './components/modpass/modpass.component';
import { CitasComponent } from './components/citas/citas.component';
import { CitaUsuarioComponent } from './components/cita-usuario/cita-usuario.component';
import { CalComponent } from './components/cal/cal.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AreaAdminComponent } from './components/area-admin/area-admin.component';
import { CitaDia } from './cita-dia/cita-dia';
import { Pruebas } from './components/pruebas/pruebas';
import { CitaAdmin } from './components/cita-admin/cita-admin';
import { CitasAdminComponent } from './components/citas-admin/citas-admin';
import { DialogOverviewExample } from './components/emergente/emergente';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'usuarios',component:AreaUsuarioComponent},
    {path: 'home',component:HomeComponent},
    {path: 'login',component:Login},
    {path: 'calusuario',component:CalUsuarioComponent},
    {path: 'modpass',component:ModpassComponent},
    {path: 'citas',component:CitasComponent},
    {path: 'citaUsuario',component:CitaUsuarioComponent},
    {path: 'citaAdmin',component:CitaAdmin},
    {path: 'citasAdmin',component:CitasAdminComponent},


{path: 'emergente',component:DialogOverviewExample},
    {path: 'cal',component:CalComponent},
    {path: 'usuario',component:UsuarioComponent},
    {path: 'admin',component:AreaAdminComponent},
    {path: 'citas/dia',component:CitaDia},
    {path: 'pruebas',component:Pruebas}



];
