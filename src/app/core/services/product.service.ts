import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../enviroments/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ProductAddress: string = environment.apiRoot + '/bp/products';

  constructor(private _http: HttpClient) {}

  getAll(): Observable<ApiResponse<Product[]>> {
    return this._http.get<ApiResponse<Product[]>>(`${this.ProductAddress}`);
  }

  getProductId(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.ProductAddress}/${id}`);
  }

  getProductIdVerify(id: string): Observable<boolean> {
    return this._http.get<boolean>(`${this.ProductAddress}/verification/${id}`);
  }

  postProduct(Product: Product): Observable<ApiResponse<Product>> {
    return this._http.post<ApiResponse<Product>>(this.ProductAddress, Product);
  }

  putProduct(id: string, Product: Product): Observable<ApiResponse<Product>> {
    return this._http.put<ApiResponse<Product>>(
      `${this.ProductAddress}/${id}`,
      Product
    );
  }
  deleteProduct(id: string): Observable<ApiResponse<void>> {
    return this._http.delete<ApiResponse<void>>(`${this.ProductAddress}/${id}`);
  }
}
