import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitECDRComponent } from './produit-ecdr.component';

describe('ProduitECDRComponent', () => {
  let component: ProduitECDRComponent;
  let fixture: ComponentFixture<ProduitECDRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitECDRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitECDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
