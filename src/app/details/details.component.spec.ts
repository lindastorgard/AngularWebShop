import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../category/testing/activateRouteStubs';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AlsolikeComponent } from '../alsolike/alsolike.component';
import { Footer2Component } from '../footer2/footer2.component';
import { MessageService } from '../Services/message.service';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, AlsolikeComponent, Footer2Component],

      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: DataService, MessageService, useClass: MockDataService }],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Parameter retrieved from url should be 2', () => {
    expect(component.movie.id).toBe(2);
  });

  it('Function getMovie() should retrieve movie with id 4', () => {
    expect(component.movie.id).toEqual(2);
    component.getMovie(4);
    expect(component.movie.id).toEqual(4);
  });
});
