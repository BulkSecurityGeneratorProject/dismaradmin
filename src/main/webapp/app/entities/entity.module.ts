import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DismaradminProductGroupModule } from './product-group/product-group.module';
import { DismaradminCategoryModule } from './category/category.module';
import { DismaradminBrandModule } from './brand/brand.module';
import { DismaradminProductImageModule } from './product-image/product-image.module';
import { DismaradminProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        DismaradminProductGroupModule,
        DismaradminCategoryModule,
        DismaradminBrandModule,
        DismaradminProductImageModule,
        DismaradminProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DismaradminEntityModule {}
