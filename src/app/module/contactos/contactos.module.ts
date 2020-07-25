import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ContactosComponent } from './contactos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../app.module";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    LayoutModule,
    NgxSpinnerModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: ContactosComponent}
    ]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [ContactosComponent],
  exports: [ContactosComponent]
})
export class ContactosModule {
}
