import { BaseEntity } from './../../shared';

export class Product implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public weight?: number,
        public listPrice?: number,
        public salePrice?: number,
        public active?: boolean,
        public groupId?: number,
        public categoryId?: number,
        public brandId?: number,
    ) {
        this.active = false;
    }
}
