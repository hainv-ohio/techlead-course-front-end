import Repository, { baseDomain, serializeQuery, customHeaders } from "./Repository";

const storeApiUrl = process.env.NEXT_PUBLIC_STORE_API_ENDPOINT;
class UserRepository {
    async getListStore() {
        try {
            const url = storeApiUrl + '/store/list';
            const response = await Repository.get(url);
            return [
                { value: '1', label: 'Store 1' },
                { value: '2', label: 'Store 2' },
                { value: '3', label: 'Store 3' },
                { value: '4', label: 'Store 4' },
                { value: '5', label: 'Store 5' },
            ];
            return response;
        } catch (e) {
            console.error(e);
        }
    }
}

export default new UserRepository();
