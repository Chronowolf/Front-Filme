import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCatalogoComponent } from './app-catalogo.component';

describe('AppCatalogoComponent', () => {
  let component: AppCatalogoComponent;
  let fixture: ComponentFixture<AppCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
