<template>
  <div class="page">
    <form class="form" @submit.prevent="onSubmit">
      <h2 class="title">Log In</h2>

      <p class="note">
        Don't have an account?
        <router-link to="/auth/sign-up">Sign Up</router-link>
      </p>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            class="group"
            name="username"
            label="Username"
          >
            <template #default>
              <base-input
                @change="onChangeField('username', $event.target.value)"
                :value="form.username"
                :minLength="4"
                :maxLength="255"
                required
              />
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            class="group"
            name="password"
            label="Password"
          >
            <template #default>
              <base-input-password
                @change="onChangeField('password', $event.target.value)"
                :value="form.password"
                :minLength="4"
                :maxLength="255"
                required
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

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
import BaseInputPassword from '~/components/Base/Form/BaseInputPassword.vue'
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
      toast.error(`Failed to log in: ${e.response?.data?.message || e.message}`)
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

  .row {
    width: 300px;

    @media screen and (max-width: 600px) {
      width: 60vw;
    }

    @media screen and (max-width: 400px) {
      width: 80vw;
    }
  }

  .form {
    align-self: center;

    .group {
      margin-bottom: 15px;
    }
  }
}
</style>