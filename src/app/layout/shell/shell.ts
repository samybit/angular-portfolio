import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col min-h-screen' }
})
export class Shell {}