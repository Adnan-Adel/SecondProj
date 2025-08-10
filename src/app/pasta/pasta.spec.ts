import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pasta } from './pasta';

describe('Pasta', () => {
  let component: Pasta;
  let fixture: ComponentFixture<Pasta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pasta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pasta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
