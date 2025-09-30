import {User} from "@/user/user-utils";
import {Product} from "@/product/product-utils";

export interface Entity {
    id: string;
}

export interface EntityRepository<T> {
    getAll(): Promise<T[]>;

    getById(id: string): Promise<T | null>;

    create(detailedEntity: Omit<(User | Product), 'id'>): Promise<User[] | Product[]>;

    patch(id:string,detailedEntity: Partial<User | Product>): Promise<User | Product>;

    update(id:string,detailedEntity: User | Product): Promise<User | Product>;

    deleteEntity(id: string): void;
}
