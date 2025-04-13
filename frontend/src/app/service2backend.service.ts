import { Injectable, ResourceRef, resource } from '@angular/core';
import { Fruit } from './fruit.model';

@Injectable({
  providedIn: 'root'
})
export class Service2backendService {

  public getFruits: ResourceRef<Fruit[]>;

  constructor() {
    this.getFruits = resource({
        loader: () => {
          return fetch('/api').then(
            async (response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              try{
                const result = await response.json()
                return result;
              }catch (error) {
                console.error("Error parsing JSON:", error);
                return undefined;
              }
            }
          );
        }
    })
   }
}
