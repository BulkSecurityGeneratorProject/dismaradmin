import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ProductGroup } from './product-group.model';
import { ProductGroupService } from './product-group.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-product-group',
    templateUrl: './product-group.component.html'
})
export class ProductGroupComponent implements OnInit, OnDestroy {
productGroups: ProductGroup[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private productGroupService: ProductGroupService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.productGroupService.query().subscribe(
            (res: HttpResponse<ProductGroup[]>) => {
                this.productGroups = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInProductGroups();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ProductGroup) {
        return item.id;
    }
    registerChangeInProductGroups() {
        this.eventSubscriber = this.eventManager.subscribe('productGroupListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
