import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { ProductImage } from './product-image.model';
import { ProductImageService } from './product-image.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-product-image',
    templateUrl: './product-image.component.html'
})
export class ProductImageComponent implements OnInit, OnDestroy {
productImages: ProductImage[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private productImageService: ProductImageService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.productImageService.query().subscribe(
            (res: HttpResponse<ProductImage[]>) => {
                this.productImages = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInProductImages();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ProductImage) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    registerChangeInProductImages() {
        this.eventSubscriber = this.eventManager.subscribe('productImageListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
