import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { NosotrosComponent } from './nosotros.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import { NgxSpinnerModule } from "ngx-spinner";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../app.module";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    LayoutModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {path: '', component: NosotrosComponent}
    ]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [NosotrosComponent],
  exports: [NosotrosComponent]
})
export class NosotrosModule {
}
