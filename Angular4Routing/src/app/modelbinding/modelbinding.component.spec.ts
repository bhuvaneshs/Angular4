import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelbindingComponent } from './modelbinding.component';

describe('ModelbindingComponent', () => {
  let component: ModelbindingComponent;
  let fixture: ComponentFixture<ModelbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
