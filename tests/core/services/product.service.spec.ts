import { TestBed } from '@angular/core/testing';
import { Product } from '../../../src/app/core/models/product.model';
import { ProductService } from '../../../src/app/core/services/product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('Debe retornar un arreglo de productos', (done) => {
    const mockProducts = {
      data: [
        {
          id: '001',
          name: 'Andres Alcivar',
          description: 'Descripcion 001',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/venezuela/tarjetas/visa-prepaga-400x225.jpeg',
          date_release: new Date('2025-02-21'),
          date_revision: new Date('2026-02-20'),
        },
      ],
    };
    //console.log('mockup', mockProducts);
    service.getAll().subscribe((products) => {
      //  console.log(products);
      expect(products.data).toEqual(products.data);
      done();
    });
  });

  test('Debe retornar un producto', (done) => {
    service.getProductId('001').subscribe((product) => {
      //  console.log(product);
      expect(product.name).toBe('Andres Alcivar');

      done();
    });
  });
});
