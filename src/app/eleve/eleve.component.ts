import { Component } from "@angular/core";

@Component({
  selector: "app-eleve",
  template: `
    <h1>Directives structurelles</h1>
    <p *ngIf="showDescription === true">
      Description à la con que je veux cacher ou montrer
    </p>
    <button (click)="toggleDescription()">
      Afficher/Cacher la description
    </button>

    <h2>Notes de l'élève</h2>
    <ul>
      <li
        *ngFor="let note of notes"
        [ngStyle]="{ fontWeight: note < 10 ? 'bold' : 'normal' }"
        [class.rouge]="note < 10"
        [class.vert]="note >= 10"
        [ngClass]="{ rouge: note < 10, vert: note >= 10 }"
      >
        {{ note }}
      </li>
    </ul>
    <h2>Liste des élèves</h2>
    <ul>
      <li *ngFor="let eleve of eleves">
        {{ eleve.firstName }} <strong>{{ eleve.lastName }}</strong>
      </li>
    </ul>
  `,
  styles: [
    `
      .rouge {
        color: red;
      }

      .vert {
        color: green;
      }
    `
  ]
})
export class EleveComponent {
  showDescription = false;
  notes = [14.5, 12, 18, 9, 15];
  eleves = [
    { firstName: "Billy", lastName: "Lekid" },
    { firstName: "Bob", lastName: "Dalton" },
    { firstName: "Joe", lastName: "Dassin" }
  ];

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}
