import { BaseEntity } from './../../shared';

export class ProductGroup implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
    ) {
    }
}
