/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DismaradminTestModule } from '../../../test.module';
import { ProductGroupDetailComponent } from '../../../../../../main/webapp/app/entities/product-group/product-group-detail.component';
import { ProductGroupService } from '../../../../../../main/webapp/app/entities/product-group/product-group.service';
import { ProductGroup } from '../../../../../../main/webapp/app/entities/product-group/product-group.model';

describe('Component Tests', () => {

    describe('ProductGroup Management Detail Component', () => {
        let comp: ProductGroupDetailComponent;
        let fixture: ComponentFixture<ProductGroupDetailComponent>;
        let service: ProductGroupService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [DismaradminTestModule],
                declarations: [ProductGroupDetailComponent],
                providers: [
                    ProductGroupService
                ]
            })
            .overrideTemplate(ProductGroupDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProductGroupDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductGroupService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new ProductGroup(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.productGroup).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
