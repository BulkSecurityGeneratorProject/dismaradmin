package com.dismar.admin.service.dto;


import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;
import javax.persistence.Lob;

/**
 * A DTO for the ProductImage entity.
 */
public class ProductImageDTO implements Serializable {

    private Long id;

    @NotNull
    @Lob
    private byte[] photo;
    private String photoContentType;

    private Boolean active;

    private Long productId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public Boolean isActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProductImageDTO productImageDTO = (ProductImageDTO) o;
        if(productImageDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), productImageDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ProductImageDTO{" +
            "id=" + getId() +
            ", photo='" + getPhoto() + "'" +
            ", active='" + isActive() + "'" +
            "}";
    }
}
