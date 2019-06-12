import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThankyouComponent } from './thankyou.component';
import { HomeComponent } from '../home/home.component';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';

describe('ThankyouComponent', () => {
  let component: ThankyouComponent;
  let fixture: ComponentFixture<ThankyouComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouComponent, HomeComponent, FooterComponent ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
