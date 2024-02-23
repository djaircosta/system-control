import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/dtos/createUser.dto";
import { User } from "src/interfaces/user.interface";
import { hash} from "bcrypt"



@Injectable()
export class UserService{
    
    private users: User[] = [];

    async createUser(CreateUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;

        const passwordHashed = await hash(password, saltOrRounds );

        return {
            ...CreateUserDto,
            id: 1,
    }
        
    }

} 