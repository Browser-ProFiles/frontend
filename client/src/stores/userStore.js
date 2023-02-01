import { defineStore } from 'pinia'
import {computed, ref} from "vue";

import { getUser } from '@/api/user.js'
import { formatDate } from '@/helpers/date.js'

export const useUserStore = defineStore('user', () => {
    const loading = ref(false)
    const user = ref({})

    const fetchUser = async () => {
        try {
            loading.value = true
            const { data } = await getUser()
            user.value = data
        } catch (e) {
            console.error(e)
            toast.error(e.response?.data?.message || e.message)
        } finally {
            loading.value = false
        }
    }

    const subscriptionUntilDate = computed(() => {
        return formatDate(Number(user.value?.subscription?.activeUntil) * 1000)
    })

    return {
        loading,
        user,
        subscriptionUntilDate,
        fetchUser,
    }
})