insert into categories (id, description, name) values (nextval('cat_seq'), null, 'Comic books');
insert into categories (id, description, name) values (nextval('cat_seq'), null, 'Movies');
insert into categories (id, description, name) values (nextval('cat_seq'), null, 'Books');

insert into supplier (id, name) values (nextval('supplier_seq'), 'Panini Comics');
insert into supplier (id, name) values (nextval('supplier_seq'), 'Amazon');
insert into supplier (id, name) values (nextval('supplier_seq'), 'Rocco');
insert into supplier (id, name) values (nextval('supplier_seq'), 'Warner Bros');

insert into product (id, name, i_categorias, i_fornecedores, quantity) values (nextval('product_seq'), 'Harry Potter e a Pedra Filosofal', 3, 3, 10);

insert into product (id, name, i_categorias, i_fornecedores, quantity) values (nextval('product_seq'), 'Harry Potter e a Pedra Filosofal', 2, 4, 5);

insert into product (id, name, i_categorias, i_fornecedores, quantity) values (nextval('product_seq'), 'Harry Potter ae o Enigma do Principe', 2, 4, 15);