import { Component } from '@angular/core'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title = "Titre de la page";
  public nombre = 12.55;
  public image = "http://placehold.it/400x200";

  public employe = {
    firstName: "Lior",
    lastName: "Chamla",
    role: "Formateur"
  };

  reagirAuLicenciement(event) {
    console.log(event);
    alert("Wow, " + event + " a été viré !");
  }

  // public onChange(e) {
  //   const value = e.target.value;
  //   this.title = value;
  // }

  // public direBonjour() {
  //   window.alert("Hello world!");
  // }

  // public changerTitre() {
  //   this.title = "J'ai changé le titre poto !";
  // }

  // public getPhrase() {
  //   return "Bonjour à tous";
  // }
}