import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ProfileSection {
  heading: string;
  content: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full max-w-4xl mx-auto p-4 md:p-8' }
})
export class About {
  // Keeping the data structured to avoid complex HTML logic
  readonly profile = signal<ProfileSection[]>([
    {
      heading: 'SYNOPSIS',
      content: ['Samy Barsoum — 27yo Software Developer & Freelancer based in Egypt.']
    },
    {
      heading: 'CORE_STACK',
      content: [
        'MERN (MongoDB, Express, React, Node.js)',
        'Angular & NestJS',
        'Docker & WSL Environments'
      ]
    },
    {
      heading: 'BACKGROUND',
      content: [
        'Recent Information Technology Institute (ITI) graduate specializing in Web Development and AI.',
        'Passionate about high-performance, no-bloat environments (Windows LTSC advocate).'
      ]
    },
    {
      heading: 'ROUTINE_&_PHILOSOPHY',
      content: [
        'Fitness: Push-Pull-Legs (PPL) protocol & vegetarian nutrition.',
        'Media: Consuming franchises in strict original release order.',
        'Mindset: Grounded in Stoicism with influences from Kierkegaard and Machiavelli.'
      ]
    }
  ]);
}