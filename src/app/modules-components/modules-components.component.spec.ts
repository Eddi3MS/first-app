import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesComponentsComponent } from './modules-components.component';

describe('ModulesComponentsComponent', () => {
  let component: ModulesComponentsComponent;
  let fixture: ComponentFixture<ModulesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
