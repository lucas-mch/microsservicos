package dev.lucasmachado.apiproduct.modules.product.repository;

import dev.lucasmachado.apiproduct.modules.product.model.Category;
import dev.lucasmachado.apiproduct.modules.product.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier,Long> {
}
