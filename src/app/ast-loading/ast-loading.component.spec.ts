import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstLoadingComponent } from './ast-loading.component';

describe('AstLoadingComponent', () => {
  let component: AstLoadingComponent;
  let fixture: ComponentFixture<AstLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
