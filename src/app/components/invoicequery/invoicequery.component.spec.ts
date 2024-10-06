import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicequeryComponent } from './invoicequery.component';

describe('InvoicequeryComponent', () => {
  let component: InvoicequeryComponent;
  let fixture: ComponentFixture<InvoicequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicequeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
