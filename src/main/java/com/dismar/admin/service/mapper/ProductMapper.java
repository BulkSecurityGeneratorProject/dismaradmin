package com.dismar.admin.service.mapper;

import com.dismar.admin.domain.*;
import com.dismar.admin.service.dto.ProductDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Product and its DTO ProductDTO.
 */
@Mapper(componentModel = "spring", uses = {ProductGroupMapper.class, CategoryMapper.class, BrandMapper.class})
public interface ProductMapper extends EntityMapper<ProductDTO, Product> {

    @Mapping(source = "group.id", target = "groupId")
    @Mapping(source = "category.id", target = "categoryId")
    @Mapping(source = "brand.id", target = "brandId")
    ProductDTO toDto(Product product);

    @Mapping(source = "groupId", target = "group")
    @Mapping(source = "categoryId", target = "category")
    @Mapping(source = "brandId", target = "brand")
    Product toEntity(ProductDTO productDTO);

    default Product fromId(Long id) {
        if (id == null) {
            return null;
        }
        Product product = new Product();
        product.setId(id);
        return product;
    }
}
