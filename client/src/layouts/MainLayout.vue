<template>
  <a-layout :key="lang">
    <a-layout-header
      :class="{
        'has-sidebar': route.meta.hasSidebar,
      }"
      width="250"
      class="header"
    >
      <slot name="header">
        <div class="header__title-wrapper">
          <h2 class="header__title">{{ title }}</h2>
          <div class="header__theme" @click="toggleMode">
            <template v-if="theme === THEME_DEFAULT">
              <img class="header__theme-toggle" :src="DarkThemeIcon" alt="">
            </template>
            <template v-if="theme === THEME_DARK">
              <img class="header__theme-toggle" :src="DefaultThemeIcon" alt="">
            </template>
          </div>
        </div>
        <nav class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link class="menu__item-link" to="/cabinet">{{ $t('menu.myAccount') }}</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__item-link" to="/profiles">{{ $t('menu.profilesList') }}</router-link>
            </li>
            <li @click="onLogout" class="menu__item">
              {{ $t('menu.logout') }}
            </li>
          </ul>
        </nav>
      </slot>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        v-if="route.meta.hasSidebar"
        :theme="theme === THEME_DEFAULT ? 'light' : 'dark'"
        class="sider"
        :width="250"
      >
        <slot name="sider" />
      </a-layout-sider>
      <a-layout-content
        :class="{
          'has-sidebar': route.meta.hasSidebar,
        }"
        class="content"
      >
        <slot />
      </a-layout-content>
    </a-layout>
    <slot name="footer">
      <a-layout-footer
        class="footer"
        :class="{
          'has-sidebar': route.meta.hasSidebar,
        }"
      >
        <div class="footer__copyright">© {{ new Date().getFullYear() }} Browser ProFiles</div>
        <switch-language class="footer__switch-lang" />
      </a-layout-footer>
    </slot>
  </a-layout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { THEME_DEFAULT, THEME_DARK, useAppStore } from '@/stores/appStore.js'

import { clearAuthToken } from '@/helpers/auth.js'

import DefaultThemeIcon from '@/assets/img/themes/default.svg'
import DarkThemeIcon from '@/assets/img/themes/dark.svg'
import SwitchLanguage from '@/components/Utils/SwitchLanguage.vue'

defineProps({
  title: {
    type: String,
    default: 'Browser ProFiles'
  }
})

const router = useRouter()
const route = useRoute()

const store = useAppStore()
const { theme, lang } = storeToRefs(store)
const { toggleMode, initMode, initLang } = store

const onLogout = () => {
  clearAuthToken()
  router.push('/auth/login')
}

onMounted(() => {
  initMode()
  initLang()
})
</script>

<style lang="scss">
.ant-layout-sider-children {
  width: 100% !important;
  padding: 0 10px !important;
}

@media screen and (max-width: 600px) {
  .ant-layout {
    flex-direction: column !important;
    min-height: calc(100vh - 60px) !important;
  }

  .ant-layout-sider {
    position: static !important;
    width: 100vw !important;
    min-width: 100vw !important;
    max-width: 100vw !important;
    flex: unset !important;

    height: auto !important;
    background-color: inherit !important;
  }

  .header {
    margin-left: 0 !important;
  }

  .ant-layout-content {
    width: 100% !important;
    margin-left: 0 !important;
  }

  .content {
    min-height: unset !important;
  }
}

.default {
  .header {
    background: #fff;
  }
}

.dark {
  .menu__item,
  .menu__item-link {
    &:not(.active) {
      color: #fff !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.header,
.content {
  &.has-sidebar {
    margin-left: 250px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  font-size: 24px;

  /*background: #f7f7f7;*/

  &__title {
    margin: 0;
    font-size: 24px;
    line-height: 1;

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;

      @media screen and (max-width: 1053px) {
        margin-bottom: 10px;
      }
    }
  }

  &__theme {
    display: flex;
    align-items: center;
    margin-top: 6px;

    &-toggle {
      width: 18px;

      margin-bottom: 2px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1053px) {
    flex-direction: column;

    min-height: 60px;
    height: auto;

    line-height: 1;

    padding: 10px 0;
  }
}

.menu {
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin: 5px 0;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 20px;

    text-transform: uppercase;

    list-style: none;

    font-size: 18px;

    @media screen and (max-width: 400px) {
      gap: 10px;
    }
  }

  &__item,
  &__item-link {
    color: #000;

    &:hover {
      cursor: pointer;
    }
  }

  &__item-link.active {
    color: #1aa7da;
  }
}

.sider {
  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  height: 100vh;

  overflow: auto;

  padding: 20px;
}

.content {
  overflow-y: scroll;
  min-height: calc(100vh - 60px - 55px);

  padding: 15px 50px;

  @media screen and (max-width: 1053px) {
    min-height: calc(100vh - 100px - 55px);
  }

  @media screen and (max-width: 400px) {
    padding: 15px 20px;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 55px;

  background: #fff;

  @media screen and (max-width: 420px) {
    font-size: 13px;

    padding: 15px;
  }

  &:empty {
    display: none;
  }

  &.has-sidebar {
    margin-left: 250px;
  }
}
</style>
