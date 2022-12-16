import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirupatiComponent } from './tirupati.component';

describe('TirupatiComponent', () => {
  let component: TirupatiComponent;
  let fixture: ComponentFixture<TirupatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirupatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirupatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
