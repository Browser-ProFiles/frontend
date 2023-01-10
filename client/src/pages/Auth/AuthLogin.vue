<template>
  <div class="page">
    <form class="form" @submit.prevent="onSubmit">
      <h2 class="title">Log In</h2>

      <p class="note">
        Don't have an account?
        <router-link to="/auth/sign-up">Sign In</router-link>
      </p>

      <base-input-group
        class="group"
        name="username"
        label="Username"
      >
        <template #default>
          <base-input
            @change="onChangeField('username', $event.target.value)"
            :value="form.username"
          />
        </template>
      </base-input-group>

      <base-input-group
        class="group"
        name="password"
        label="Password"
      >
        <template #default>
          <base-input
            type="password"
            @change="onChangeField('password', $event.target.value)"
            :value="form.password"
          />
        </template>
      </base-input-group>

      <a-button
        :disabled="submitting"
        class="submit"
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

import { login } from '~/api/auth.js'

import { setAuthToken } from '~/helpers/auth.js';

import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const router = useRouter()
const toast = useToast()

const submitting = ref(false)

const form = reactive({
  login: '',
  password: '',
})

const onSubmit = async () => {
  submitting.value = true

  login(form)
    .then(({ data }) => {
      setAuthToken(data.token)
      toast.success('Successfully authenticated')
      router.push('/')
    })
    .catch((e) => {
      console.error(e.response.data.message)
      toast.error(e.response?.data?.message)
    })
    .finally(() => submitting.value = false)
}

const onChangeField = (name, value) => form[name] = value
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-self: center;

  height: 100vh;

  .form {
    align-self: center;

    .group {
      margin-bottom: 15px;
    }
  }
}
</style>