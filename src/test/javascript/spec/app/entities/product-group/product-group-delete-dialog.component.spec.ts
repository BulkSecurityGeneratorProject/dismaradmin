/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { DismaradminTestModule } from '../../../test.module';
import { ProductGroupDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/product-group/product-group-delete-dialog.component';
import { ProductGroupService } from '../../../../../../main/webapp/app/entities/product-group/product-group.service';

describe('Component Tests', () => {

    describe('ProductGroup Management Delete Component', () => {
        let comp: ProductGroupDeleteDialogComponent;
        let fixture: ComponentFixture<ProductGroupDeleteDialogComponent>;
        let service: ProductGroupService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [DismaradminTestModule],
                declarations: [ProductGroupDeleteDialogComponent],
                providers: [
                    ProductGroupService
                ]
            })
            .overrideTemplate(ProductGroupDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProductGroupDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductGroupService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
