import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ProductosComponent } from './productos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    LayoutModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {path: '', component: ProductosComponent}
    ]),
  ],
  declarations: [ProductosComponent],
  exports: [ProductosComponent]
})
export class ProductosModule {
}
