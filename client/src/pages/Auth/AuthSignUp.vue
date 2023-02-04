<template>
  <div class="page">
    <form class="form" @submit.prevent="onSubmit">
      <a-spin :delay="350" :spinning="submitting" :tip="$t('utils.loading')">
        <h2 class="title">{{ $t('auth.login') }}</h2>

        <p class="note">
          {{ $t('auth.alreadyHaveAccount') }}
          <router-link to="/auth/login">{{ $t('auth.loginAlreadyAccount') }}</router-link>
        </p>

        <a-row class="row">
          <a-col span="24">
            <base-input-group
              class="group"
              name="username"
              :label="$t('user.username')"
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

            <base-input-group
              class="group"
              name="email"
              :label="$t('user.emailOnlyGmail')"
            >
              <template #default>
                <base-input
                  type="email"
                  @change="onChangeField('email', $event.target.value)"
                  :value="form.email"
                  :maxLength="128"
                  required
                />
              </template>
            </base-input-group>
          </a-col>
        </a-row>

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

        <a-button
          :disabled="submitting"
          class="submit"
          type="primary"
          html-type="submit"
        >
          {{ $t('auth.signUpSubmit') }}
        </a-button>
      </a-spin>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

import { signUp } from '~/api/auth.js'

import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputPassword from '~/components/Base/Form/BaseInputPassword.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const router = useRouter()
const toast = useToast()
const i18n = useI18n()

const { t } = i18n

const submitting = ref(false)

const form = reactive({
  login: '',
  email: '',
  password: '',
})

const onSubmit = async () => {
  submitting.value = true
  try {
    await signUp(form)
    toast.success(t('messages.success.signUpRequest'))
    router.push('/auth/login')
  } catch (e) {
    console.error(e)
    toast.error(`${t('messages.error.signUpRequest')}: ${e.response?.data?.message || e.message}`)
  } finally {
    submitting.value = false
  }
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