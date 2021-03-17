import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidformComponent } from './covidform.component';

describe('CovidformComponent', () => {
  let component: CovidformComponent;
  let fixture: ComponentFixture<CovidformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
