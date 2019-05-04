import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'points',
                loadChildren: './points/points.module#TwentyonepointsPointsModule'
            },
            {
                path: 'points',
                loadChildren: './points/points.module#TwentyonepointsPointsModule'
            },
            {
                path: 'points',
                loadChildren: './points/points.module#TwentyonepointsPointsModule'
            },
            {
                path: 'points',
                loadChildren: './points/points.module#TwentyonepointsPointsModule'
            },
            {
                path: 'weight',
                loadChildren: './weight/weight.module#TwentyonepointsWeightModule'
            },
            {
                path: 'blood-pressure',
                loadChildren: './blood-pressure/blood-pressure.module#TwentyonepointsBloodPressureModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyonepointsEntityModule {}
