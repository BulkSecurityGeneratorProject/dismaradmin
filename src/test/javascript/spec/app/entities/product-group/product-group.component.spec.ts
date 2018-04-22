/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DismaradminTestModule } from '../../../test.module';
import { ProductGroupComponent } from '../../../../../../main/webapp/app/entities/product-group/product-group.component';
import { ProductGroupService } from '../../../../../../main/webapp/app/entities/product-group/product-group.service';
import { ProductGroup } from '../../../../../../main/webapp/app/entities/product-group/product-group.model';

describe('Component Tests', () => {

    describe('ProductGroup Management Component', () => {
        let comp: ProductGroupComponent;
        let fixture: ComponentFixture<ProductGroupComponent>;
        let service: ProductGroupService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [DismaradminTestModule],
                declarations: [ProductGroupComponent],
                providers: [
                    ProductGroupService
                ]
            })
            .overrideTemplate(ProductGroupComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProductGroupComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductGroupService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new ProductGroup(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.productGroups[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
