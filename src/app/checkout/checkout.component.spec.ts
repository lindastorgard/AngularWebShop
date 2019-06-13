import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutComponent } from './checkout.component';
import { Footer2Component } from '../footer2/footer2.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../Services/mock-data.service';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComponent, Footer2Component],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: DataService, useClass: MockDataService }],
      imports: [RouterTestingModule,
        FormsModule,
        ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should deleteCartItem()', () => {
    let service = new MockDataService();
    component.myCart = service.movies;
    expect(component.myCart.length).toBe(4);
    component.deleteCartItem(1);
    expect(component.myCart.length).toBe(3);
  });

  it('should toggle class isCartActive', () => {
    let service = new MockDataService();
    component.myCart = service.movies;
    expect(component.myCart.length).toBe(4);
    expect(component.isCartActive).toBe(false);
    component.deleteCartItem(1);
    component.deleteCartItem(2);
    component.deleteCartItem(3);
    component.deleteCartItem(4);
    expect(component.myCart.length).toBe(0);
    component.toggleVisibility();
    expect(component.isCartActive).toBe(true);
  });

});
