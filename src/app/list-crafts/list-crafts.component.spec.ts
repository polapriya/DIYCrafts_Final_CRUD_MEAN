import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCraftsComponent } from './list-crafts.component';

describe('ListCraftsComponent', () => {
  let component: ListCraftsComponent;
  let fixture: ComponentFixture<ListCraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
