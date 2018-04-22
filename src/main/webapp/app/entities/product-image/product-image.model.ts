import { BaseEntity } from './../../shared';

export class ProductImage implements BaseEntity {
    constructor(
        public id?: number,
        public photoContentType?: string,
        public photo?: any,
        public active?: boolean,
        public productId?: number,
    ) {
        this.active = false;
    }
}
