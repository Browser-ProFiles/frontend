<template>
  <a-modal
    class="macos-install-modal"
    @close="setMacosInstallModalOpened(false)"
    @ok="setMacosInstallModalOpened(false)"
    :ok-text="$t('modal.macosinstall.ok')"
    :title="$t('modal.macosinstall.title')"
    :visible="macosInstallModalOpened"
    :cancel-button-props="{ style: { display: 'none' } }"
  >
    <p>{{ $t('modal.macosinstall.p1') }}</p>
    <p>{{ $t('modal.macosinstall.p2') }}</p>
    <div class="macos-install-modal__code">sudo xattr -r -d com.apple.quarantine "/Applications/Browser ProFiles.app"</div>
    <p>{{ $t('modal.macosinstall.p3') }}</p>
  </a-modal>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore.js'

const modalStore = useModalStore()
const { macosInstallModalOpened } = storeToRefs(modalStore)
const { setMacosInstallModalOpened } = modalStore
</script>

<style lang="scss">
.macos-install-modal {
  width: 700px !important;

  @media screen and (max-width: 768px) {
    width: 80vw !important;
  }

  @media screen and (max-width: 510px) {
    width: 90vw !important;
  }

  &__code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,Courier, monospace;

    margin: 10px;
  }
}
</style>
