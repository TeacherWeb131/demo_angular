import { Component, Input } from '@angular/core';

@Component({
  selector: "app-twitt",
  template: `
    <hr />
    <div>
      <h2>{{ author }}</h2>
      <p>
        <ng-content select=".content"></ng-content>
      </p>
      <small> Date : <ng-content select=".date"></ng-content></small>
      <br />
      <a>J'aime</a> | <a>Je retweet</a>
    </div>
    <hr />
  `,
  styles: []
})
export class TweetComponent {
  @Input()
  author = "Lior Chamla";

  @Input()
  content = "Présentation de ma video sur tel sujet";
}