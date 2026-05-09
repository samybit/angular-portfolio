import { Component, signal } from '@angular/core';

interface CertificateData {
  title: string;
  subtitle: string;
  authority: string;
  url: string;
  stack: string;
  developer: string;
  date: string;
  certifiedBy: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly certificate = signal<CertificateData>({
    title: 'DEVELOPER PORTFOLIO',
    subtitle: 'Official Engineering Record',
    authority: 'Information Technology Institute (ITI)',
    url: 'github.com/SamyBarsoum',
    stack: 'Angular, MERN, TypeScript',
    developer: 'Samy Barsoum',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    certifiedBy: 'System Authenticated'
  });
}
