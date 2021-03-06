package com.dismar.admin.repository;

import com.dismar.admin.domain.ProductImage;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the ProductImage entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {

}
