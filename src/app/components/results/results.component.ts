import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() data: any; // Pass your data object
  activeExplanation: number | null = null;

  toggleExplanation(index: number): void {
    this.activeExplanation = this.activeExplanation === index ? null : index;
  }
}
