import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridProductsComponent } from '../../../src/app/admin/products/grid-products/grid-products.component';
import { ProductService } from '../../../src/app/core/services/product.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('GridProductsComponent', () => {
  let component: GridProductsComponent;
  let fixture: ComponentFixture<GridProductsComponent>;
  let compiled: HTMLElement;
  let service: ProductService;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridProductsComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProductsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('Debe cargar los datos de los productos', () => {
    const dummy = [
      {
        id: '001',
        name: 'Andres Alcivar',
        description: 'Descripcion 001',
        logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/venezuela/tarjetas/visa-prepaga-400x225.jpeg',
        date_release: new Date('2025-02-21'),
        date_revision: new Date('2026-02-20'),
      },
    ];
    const request = httpMock.expectOne('http://localhost:3002/bp/products');
    expect(request.request.method).toBe('GET');
    request.flush(dummy);
  });
});
