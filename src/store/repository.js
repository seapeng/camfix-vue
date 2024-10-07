import axios from 'axios'
import { defineStore } from 'pinia'

const useRepositoryStore = defineStore('repository', {
    state: () => ({
        repositories: []
    }),
    actions: {
        async getAllRepositories() {
            try {
                const { data } = await axios.get('/api/services')
                console.log(data)
                this.repositories = data
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})

export default useRepositoryStore