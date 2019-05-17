import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ActivatedRouteStub } from './testing/activateRouteStubs';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { toBase64String } from '@angular/compiler/src/output/source_map';


describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryComponent ],

      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}],
        imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Parameter retrieved from url should be 2', () => {
    for (let i=0; i<component.catMov.length; i++){
      expect(component.catMov[i].productCategory).toContain({ categoryId: 2, category: 'Thriller' });
    }
  });

  
  it('should retrieve category with id 1', () => {
    expect(component.category.id).toBe(2)
    component.getCategory(1);
    expect(component.category.id).toBe(1);
  });

});
