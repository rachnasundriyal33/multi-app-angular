import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtypeComponent } from './atype.component';

describe('AtypeComponent', () => {
  let component: AtypeComponent;
  let fixture: ComponentFixture<AtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
