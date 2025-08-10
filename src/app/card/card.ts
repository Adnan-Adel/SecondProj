import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() componentName !: string;
  @Input() componentHeader !: string;
  @Input() componentPargraph !: string;
}
