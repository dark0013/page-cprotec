import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciopadreComponent } from './serviciopadre.component';

describe('ServiciopadreComponent', () => {
  let component: ServiciopadreComponent;
  let fixture: ComponentFixture<ServiciopadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciopadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciopadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
