import {EntityRepository} from "@/utils";
import {User} from "@/user/user-utils";


export class UserRepository implements EntityRepository<User> {
    users: User[] = [
        {id: '123', name: 'Juan', firstName: 'García', email: 'juan@gmail.com', phone: '655889988', type: 'ADMIN'},
        {id: '456', name: 'Pepe', firstName: 'Fernández', email: 'pepe@gmail.com', phone: '615889988', type: 'ADMIN'},
        {
            id: '789',
            name: 'Laura',
            firstName: 'García',
            email: 'laura@gmail.com',
            phone: '620009888',
            type: 'CONSULTIVE'
        },
    ]
    randomNumber: number = Math.floor(Math.random() * 2);
    user: User = this.users[this.randomNumber]

    async getAll(): Promise<User[]> {
        return this.users
    }

    async getById(userId: string): Promise<User | null> {
        // get logic..
        return this.user || null
    }

    async create(user: Omit<User, "id">): Promise<User[]> {
        //...create logic
        return this.users
    }

    async patch(userId: string, user: Partial<User>): Promise<User> {
        //patch logic...
        return this.user

    }

    async update(userId: string, user: User): Promise<User> {
        //update logic...
        return this.user

    }

    async deleteEntity(id: string): Promise<void> {
        //delete logic...
    }
}