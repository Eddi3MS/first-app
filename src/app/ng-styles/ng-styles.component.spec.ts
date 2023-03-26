import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStylesComponent } from './ng-styles.component';

describe('NgStylesComponent', () => {
  let component: NgStylesComponent;
  let fixture: ComponentFixture<NgStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
