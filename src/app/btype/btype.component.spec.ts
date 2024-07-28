import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtypeComponent } from './btype.component';

describe('BtypeComponent', () => {
  let component: BtypeComponent;
  let fixture: ComponentFixture<BtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
