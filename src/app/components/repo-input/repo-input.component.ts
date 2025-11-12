import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-repo-input',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './repo-input.component.html',
  styleUrls: ['./repo-input.component.css']
})
export class RepoInputComponent {
  @Output() docsGenerated = new EventEmitter<any>();
  gitUrl: string = '';
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  generateDocs() {
    if (!this.gitUrl.trim()) {
      this.error = 'Please enter a valid GitHub URL.';
      return;
    }
    this.error = null;
    this.loading = true;

    this.apiService.generateDocs(this.gitUrl).subscribe({
      next: (res) => {
        this.docsGenerated.emit(res);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to generate documentation.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
