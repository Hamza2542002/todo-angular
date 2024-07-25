import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLoayoutComponent } from '../main-loayout/main-loayout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLoayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first-project';
}
