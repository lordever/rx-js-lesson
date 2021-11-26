import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {filter, map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject();
  loadProducts$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  products$: ReplaySubject<Product[]> = new ReplaySubject<Product[]>(3);

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProducts$
      .pipe(takeUntil(this.destroy$), filter(load => load))
      .subscribe(() => {
        this.productService.getProductsWithIds([this.randomIntFromInterval(1, 10)])
          .pipe(
            takeUntil(this.destroy$),
            map((products) => products.map((product: Product) => {
              product.price = `$ ${product.price}`;
              return product;
            }))
          )
          .subscribe((products) => {
            this.products$.next(products);
          });
      });
  }

  loadProduct(): void {
    this.loadProducts$.next(true);
  }

  private randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
