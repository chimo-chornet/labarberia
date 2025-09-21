import { Component } from '@angular/core';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { AcordeonComponent } from '../acordeon/acordeon.component';

@Component({
    selector: 'app-home',
    imports: [CabeceraComponent, AcordeonComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {



}
