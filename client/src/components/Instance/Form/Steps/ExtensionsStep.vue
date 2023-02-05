<template>
  <div class="extensions-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensions"
            label="Disable extensions"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableExtensions', $event.target.checked)"
                :checked="form.extensions.disableExtensions"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensionsExcept"
            label="Disable extensions except"
            advanced
          >
            <base-input
              @change="onChangeField('extensions.disableExtensionsExcept', $event.target.value)"
              :value="form.extensions.disableExtensionsExcept"
            />

            <template #enDescription>
              Disable extensions except those specified in a comma-separated list.
            </template>

            <template #ruDescription>
              Отключает расширения, кроме указанных в списке, разделенном запятыми.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
      
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensionsFileAccessCheck"
            label="Disable extensions file access check"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableExtensionsFileAccessCheck', $event.target.checked)"
                :checked="form.extensions.disableExtensionsFileAccessCheck"
              />
            </template>

            <template #enDescription>
              Disable checking for user opt-in for extensions that want to inject script into file URLs (ie, always allow it).
              This is used during automated testing
            </template>

            <template #ruDescription>
              Отключает проверку согласия пользователя для расширений, которые хотят внедрить скрипт в URL файлов (т.е. всегда разрешает это).
              Это используется во время автоматизированного тестирования
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensionsHttpThrottling"
            label="Disable extensions HTTP throttling"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableExtensionsHttpThrottling', $event.target.checked)"
                :checked="form.extensions.disableExtensionsHttpThrottling"
              />
            </template>

            <template #enDescription>
              Disable the net::URLRequestThrottlerManager functionality for requests originating from extensions.
            </template>

            <template #ruDescription>
              Отключает функциональность net::URLRequestThrottlerManager для запросов, исходящих от расширений.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableFeatures"
            label="Disable features"
            advanced
          >
            <template #default>
              <base-input
                class="checkbox"
                @change="onChangeField('extensions.disableFeatures', $event.target.value)"
                :value="form.extensions.disableFeatures"
              />
            </template>

            <template #enDescription>
              Comma-separated list of feature names to disable. See also kEnableFeatures.
            </template>

            <template #ruDescription>
              Список имен функций для отключения, разделенный запятыми. См. также kEnableFeatures.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableDefaultApps"
            label="Disable default apps"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableDefaultApps', $event.target.checked)"
                :checked="form.extensions.disableDefaultApps"
              />
            </template>

            <template #enDescription>
              Disables installation of default apps on first run.
              This is used during automated testing.
            </template>

            <template #ruDescription>
              Отключает установку приложений по умолчанию при первом запуске.
              Это используется во время автоматизированного тестирования.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableComponentExtensionsWidthBackgroundPages"
            label="Disable component extensions width background pages"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableComponentExtensionsWidthBackgroundPages', $event.target.checked)"
                :checked="form.extensions.disableComponentExtensionsWidthBackgroundPages"
              />
            </template>

            <template #enDescription>
              Disable default component extensions with background pages - useful
              for performance tests where these pages may interfere with perf results.
            </template>

            <template #ruDescription>
              Отключает расширения компонентов по умолчанию с фоновыми страницами - полезно
              для тестов производительности, где эти страницы могут мешать результатам перфекта.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableExperimentalExtensionApis"
            label="Enable experimental extension APIs"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.enableExperimentalExtensionApis', $event.target.checked)"
                :checked="form.extensions.enableExperimentalExtensionApis"
              />
            </template>

            <template #enDescription>
              Enables extension APIs that are in development.
            </template>

            <template #ruDescription>
              Включает API расширения, которые находятся в разработке.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="listApps"
            label="List apps"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.listApps', $event.target.value)"
                :value="form.extensions.listApps"
              />
            </template>

            <template #enDescription>
              Writes open and installed web apps for each profile to the specified file without launching a new browser
              window or tab. Pass a absolute file path to specify where to output the information.
              Can be used together with optional --profile-base-name switch to only write information for a given profile.
            </template>

            <template #ruDescription>
              Записывает открытые и установленные веб-приложения для каждого профиля в указанный файл без запуска нового окна браузера
              окна или вкладки. Передайте абсолютный путь к файлу, чтобы указать, куда выводить информацию.
              Может использоваться вместе с дополнительным ключом --profile-base-name для записи информации только для данного профиля.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="listAudioDevices"
            label="List audio devices"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.listAudioDevices', $event.target.value)"
                :value="form.extensions.listAudioDevices"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="loadApps"
            label="Load apps"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.loadApps', $event.target.value)"
                :value="form.extensions.loadApps"
              />
            </template>

            <template #enDescription>
              Comma-separated list of paths to apps to load at startup. The first app in the list will be launched.
            </template>

            <template #ruDescription>
              Список путей к приложениям, загружаемым при запуске, разделенный запятыми. Будет запущено первое приложение из списка.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="loadExtension"
            label="Load extension"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.loadExtension', $event.target.value)"
                :value="form.extensions.loadExtension"
              />
            </template>

            <template #enDescription>
              Comma-separated list of paths to extensions to load at startup.
            </template>

            <template #ruDescription>
              Список путей к расширениям, загружаемым при запуске, разделенный запятыми.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useInstanceFormStore } from '@/stores/instanceFormStore.js'

import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>
