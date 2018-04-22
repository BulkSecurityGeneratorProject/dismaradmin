package com.dismar.admin.service.impl;

import com.dismar.admin.service.ProductImageService;
import com.dismar.admin.domain.ProductImage;
import com.dismar.admin.repository.ProductImageRepository;
import com.dismar.admin.service.dto.ProductImageDTO;
import com.dismar.admin.service.mapper.ProductImageMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing ProductImage.
 */
@Service
@Transactional
public class ProductImageServiceImpl implements ProductImageService {

    private final Logger log = LoggerFactory.getLogger(ProductImageServiceImpl.class);

    private final ProductImageRepository productImageRepository;

    private final ProductImageMapper productImageMapper;

    public ProductImageServiceImpl(ProductImageRepository productImageRepository, ProductImageMapper productImageMapper) {
        this.productImageRepository = productImageRepository;
        this.productImageMapper = productImageMapper;
    }

    /**
     * Save a productImage.
     *
     * @param productImageDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public ProductImageDTO save(ProductImageDTO productImageDTO) {
        log.debug("Request to save ProductImage : {}", productImageDTO);
        ProductImage productImage = productImageMapper.toEntity(productImageDTO);
        productImage = productImageRepository.save(productImage);
        return productImageMapper.toDto(productImage);
    }

    /**
     * Get all the productImages.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<ProductImageDTO> findAll() {
        log.debug("Request to get all ProductImages");
        return productImageRepository.findAll().stream()
            .map(productImageMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one productImage by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public ProductImageDTO findOne(Long id) {
        log.debug("Request to get ProductImage : {}", id);
        ProductImage productImage = productImageRepository.findOne(id);
        return productImageMapper.toDto(productImage);
    }

    /**
     * Delete the productImage by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete ProductImage : {}", id);
        productImageRepository.delete(id);
    }
}
