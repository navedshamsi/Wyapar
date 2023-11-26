import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseEntryPage } from './purchase-entry.page';

describe('PurchaseEntryPage', () => {
  let component: PurchaseEntryPage;
  let fixture: ComponentFixture<PurchaseEntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PurchaseEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
