import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGiftsdataFormComponent } from './new-giftsdata-form.component';

describe('NewGiftsdataFormComponent', () => {
  let component: NewGiftsdataFormComponent;
  let fixture: ComponentFixture<NewGiftsdataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGiftsdataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGiftsdataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
