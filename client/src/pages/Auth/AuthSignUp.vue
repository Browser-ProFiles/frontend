<template>
  <div class="page">
    <form class="form" @submit.prevent="onSubmit">
      <h2 class="title">Sign Up</h2>

      <p class="note">
        Already signed up?
        <router-link to="/auth/login">Log In</router-link>
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
        name="email"
        label="Email"
      >
        <template #default>
          <base-input
            type="email"
            @change="onChangeField('email', $event.target.value)"
            :value="form.email"
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

import { signUp } from '../../../api/instance.js'

import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const router = useRouter()

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
    router.push('/auth/login')
  } catch (e) {
    console.error(e)
    alert('Error!')
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

  .form {
    align-self: center;

    .group {
      margin-bottom: 15px;
    }
  }
}
</style>