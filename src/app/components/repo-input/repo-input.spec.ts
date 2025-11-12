import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoInputComponent } from './repo-input.component';

describe('RepoInput', () => {
  let component: RepoInputComponent;
  let fixture: ComponentFixture<RepoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
