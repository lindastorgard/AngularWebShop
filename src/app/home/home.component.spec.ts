import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FooterComponent ],

      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService }],
        imports: [RouterTestingModule]
    })
    .overrideComponent(HomeComponent, {set: {providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 1 random movie', () => {
    expect(component.random.length).toBe(1);
  });

});
