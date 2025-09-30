import {EntityRepository} from "@/utils";
import {Product} from "@/product/product-utils";


export class ProductRepository implements EntityRepository<Product> {
    products: Product[] = [
        {id: '123', name: 'Sandía', category: 'food', price: 250 },
        {id: '456', name: 'Muñeca', category: 'toy', price: 1500 },
        {id: '789', name: 'Melón', category: 'food', price: 280 },

    ]
    randomNumber: number = Math.floor(Math.random() * 2);
    product: Product = this.products[this.randomNumber]

    async getAll(): Promise<Product[]> {
        return this.products
    }

    async getById(productId: string): Promise<Product | null> {
        // get logic..
        return this.product || null
    }

    async create(product: Omit<Product, "id">): Promise<Product[]> {
        //...create logic
        return this.products
    }

    async patch(productId: string, product: Partial<Product>): Promise<Product> {
        //patch logic...
        return this.product

    }

    async update(productId: string, product: Product): Promise<Product> {
        //update logic...
        return this.product

    }

    async deleteEntity(id: string): Promise<void> {
        //delete logic...
    }
}