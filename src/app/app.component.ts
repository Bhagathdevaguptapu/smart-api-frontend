import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RepoInputComponent } from './components/repo-input/repo-input.component';
import { ResultsComponent } from './components/results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RepoInputComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultData: any = null;

  onDocsGenerated(data: any) {
    this.resultData = data;
  }
}
