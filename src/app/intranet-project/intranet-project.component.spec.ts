import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetProjectComponent } from './intranet-project.component';

describe('IntranetProjectComponent', () => {
  let component: IntranetProjectComponent;
  let fixture: ComponentFixture<IntranetProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntranetProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
