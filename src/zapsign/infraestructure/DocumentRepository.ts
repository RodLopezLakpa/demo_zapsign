import axios from "axios"

class DocumentRepository {
    async findall() {
        const { data, status } = await axios.get("https://api.zapsign.com.br/api/v1/docs/?page=1")
        return data
    }
    async findOne() {
        const { data, status } = await axios.get("https://api.zapsign.com.br/api/v1/docs/?page=1")
        return data
    }
}

export default DocumentRepository