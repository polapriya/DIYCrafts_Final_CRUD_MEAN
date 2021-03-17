import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiftsdataComponent } from './list-giftsdata.component';

describe('ListGiftsdataComponent', () => {
  let component: ListGiftsdataComponent;
  let fixture: ComponentFixture<ListGiftsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGiftsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGiftsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
