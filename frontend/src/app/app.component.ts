import { Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Fruit } from './fruit.model';
import { Service2backendService } from './service2backend.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  private readonly fruitsService = inject(Service2backendService);
  public fruits: Signal<Fruit[]>;

  constructor() {
    const resource = this.fruitsService.getFruits;
    this.fruits = computed(() => { return resource.value() || []; });
  }
}
