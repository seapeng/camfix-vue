import axios from 'axios'
import { defineStore } from 'pinia'

const useServiceStore = defineStore('service', {
    state: () => ({
        services: []
    }),
    actions: {
        async getAllServices() {
            try {
                const { data } = await axios.get(`${process.env.VUE_APP_API}/api/services`)
                // console.log(data)
                this.services = data
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})

export default useServiceStore