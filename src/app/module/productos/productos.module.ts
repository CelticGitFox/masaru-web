import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ProductosComponent } from './productos.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../common/loader/loader.module';
import { NgxSpinnerModule } from "ngx-spinner";
import {ListaProductosComponent} from "./listaProductos/listaProductos.component";
import {BallJointComponent} from "./ballJoint/ballJoint.component";
import {BaseAmortiguadorComponent} from "./baseAmortiguador/baseAmortiguador.component";
import {ControlArmComponent} from "./controlArm/controlArm.component";
import {RackEndComponent} from "./rackEnd/rackEnd.component";
import {ShockAdsorberComponent} from "./shockAdsorber/shockAdsorber.component";
import {StabilizerLinkComponent} from "./stabilizerLink/stabilizerLink.component";
import {TieRodEndComponent} from "./TieRodEnd/TieRodEnd.component";
import {ProductosRoutes} from "./productos.routes";

@NgModule({
  imports: [
    ProductosRoutes,
    CommonModule,
    LoaderModule,
    LayoutModule,
    NgxSpinnerModule,
  ],
  declarations: [
    ProductosComponent,
    ListaProductosComponent,
    BallJointComponent,
    BaseAmortiguadorComponent,
    ControlArmComponent,
    RackEndComponent,
    ShockAdsorberComponent,
    StabilizerLinkComponent,
    TieRodEndComponent
  ],
  exports: [ProductosComponent]
})
export class ProductosModule {
}
