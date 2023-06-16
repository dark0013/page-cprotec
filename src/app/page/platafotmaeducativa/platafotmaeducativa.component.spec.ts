import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatafotmaeducativaComponent } from './platafotmaeducativa.component';

describe('PlatafotmaeducativaComponent', () => {
  let component: PlatafotmaeducativaComponent;
  let fixture: ComponentFixture<PlatafotmaeducativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatafotmaeducativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatafotmaeducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
