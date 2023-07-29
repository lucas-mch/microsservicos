package dev.lucasmachado.apiproduct.modules.product.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "products_seq")
    @SequenceGenerator(name = "products_seq", sequenceName = "product_seq", allocationSize = 1, initialValue = 1)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "i_fornecedores")
    private Supplier supplier;

    @ManyToOne
    @JoinColumn(name = "i_categorias")
    private Category category;

    @Column(name = "quantity")
    private Integer quantity;

}
