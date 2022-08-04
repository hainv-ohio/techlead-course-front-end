import Repository, { baseDomain, serializeQuery } from "./Repository";

class UserRepository {
    async login(params) {
        try {
            const response = await Repository.post(`${baseDomain}/user/login`, {
                email: params.email,
                password: params.password,
            });
            console.log(response)
            return response;
        } catch (e) {
            console.error(e);
        }
    }
}

export default new UserRepository();
