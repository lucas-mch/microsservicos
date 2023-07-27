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
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "i_fornecedores")
    private Supplier supplier;

    @ManyToOne
    @JoinColumn(name = "i_categorias")
    private Category category;

}
