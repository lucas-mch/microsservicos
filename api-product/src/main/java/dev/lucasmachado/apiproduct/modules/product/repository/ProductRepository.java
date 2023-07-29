package dev.lucasmachado.apiproduct.modules.product.repository;

import dev.lucasmachado.apiproduct.modules.product.model.Category;
import dev.lucasmachado.apiproduct.modules.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
}
