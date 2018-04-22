import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ProductGroup } from './product-group.model';
import { ProductGroupService } from './product-group.service';

@Component({
    selector: 'jhi-product-group-detail',
    templateUrl: './product-group-detail.component.html'
})
export class ProductGroupDetailComponent implements OnInit, OnDestroy {

    productGroup: ProductGroup;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private productGroupService: ProductGroupService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInProductGroups();
    }

    load(id) {
        this.productGroupService.find(id)
            .subscribe((productGroupResponse: HttpResponse<ProductGroup>) => {
                this.productGroup = productGroupResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInProductGroups() {
        this.eventSubscriber = this.eventManager.subscribe(
            'productGroupListModification',
            (response) => this.load(this.productGroup.id)
        );
    }
}
