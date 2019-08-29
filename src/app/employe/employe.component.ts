import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-employe",
  template: `
    <hr />
    <div>
      <h2>{{ informations.firstName }} {{ informations.lastName }}</h2>
      <small>{{ informations.role }}</small>
      <br />
      <p>
        <ng-content></ng-content>
      </p>
      <button (click)="onClickVirer()">
        Virer {{ informations.firstName }}
      </button>
    </div>
    <hr />
  `,
  styles: []
})
export class EmployeComponent {
  @Input()
  informations;

  @Output()
  licenciement = new EventEmitter();

  onClickVirer() {
    this.licenciement.emit(this.informations.firstName);
    console.log("Nous avons viré " + this.informations.firstName);
  }
  // @Input()
  // firstName = "Magali";

  // @Input()
  // lastName = "Pernin";

  // @Input()
  // role = "Directrice";
}

