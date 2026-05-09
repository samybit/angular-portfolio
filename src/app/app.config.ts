import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // The stable, modern way to run Angular without Zone.js
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration()
  ]
};