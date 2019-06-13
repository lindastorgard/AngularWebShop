import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Id Parameter in categories should be 2', () => {
    for(let i=0; i<component.categories.length; i++){
      expect(component.categories).toContain( { id: 2, name: 'Comedy'});
    }
  });
});
