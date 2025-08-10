import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corn } from './corn';

describe('Corn', () => {
  let component: Corn;
  let fixture: ComponentFixture<Corn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
