import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;
export type UserPatchParams = Partial<Omit<User, "id">>

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }

  public patchUser(id: number, userPatchParams: UserPatchParams): User {
    return {
      ...this.get(id),
      ...userPatchParams,
    };
  }
}