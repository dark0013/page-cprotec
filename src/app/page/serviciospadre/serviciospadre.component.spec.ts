import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciospadreComponent } from './serviciospadre.component';

describe('ServiciospadreComponent', () => {
  let component: ServiciospadreComponent;
  let fixture: ComponentFixture<ServiciospadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciospadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciospadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
