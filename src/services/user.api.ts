import { IUser } from "./../pruebas/usersModel";
export class UserApi {
    url: string;
    constructor() {
        this.url = "http://localhost:3000/users";
    }

    // create / post
    createUser(user: IUser): Promise<IUser> {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => response.json());
    }
}
