import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';

import { ProductImage } from './product-image.model';
import { ProductImageService } from './product-image.service';

@Component({
    selector: 'jhi-product-image-detail',
    templateUrl: './product-image-detail.component.html'
})
export class ProductImageDetailComponent implements OnInit, OnDestroy {

    productImage: ProductImage;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private dataUtils: JhiDataUtils,
        private productImageService: ProductImageService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInProductImages();
    }

    load(id) {
        this.productImageService.find(id)
            .subscribe((productImageResponse: HttpResponse<ProductImage>) => {
                this.productImage = productImageResponse.body;
            });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInProductImages() {
        this.eventSubscriber = this.eventManager.subscribe(
            'productImageListModification',
            (response) => this.load(this.productImage.id)
        );
    }
}
