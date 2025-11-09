import { Component, OnInit } from '@angular/core';
import { Calendariousuario } from "../calendario-usuario/calendario-usuario";


@Component({
    selector: 'app-citas',
    imports: [Calendariousuario],
    templateUrl: './citas.component.html',
    styleUrl: './citas.component.css'
})
export class CitasComponent {

}
