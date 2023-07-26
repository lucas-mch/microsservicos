docker run --name product-db  -p 5434:5432 -e POSTGRES_DB=product-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123 -d postgres
