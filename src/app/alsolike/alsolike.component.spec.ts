import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlsolikeComponent } from './alsolike.component';

describe('AlsolikeComponent', () => {
  let component: AlsolikeComponent;
  let fixture: ComponentFixture<AlsolikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsolikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsolikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
