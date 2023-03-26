import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPropertiesComponent } from './html-properties.component';

describe('HtmlPropertiesComponent', () => {
  let component: HtmlPropertiesComponent;
  let fixture: ComponentFixture<HtmlPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
