import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Footer2Component } from '../footer2/footer2.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ActivatedRouteStub } from '../testing/activateRouteStubs';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './movie-filter.pipe';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, Footer2Component, MovieFilterPipe],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: DataService, useClass: MockDataService }],
      imports: [RouterTestingModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Function getData() should retrieve all movies', () => {
    expect(component.movies.length).toEqual(4);
  });

  it('should create', () => {
    expect(MovieFilterPipe).toBeTruthy();
  });

  it('searchTerm "Movie 1" should return Movie 1', () => {
    let service = new MockDataService();
    component.movies = service.movies;
    const pipe = new MovieFilterPipe();
    let searchTerm = 'Movie 1';
    const result = pipe.transform(component.movies, searchTerm);
    expect(result).toEqual([{ id: 1, name: 'Movie 1', price: 69, description: 'One star movie', imageUrl: '#', productCategory: [{ categoryId: 1, category: 'Action' }, { categoryId: 2, category: 'Thriller' }] }]);
  });

  it('empty searchTerm should return all movies', () => {
    let service = new MockDataService();
    component.movies = service.movies;
    const pipe = new MovieFilterPipe();
    let searchTerm = '';
    const result = pipe.transform(component.movies, searchTerm);
    expect(result.length).toEqual(4);
  });

});
