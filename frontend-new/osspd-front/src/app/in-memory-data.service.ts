import { InMemoryDbService } from 'angular-in-memory-web-api';//
import { Job } from './job';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {jobs};
  }

  // Overrides the genId method to ensure that a job always has an id.
  // If the jobs array is empty,
  // the method below returns the initial number (11).
  // if the jobs array is not empty, the method below returns the highest
  // job id + 1.
  genId(jobs: Job[]): number {
    return jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 11;
  }
}
