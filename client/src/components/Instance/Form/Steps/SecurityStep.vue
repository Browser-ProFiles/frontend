<template>
  <div class="security-step">
    <div class="section">
      <h2 class="title">SSL</h2>

      <a-row :gutter="20" class="row">
        <a-col span="12">
          <base-input-group
            name="sslVersionMax"
            label="SSL Version max"
            advanced
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.ssl.sslVersionMax', $event.target.value)"
                :value="form.security.ssl.sslVersionMax"
              />
            </template>

            <template #description>
              Specifies the maximum SSL/TLS version ("tls1.2" or "tls1.3").
            </template>
          </base-input-group>
        </a-col>

        <a-col span="12">
          <base-input-group
            name="sslVersionMin"
            label="SSL Version min"
            advanced
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.ssl.sslVersionMin', $event.target.value)"
                :value="form.security.ssl.sslVersionMin"
              />
            </template>

            <template #description>
              Specifies the minimum SSL/TLS version ("tls1.2" or "tls1.3").
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Isolation</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="processPerSite"
            label="Process Per Site"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.processPerSite', $event.target.checked)"
                :checked="form.security.isolation.processPerSite"
              />
            </template>

            <template #description>
              Enable the "Process Per Site" process model for all domains. This mode consolidates same-site pages so that
              they share a single process. More details here: - https://www.chromium.org/developers/design-documents/process-models
              The class comment in site_instance.h, listing the supported process models.
              <b>IMPORTANT</b>: This isn't to be confused with --site-per-process (which is about isolation, not consolidation).
              You probably want the other one.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="sitePerProcess"
            label="Site Per Process"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.sitePerProcess', $event.target.checked)"
                :checked="form.security.isolation.sitePerProcess"
              />
            </template>

            <template #description>
              Enforces a one-site-per-process security policy: * Each renderer process, for its whole lifetime,
              is dedicated to rendering pages for just one site. * Thus, pages from different sites are never in
              the same process. * A renderer process's access rights are restricted based on its site.
              All cross-site navigations force process swaps. * iframes are rendered out-of-process
              whenever the src=is cross-site. More details here: -
              https://www.chromium.org/developers/design-documents/site-isolation -
              https://www.chromium.org/developers/design-documents/process-models -
              The class comment in site_instance.h, listing the supported process models.
              IMPORTANT: this isn't to be confused with --process-per-site (which is about process consolidation, not isolation).
              You probably want this one.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="singleProcess"
            label="Single Process"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.singleProcess', $event.target.checked)"
                :checked="form.security.isolation.singleProcess"
              />
            </template>

            <template #description>
              Runs the renderer and plugins in the same process as the brows
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="processPerTab"
            label="Process Per Site"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.processPerTab', $event.target.checked)"
                :checked="form.security.isolation.processPerTab"
              />
            </template>

            <template #description>
              Runs each set of script-connected tabs (i.e., a BrowsingInstance) in its own renderer process.
              We default to using a renderer process for each site instance (i.e., group of pages from the same
              registered domain with script connections to each other).
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolateOrigins"
            label="Isolate Origins"
          >
            <template #default>
              <base-input
                @change="onChangeField('security.isolation.isolateOrigins', $event.target.value)"
                :value="form.security.isolation.isolateOrigins"
              />
            </template>

            <template #description>
              Require dedicated processes for a set of origins, specified as a comma-separated list. For example: --isolate-origins=https://www.foo.com,https://www.bar.com
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolatedAppOrigins"
            label="Isolated App Origins"
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.isolation.isolatedAppOrigins', $event.target.value)"
                :value="form.security.isolation.isolatedAppOrigins"
              />
            </template>

            <template #description>
              Enable Isolated App restrictions for a set of origins, specified as a comma-separated list.
              For example: --isolated-app-origins=https://www.foo.com,https://www.bar.com
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolatedContextOrigin"
            label="Isolated Context Origin"
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.isolation.isolatedContextOrigin', $event.target.value)"
                :value="form.security.isolation.isolatedContextOrigin"
              />
            </template>

            <template #description>
              Enables APIs guarded with the [IsolatedContext] IDL attribute for the given comma-separated list of origins.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolationByDefault"
            label="Isolation by default"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.isolationByDefault', $event.target.checked)"
                :checked="form.security.isolation.isolationByDefault"
              />
            </template>

            <template #description>
              Enables the web-facing behaviors that will enable origin-isolation by default at some point
              in the relatively near future. https://crbug.com/1140371
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableSiteIsolationForPolicy"
            label="Disable site isolation for policy"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.disableSiteIsolationForPolicy', $event.target.checked)"
                :checked="form.security.isolation.disableSiteIsolationForPolicy"
              />
            </template>

            <template #description>
              Just like kDisableSiteIsolation, but doesn't show the "stability and security will suffer" butter bar warning.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableSiteIsolationTrials"
            label="Disable site isolation trials"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.disableSiteIsolationTrials', $event.target.checked)"
                :checked="form.security.isolation.disableSiteIsolationTrials"
              />
            </template>

            <template #description>
              Disables site isolation. Note that the opt-in
              (to site-per-process, isolate-origins, etc.) via enterprise policy and/or cmdline takes
              precedence over the kDisableSiteIsolation switch (i.e. the opt-in takes effect despite
              potential presence of kDisableSiteIsolation switch). Note that for historic reason
              the name of the switch misleadingly mentions "trials", but the switch also disables
              the default site isolation that ships on desktop since M67. The name of the switch
              is preserved for backcompatibility of chrome://flags.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableAutoWptOriginIsolation"
            label="Disable auto wpt origin isolation"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.disableAutoWptOriginIsolation', $event.target.checked)"
                :checked="form.security.isolation.disableAutoWptOriginIsolation"
              />
            </template>

            <template #description>
              Disables the automatic origin isolation of web platform test domains.
              We normally origin-isolate them for better test coverage, but tests of opt-in
              origin isolation need to disable this.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Fakes</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeCodecForPeerConnection"
            label="Use fake codec for peer connection"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeCodecForPeerConnection', $event.target.checked)"
                :checked="form.security.fakes.useFakeCodecForPeerConnection"
              />
            </template>

            <template #description>
              Replaces the existing codecs supported in peer connection with a single fake
              codec entry that create a fake video encoder and decoder.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeDeviceForMediaStream"
            label="Use fake device for media stream"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeDeviceForMediaStream', $event.target.checked)"
                :checked="form.security.fakes.useFakeDeviceForMediaStream"
              />
            </template>

            <template #description>
              Use fake device for Media Stream to replace actual camera and microphone.
              For the list of allowed parameters, see FakeVideoCaptureDeviceFactory::ParseFakeDevicesConfigFromOptionsString().
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeMjpegDecodeAccelerator"
            label="Use fake mjpeg decode accelerator"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeMjpegDecodeAccelerator', $event.target.checked)"
                :checked="form.security.fakes.useFakeMjpegDecodeAccelerator"
              />
            </template>

            <template #description>
              Use a fake device for accelerated decoding of MJPEG. This allows, for example, testing of the communication
              to the GPU service without requiring actual accelerator hardware to be present.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeUiForFedcm"
            label="Use fake UI for FedCM"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeUiForFedcm', $event.target.checked)"
                :checked="form.security.fakes.useFakeUiForFedcm"
              />
            </template>

            <template #description>
              Bypass the FedCM account selection dialog. If a value is provided for this switch,
              that account ID is selected, otherwise the first account is chosen.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeUiForMediaStream"
            label="Use fake UI for media stream"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeUiForMediaStream', $event.target.checked)"
                :checked="form.security.fakes.useFakeUiForMediaStream"
              />
            </template>

            <template #description>
              Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC).
              Works with --use-fake-device-for-media-stream.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFileForFakeAudioCapture"
            label="Use file for fake audio capture"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFileForFakeAudioCapture', $event.target.checked)"
                :checked="form.security.fakes.useFileForFakeAudioCapture"
              />
            </template>

            <template #description>
              Play a .wav file as the microphone. Note that for WebRTC calls we'll treat the bits as if they came from
              the microphone, which means you should disable audio processing (lest your audio file will play back distorted).
              The input file is converted to suit Chrome's audio buses if necessary, so most sane .wav files should work.
              You can pass either to play the file looping or noloop to stop after playing the file to completion.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Simulation</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="simulateCriticalUpdate"
            label="Simulate critical update"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateCriticalUpdate', $event.target.checked)"
                :checked="form.security.simulation.simulateCriticalUpdate"
              />
            </template>

            <template #description>
              Simulates a critical update being available.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateElevatedRecovery"
            label="Simulate elevated recovery"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateElevatedRecovery', $event.target.checked)"
                :checked="form.security.simulation.simulateElevatedRecovery"
              />
            </template>

            <template #description>
              Simulates that elevation is needed to recover upgrade channel.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateOutdated"
            label="Simulate outdated"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateOutdated', $event.target.checked)"
                :checked="form.security.simulation.simulateOutdated"
              />
            </template>

            <template #description>
              Simulates that current version is outdated.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateOutdatedNoAu"
            label="Simulate outdated (No AU)"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateOutdatedNoAu', $event.target.checked)"
                :checked="form.security.simulation.simulateOutdatedNoAu"
              />
            </template>

            <template #description>
              Simulates that current version is outdated and auto-update is off.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateUpdateErrorCode"
            label="Simulate update error code"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateUpdateErrorCode', $event.target.checked)"
                :checked="form.security.simulation.simulateUpdateErrorCode"
              />
            </template>

            <template #description>
              Simulates a GoogleUpdateErrorCode error by the update check. Must be supplied with |kSimulateUpdateHresult| switch.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateUpdateHresult"
            label="Simulate update hresult"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateUpdateHresult', $event.target.checked)"
                :checked="form.security.simulation.simulateUpdateHresult"
              />
            </template>

            <template #description>
              Simulates a specific HRESULT error code returned by the update check.
              If the switch value is not specified (as hex) then it defaults to E_FAIL.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateUpgrade"
            label="Simulate update"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateUpgrade', $event.target.checked)"
                :checked="form.security.simulation.simulateUpgrade"
              />
            </template>

            <template #description>
              Simulates an update being available.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Other</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="remoteAllowOrigins"
            label="Remote allow origins"
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.remoteAllowOrigins', $event.target.value)"
                :value="form.security.remoteAllowOrigins"
              />
            </template>

            <template #description>
              Enables web socket connections from the specified origins only. '*' allows any origin.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableWebSecurity"
            label="Disable Web Security"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableWebSecurity', $event.target.checked)"
                :checked="form.security.disableWebSecurity"
              />
            </template>

            <template #description>
              Don't enforce the same-origin policy; meant for website testing only.
              This switch has no effect unless --user-data-dir (as defined by the content embedder)
              is also present.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disabledCookieEncryption"
            label="Disable Cookie Encryption"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disabledCookieEncryption', $event.target.checked)"
                :checked="form.security.disabledCookieEncryption"
              />
            </template>

            <template #description>
              Whether cookies stored as part of user profile are encrypted.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="enableExperimentalCookieFeatures"
            label="Enable experimental cookie features"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.enableExperimentalCookieFeatures', $event.target.checked)"
                :checked="form.security.enableExperimentalCookieFeatures"
              />
            </template>

            <template #description>
              Flag that turns on a group of experimental/newly added cookie-related features together,
              as a convenience for e.g. testing, to avoid having to set multiple switches
              individually which may be error-prone (not to mention tedious). There is not a
              corresponding switch to disable all these features, because that is discouraged,
              and for testing purposes you'd need to switch them off individually to identify
              the problematic feature anyway.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableDatabases"
            label="Disable Databases"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableDatabases', $event.target.checked)"
                :checked="form.security.disableDatabases"
              />
            </template>

            <template #description>
              Disables HTML5 DB support.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableLocalStorage"
            label="Disable Local Storage"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableLocalStorage', $event.target.checked)"
                :checked="form.security.disableLocalStorage"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="unlimitedStorage"
            label="Unlimited Storage"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.unlimitedStorage', $event.target.checked)"
                :checked="form.security.unlimitedStorage"
              />
            </template>

            <template #description>
              Overrides per-origin quota settings to unlimited storage for any apps/origins.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableDomainReliability"
            label="Disable domain reliability"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableDomainReliability', $event.target.checked)"
                :checked="form.security.disableDomainReliability"
              />
            </template>

            <template #description>
              Disables Domain Reliability Monitoring
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="enablePotentiallyAnnoyingSecurityFeatures"
            label="Enable Potentially Annoying Security Features"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.enablePotentiallyAnnoyingSecurityFeatures', $event.target.checked)"
                :checked="form.security.enablePotentiallyAnnoyingSecurityFeatures"
              />
            </template>

            <template #description>
              Enables a number of potentially annoying security features
              (strict mixed content mode, powerful feature restrictions, etc.)
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableDomainBlockingFor3dApis"
            label="Disable Domain Blocking For 3d APIs"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableDomainBlockingFor3dApis', $event.target.checked)"
                :checked="form.security.disableDomainBlockingFor3dApis"
              />
            </template>

            <template #description>
              Disable the per-domain blocking for 3D APIs after GPU reset.
              This switch is intended only for tests.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disablePopupBlocking"
            label="Disable Popup Blocking"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disablePopupBlocking', $event.target.checked)"
                :checked="form.security.disablePopupBlocking"
              />
            </template>

            <template #description>
              Disable the per-domain blocking for 3D APIs after GPU reset.
              This switch is intended only for tests.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableGaiaServices"
            label="Disable Gaia Services"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableGaiaServices', $event.target.checked)"
                :checked="form.security.disableGaiaServices"
              />
            </template>

            <template #description>
              Disables GAIA services such as enrollment and OAuth session restore.
              Used by 'fake' telemetry login.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableV8IdleTasks"
            label="Disable V8 Idle tasks"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableV8IdleTasks', $event.target.checked)"
                :checked="form.security.disableV8IdleTasks"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableHidBlocklist"
            label="Disable HID Blocklist"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableHidBlocklist', $event.target.checked)"
                :checked="form.security.disableHidBlocklist"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableHidDetectionOnOobe"
          label="Disable HID Detection on OOBE"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableHidDetectionOnOobe', $event.target.checked)"
              :value="form.security.disableHidDetectionOnOobe"
            />
          </template>

          <template #description>
            Disables HID-detection OOBE screen.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableUsbKeyboardDetect"
          label="Disable USB keyboard detect"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableUsbKeyboardDetect', $event.target.checked)"
              :value="form.security.disableUsbKeyboardDetect"
            />
          </template>

          <template #description>
            Disables the USB keyboard detection for blocking the OSK on Win8+.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableSigninScopedDeviceId"
          label="Disable sign in scoped device ID"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableSigninScopedDeviceId', $event.target.checked)"
              :value="form.security.disableSigninScopedDeviceId"
            />
          </template>

          <template #description>
            Disables sending signin scoped device id to LSO with refresh token request.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableArcCpuRestriction"
          label="Disable Arc CPU Restriction"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableArcCpuRestriction', $event.target.checked)"
              :value="form.security.disableArcCpuRestriction"
            />
          </template>

          <template #description>
            Prevents any CPU restrictions being set on ARC[VM].
            Only meant to be used by tests as some tests may time out if the ARC container is throttled.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="reportVp9AsAnUnsupportedMimeType"
          label="Report vp9 as an unsupported MIME type"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.reportVp9AsAnUnsupportedMimeType', $event.target.checked)"
              :value="form.security.reportVp9AsAnUnsupportedMimeType"
            />
          </template>

          <template #description>
            Force to report VP9 as an unsupported MIME type.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="safebrowsingEnableEnhancedProtection"
          label="Safe browsing enable enhanced protection"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.safebrowsingEnableEnhancedProtection', $event.target.checked)"
              :value="form.security.safebrowsingEnableEnhancedProtection"
            />
          </template>

          <template #description>
            Enable Safe Browsing Enhanced Protection.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="safebrowsingManualDownloadBlacklist"
          label="Safe browsing manual download black list"
        >
          <template #default>
            <base-input
              @change="onChangeField('security.safebrowsingManualDownloadBlacklist', $event.target.value)"
              :value="form.security.safebrowsingManualDownloadBlacklist"
            />
          </template>

          <template #description>
            List of comma-separated sha256 hashes of executable files which the download-protection service should treat as
            "dangerous." For a file to show a warning, it also must be considered a dangerous filetype and not be
            allowlisted otherwise (by signature or URL) and must be on a supported OS. Hashes are in hex. This is used
            for manual testing when looking for ways to by-pass download protection
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableAppContentVerification"
          label="Disable App Content Verification"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableAppContentVerification', $event.target.checked)"
              :value="form.security.disableAppContentVerification"
            />
          </template>

          <template #description>
            Whether to disable app content verification when testing changes locally on Chromebox for Meetings hardware.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableCheckerImaging"
          label="Disable Checker Imaging"
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableCheckerImaging', $event.target.checked)"
              :value="form.security.disableCheckerImaging"
            />
          </template>

          <template #description>
            Disabled defering all image decodes to the image decode service,
            ignoring DecodingMode preferences specified on PaintImage
          </template>
        </base-input-group>
      </a-col>
    </a-row>
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
