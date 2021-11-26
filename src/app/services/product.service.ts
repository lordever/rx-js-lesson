import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/products');
  }

  public getProductsWithIds(ids: number[]): Observable<Product[]> {
    // return this.getProducts()
    //   .pipe(
    //     map((products) => products.filter((product) => ids.includes(product.id)))
    //   );

    return new Observable<Product[]>((s) => {
      this.getProducts()
        .pipe(
          map((products) => products.filter((product) => ids.includes(product.id)))
        )
        .subscribe((products) => {
          s.next(products);
          s.complete();
        });
    });
  }
}
