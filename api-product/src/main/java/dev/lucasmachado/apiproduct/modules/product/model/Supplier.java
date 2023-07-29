package dev.lucasmachado.apiproduct.modules.product.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "suppliers_seq")
    @SequenceGenerator(name = "suppliers_seq", sequenceName = "supplier_seq", allocationSize = 1, initialValue = 1)
    private Long id;
    private String name;

}
