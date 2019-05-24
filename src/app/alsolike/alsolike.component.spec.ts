import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlsolikeComponent } from './alsolike.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ActivatedRouteStub } from '../category/testing/activateRouteStubs';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryComponent } from '../category/category.component';
import { Footer2Component } from '../footer2/footer2.component';

describe('AlsolikeComponent', () => {
  let component: AlsolikeComponent;
  let fixture: ComponentFixture<AlsolikeComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsolikeComponent, CategoryComponent, Footer2Component ],

      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService }],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsolikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Parameter retrieved from url should be 2', () => {
    expect(component.movie.id).toBe(2);
  });

  it('Function getMovie() should retrieve movie with id 3', () => {
    expect(component.movie.id).toEqual(2);
    component.getMovie(3);
    expect(component.movie.id).toEqual(3);
  });

  // test för functionen
});
