import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ActivatedRouteStub } from './testing/activateRouteStubs';
import { ActivatedRoute } from '@angular/router';


describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryComponent ],

      // Vid test aktivera denna!
      // providers: [{provide: DataService, useClass: MockDataService}],

      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
