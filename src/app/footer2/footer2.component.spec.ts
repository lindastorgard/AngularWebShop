import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer2Component } from './footer2.component';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';

describe('Footer2Component', () => {
  let component: Footer2Component;
  let fixture: ComponentFixture<Footer2Component>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer2Component ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Id Parameter in categories should be 2', () => {
    for(let i=0; i<component.categories.length; i++){
      expect(component.categories).toContain( { id: 2, name: 'Comedy'});
    }
  });

});
