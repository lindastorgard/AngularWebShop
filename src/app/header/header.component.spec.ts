import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { DataService } from '../Services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../Services/mock-data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate totalOrderAmount()', () => {
    let service = new MockDataService();
    component.myCart = service.movies;
    component.totalAmount = 0;
    expect(component.totalAmount).toBe(0);
    component.totalOrderAmount();
    expect(component.totalAmount).toBeGreaterThan(0);
  });

});
