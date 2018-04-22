package com.dismar.admin.service;

import com.dismar.admin.service.dto.ProductGroupDTO;
import java.util.List;

/**
 * Service Interface for managing ProductGroup.
 */
public interface ProductGroupService {

    /**
     * Save a productGroup.
     *
     * @param productGroupDTO the entity to save
     * @return the persisted entity
     */
    ProductGroupDTO save(ProductGroupDTO productGroupDTO);

    /**
     * Get all the productGroups.
     *
     * @return the list of entities
     */
    List<ProductGroupDTO> findAll();

    /**
     * Get the "id" productGroup.
     *
     * @param id the id of the entity
     * @return the entity
     */
    ProductGroupDTO findOne(Long id);

    /**
     * Delete the "id" productGroup.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
