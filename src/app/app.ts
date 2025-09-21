import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[],
})
export class App {
  protected readonly title = signal('labarberia');
}
