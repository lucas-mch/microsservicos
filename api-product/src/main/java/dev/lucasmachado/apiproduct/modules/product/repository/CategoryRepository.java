package dev.lucasmachado.apiproduct.modules.product.repository;

import dev.lucasmachado.apiproduct.modules.product.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
}
