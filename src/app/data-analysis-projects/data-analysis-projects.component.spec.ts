import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalysisProjectsComponent } from './data-analysis-projects.component';

describe('DataAnalysisProjectsComponent', () => {
  let component: DataAnalysisProjectsComponent;
  let fixture: ComponentFixture<DataAnalysisProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnalysisProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalysisProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
