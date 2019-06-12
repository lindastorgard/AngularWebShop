import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../Services/mock-data.service';
import { DataService } from '../Services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { Footer2Component } from '../footer2/footer2.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, Footer2Component ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService }],
        imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Function deleteOrder() should delete one order', () => {
    expect(component.orders.length).toBe(2);
    component.deleteOrder(2);
    expect(component.orders.length).toBe(1);
  });

});
