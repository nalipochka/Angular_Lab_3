import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSizeComponent } from './record-size.component';

describe('RecordSizeComponent', () => {
  let component: RecordSizeComponent;
  let fixture: ComponentFixture<RecordSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
