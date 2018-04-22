package com.dismar.admin.service.impl;

import com.dismar.admin.service.ProductGroupService;
import com.dismar.admin.domain.ProductGroup;
import com.dismar.admin.repository.ProductGroupRepository;
import com.dismar.admin.service.dto.ProductGroupDTO;
import com.dismar.admin.service.mapper.ProductGroupMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing ProductGroup.
 */
@Service
@Transactional
public class ProductGroupServiceImpl implements ProductGroupService {

    private final Logger log = LoggerFactory.getLogger(ProductGroupServiceImpl.class);

    private final ProductGroupRepository productGroupRepository;

    private final ProductGroupMapper productGroupMapper;

    public ProductGroupServiceImpl(ProductGroupRepository productGroupRepository, ProductGroupMapper productGroupMapper) {
        this.productGroupRepository = productGroupRepository;
        this.productGroupMapper = productGroupMapper;
    }

    /**
     * Save a productGroup.
     *
     * @param productGroupDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public ProductGroupDTO save(ProductGroupDTO productGroupDTO) {
        log.debug("Request to save ProductGroup : {}", productGroupDTO);
        ProductGroup productGroup = productGroupMapper.toEntity(productGroupDTO);
        productGroup = productGroupRepository.save(productGroup);
        return productGroupMapper.toDto(productGroup);
    }

    /**
     * Get all the productGroups.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<ProductGroupDTO> findAll() {
        log.debug("Request to get all ProductGroups");
        return productGroupRepository.findAll().stream()
            .map(productGroupMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one productGroup by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public ProductGroupDTO findOne(Long id) {
        log.debug("Request to get ProductGroup : {}", id);
        ProductGroup productGroup = productGroupRepository.findOne(id);
        return productGroupMapper.toDto(productGroup);
    }

    /**
     * Delete the productGroup by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete ProductGroup : {}", id);
        productGroupRepository.delete(id);
    }
}
