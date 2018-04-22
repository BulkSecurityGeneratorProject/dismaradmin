import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DismaradminSharedModule } from '../../shared';
import {
    ProductGroupService,
    ProductGroupPopupService,
    ProductGroupComponent,
    ProductGroupDetailComponent,
    ProductGroupDialogComponent,
    ProductGroupPopupComponent,
    ProductGroupDeletePopupComponent,
    ProductGroupDeleteDialogComponent,
    productGroupRoute,
    productGroupPopupRoute,
} from './';

const ENTITY_STATES = [
    ...productGroupRoute,
    ...productGroupPopupRoute,
];

@NgModule({
    imports: [
        DismaradminSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ProductGroupComponent,
        ProductGroupDetailComponent,
        ProductGroupDialogComponent,
        ProductGroupDeleteDialogComponent,
        ProductGroupPopupComponent,
        ProductGroupDeletePopupComponent,
    ],
    entryComponents: [
        ProductGroupComponent,
        ProductGroupDialogComponent,
        ProductGroupPopupComponent,
        ProductGroupDeleteDialogComponent,
        ProductGroupDeletePopupComponent,
    ],
    providers: [
        ProductGroupService,
        ProductGroupPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DismaradminProductGroupModule {}
