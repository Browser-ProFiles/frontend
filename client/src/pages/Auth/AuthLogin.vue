<template>
  <auth-layout class="page">
    <form class="form" @submit.prevent="onSubmit">
        <a-spin :delay="350" :spinning="submitting" :tip="$t('utils.loading')">
        <h2 class="title">{{ $t('auth.login') }}</h2>

        <p class="note">
          {{ $t('auth.noAccount') }}
          <router-link to="/auth/sign-up">{{ $t('auth.signUpAction') }}</router-link>
        </p>

        <a-row class="row">
          <a-col span="24">
            <base-input-group
              class="group"
              name="username"
              :label="$t('user.emailOnlyGmail')"
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
              :label="$t('user.password')"
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
          {{ $t('auth.loginAction') }}
        </a-button>
      </a-spin>
    </form>
  </auth-layout>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

import { login } from '~/api/auth.js'

import { setAuthToken } from '~/helpers/auth.js';

import AuthLayout from '~/layouts/AuthLayout.vue'
import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputPassword from '~/components/Base/Form/BaseInputPassword.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const router = useRouter()
const toast = useToast()
const i18n = useI18n()

const { t } = i18n

const submitting = ref(false)

const form = reactive({
  username: '',
  password: '',
})

const onSubmit = async () => {
  submitting.value = true

  login(form)
    .then(({ data }) => {
      setAuthToken(data.token)
      toast.success(t('messages.success.auth'))
      router.push('/')
    })
    .catch((e) => {
      console.error(e.response.data.message)
      toast.error(`${t('messages.error.auth')}: ${e.response?.data?.message || e.message}`)
    })
    .finally(() => submitting.value = false)
}

const onChangeField = (name, value) => form[name] = value
</script>

<style lang="scss" scoped>
.page {
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
