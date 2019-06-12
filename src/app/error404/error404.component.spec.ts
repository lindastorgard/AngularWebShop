import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Error404Component } from './error404.component';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../Services/mock-data.service';
import { DataService } from '../Services/data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Error404Component],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: DataService, useClass: MockDataService }],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
