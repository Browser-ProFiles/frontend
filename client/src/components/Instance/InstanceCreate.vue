<template>
  <form @submit.prevent="onSubmit">
    <h2>Open Instance</h2>

    <h3>Parameters</h3>

    <h4><label for="name">Profile Name</label></h4>
    <input id="name" type="text" v-model="form.name">

    <hr>

    <h4>Screen</h4>

    <label for="width">Width</label>
    <input id="width" type="text" v-model="form.screen.width">

    <label for="height">Height</label>
    <input id="height" type="text" v-model="form.screen.height">

    <h4>Identity</h4>

    <label for="userAgent">User Agent</label>
    <input id="userAgent" type="text" v-model="form.identity.userAgent">

    <label for="siteIsolation">Site Isolation</label>
    <input type="checkbox" id="siteIsolation" v-model="form.identity.siteIsolation">

    <button>Generate Random</button>

    <h4>Proxy</h4>
    <label for="proxyEnabled">Enabled</label>
    <input type="checkbox" id="proxyEnabled" v-model="form.proxy.enabled">

    <template v-if="form.proxy.enabled">
      <select name="proxyType" id="proxyType" v-model="form.proxy.type">
        <option value="socks5" disabled>Socks5</option>
        <option value="http" selected>Http</option>
      </select>

      <label for="proxyHost">Host</label>
      <input id="proxyHost" type="text" v-model="form.proxy.host">

      <label for="proxyPort">Port</label>
      <input id="proxyPort" type="number" min="1" max="65535" v-model="form.proxy.port">

      <label for="proxyUsername">Username</label>
      <input id="proxyUsername" type="text" v-model="form.proxy.username">

      <label for="proxyPassword">Password</label>
      <input id="proxyPassword" type="text" v-model="form.proxy.password">
    </template>

    <label for="systemTimezone">Timezone</label>
    <select name="systemTimezone" id="systemTimezone" v-model="form.system.timezone">
      <option value="Europe/Warsaw">Europe/Warsaw</option>
      <option value="US/Pacific">US/Pacific</option>
    </select>

    <button type="submit">Create & Open</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { createInstance } from '../../../api/instance.js'

const form = reactive({
  name: '',
  screen: {
    width: 1440,
    height: 900,
  },
  identity: {
    userAgent: null,
    siteIsolation: true,
  },
  proxy: {
    enabled: false,
    type: null,
    host: null,
    port: null,
    username: null,
    password: null,
  },
  system: {
    timezone: 'Europe/Warsaw',
  }
})

const onSubmit = () => {
  createInstance(form)
}
</script>