import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ListaProductosComponent} from "./listaProductos/listaProductos.component";
import {BallJointComponent} from "./ballJoint/ballJoint.component";
import {BaseAmortiguadorComponent} from "./baseAmortiguador/baseAmortiguador.component";
import {ControlArmComponent} from "./controlArm/controlArm.component";
import {RackEndComponent} from "./rackEnd/rackEnd.component";
import {ShockAdsorberComponent} from "./shockAdsorber/shockAdsorber.component";
import {StabilizerLinkComponent} from "./stabilizerLink/stabilizerLink.component";
import {TieRodEndComponent} from "./TieRodEnd/TieRodEnd.component";
import {ProductosComponent} from "./productos.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: ProductosComponent,
        children: [
          {path: 'Lista_Productos', component: ListaProductosComponent },
          {path: 'Ball_Join', component: BallJointComponent },
          {path: 'Base_Amortiguador', component: BaseAmortiguadorComponent },
          {path: 'Control_Arm', component: ControlArmComponent },
          {path: 'Rack_End', component: RackEndComponent },
          {path: 'Shock_Absorber', component: ShockAdsorberComponent },
          {path: 'Stabilizer_Link', component: StabilizerLinkComponent },
          {path: 'Tie_Rod_End', component: TieRodEndComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductosRoutes {
}
