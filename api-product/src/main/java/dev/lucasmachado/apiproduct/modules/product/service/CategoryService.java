package dev.lucasmachado.apiproduct.modules.product.service;

import dev.lucasmachado.apiproduct.modules.product.repository.CategoryRepository;
import dev.lucasmachado.apiproduct.modules.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

}
