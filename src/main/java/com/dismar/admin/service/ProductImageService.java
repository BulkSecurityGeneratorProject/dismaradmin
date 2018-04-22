package com.dismar.admin.service;

import com.dismar.admin.service.dto.ProductImageDTO;
import java.util.List;

/**
 * Service Interface for managing ProductImage.
 */
public interface ProductImageService {

    /**
     * Save a productImage.
     *
     * @param productImageDTO the entity to save
     * @return the persisted entity
     */
    ProductImageDTO save(ProductImageDTO productImageDTO);

    /**
     * Get all the productImages.
     *
     * @return the list of entities
     */
    List<ProductImageDTO> findAll();

    /**
     * Get the "id" productImage.
     *
     * @param id the id of the entity
     * @return the entity
     */
    ProductImageDTO findOne(Long id);

    /**
     * Delete the "id" productImage.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
