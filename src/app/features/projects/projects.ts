// src/app/features/projects/projects.ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Project {
  name: string;
  tech: string;
  description: string;
  year: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full max-w-4xl mx-auto p-4 md:p-8' }
})
export class Projects {
  readonly projectsList = signal<Project[]>([
    {
      name: 'cli-expense-tracker',
      tech: 'C, Dynamic Memory, Binary Files',
      description: 'Terminal-based expense tracker featuring persistent binary storage.',
      year: '2026'
    },
    {
      name: 'solar-system-mern',
      tech: 'MongoDB, Express, React, Node.js, Three.js',
      description: 'Interactive 3D solar system simulator with orbit toggles and speed controls.',
      year: '2026'
    },
    {
      name: 'job-lead-scraper',
      tech: 'Python, n8n, Gemini AI',
      description: 'Automated scraping pipeline summarizing job leads via AI.',
      year: '2026'
    }
  ]);
}