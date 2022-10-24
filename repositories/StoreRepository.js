import Repository, { baseDomain, serializeQuery, customHeaders } from "./Repository";

const storeApiUrl = process.env.NEXT_PUBLIC_STORE_API_ENDPOINT;
class UserRepository {
    async getListStore() {
        var listStore = [];
        try {
            const url = storeApiUrl + '/store/list';
            const response = await Repository.get(url);
            if(response.status == 200){
                listStore = response.data
            }
        } catch (e) {
            console.error(e);
        }
        return listStore;
    }
}

export default new UserRepository();
