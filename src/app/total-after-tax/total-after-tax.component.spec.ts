import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAfterTaxComponent } from './total-after-tax.component';

describe('TotalAfterTaxComponent', () => {
  let component: TotalAfterTaxComponent;
  let fixture: ComponentFixture<TotalAfterTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAfterTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalAfterTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
