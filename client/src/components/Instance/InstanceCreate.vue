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

    <label for="systemLanguage">Language</label>
    <input id="systemLanguage" type="text" v-model="form.system.language">

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

    // --reduce-accept-language ⊗	Reduce the accept-language http header, and only send one language in the request header: https://github.com/Tanych/accept-language. ↪
    // --reduce-user-agent-minor-version ⊗	Reduce the minor version number in the User-Agent string. This flag implements phase 4 of User-Agent reduction: https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html. ↪
    // --reduce-user-agent-platform-oscpu ⊗	Reduce the platform and oscpu in the desktop User-Agent string. This flag implements phase 5 of User-Agent reduction: https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html. ↪
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

    // Disables fine grained time zone detection.
    disableFineGrainedTimeZoneDetection: false, // --disable-fine-grained-time-zone-detection

    // Disables per-user timezone.
    disablePerUserTimezone: false, // --disable-per-user-timezone

    language: 'gb',

    // Default country code to be used for search engine localization
    defaultCountryCode: null, // --default-country-code

    // Disable antialiasing on 2d canvas.
    disableCanvasAa: false, // --disable-canvas-aa
  },
  canvas: {
    // Enable in-progress canvas 2d API methods BeginLayer and EndLayer.
    enabled2DLayers: false, // --canvas-2d-layers

    // Disable antialiasing on 2d canvas clips
    disabled2DCanvasClipAa: false, // --disable-2d-canvas-clip-aa

    // Disables Canvas2D rendering into a scanout buffer for overlay support.
    disabled2DCanvasImageChromium: false, // --disable-2d-canvas-image-chromium

    // Taints all <canvas> elements, regardless of origin.
    disableReadingFromCanvas: false, // --disable-reading-from-canvas

    /*
    * Disables client-visible 3D APIs, in particular WebGL and Pepper 3D.
    * This is controlled by policy and is kept separate from the other enable/disable
    * switches to avoid accidentally regressing the policy support for controlling access
    * to these APIs
    * */
    disabled3DApis: true, // --disable-3d-apis

    // Disable gpu-accelerated 2d canvas.
    disabledAccelerated2DCanvas: false, // --disable-accelerated-2d-canvas

    // Enable accelerated 2D canvas.
    enableAccelerated2dCanvas: false, // --enable-accelerated-2d-canvas

    // Disable hardware acceleration of mjpeg decode for captured frame, where available.
    disableAcceleratedMjpegDecode: false, // --disable-accelerated-mjpeg-decode

    // Disables hardware acceleration of video decode, where available
    disableAcceleratedVideoDecode: false, // --disable-accelerated-video-decode

    // Disables hardware acceleration of video encode, where available.
    disableAcceleratedVideoEncode: false, // --disable-accelerated-video-encode

    // Disables specified comma separated ANGLE features if found.
    disableAngleFeatures: false, // --disable-angle-features

    // Whether to disable app content verification when testing changes locally on Chromebox for Meetings hardware.
    disableAppContentVerification: false, // --disable-app-content-verification

    // Prevents any CPU restrictions being set on ARC[VM]. Only meant to be used by tests as some tests may time out if the ARC container is throttled.
    disableArcCpuRestriction: false, // --disable-arc-cpu-restriction

    // Disable auto-reload of error pages.
    disableAutoReload: false, // --disable-auto-reload

    /**
     * Disables the automatic origin isolation of web platform test domains.
     * We normally origin-isolate them for better test coverage, but tests of opt-in
     * origin isolation need to disable this.
     */
    disableAutoWptOriginIsolation: false, // --disable-auto-wpt-origin-isolation

    // Disables the BackForwardCache feature.
    disableBackForwardCache: false, // --disable-back-forward-cache

    /**
     * Disable several subsystems which run network requests in the background.
     * This is for use when doing network performance testing to avoid noise in the measurements.
     */
    disableBackgroundNetworking: false, // --disable-background-networking

    // Disable task throttling of timer tasks from background pages.
    disableBackgroundTimerThrottling: false, // --disable-background-timer-throttling

    /**
     * Disable one or more Blink runtime-enabled features. Use names from
     * runtime_enabled_features.json5, separated by commas.
     * Applied after kEnableBlinkFeatures, and after other flags that change these features.
     */
    disableBlinkFeatures: false, // --disable-blink-features

    /**
     * Disabled defering all image decodes to the image decode service,
     * ignoring DecodingMode preferences specified on PaintImage
     */
    disableCheckerImaging: false, // --disable-checker-imaging
  },
  fonts: {
    // Disables remote web font support. SVG font should always work whether this option is specified or not.
    disableRemoteFonts: false, // --disable-remote-fonts

    /**
     * Force disables font subpixel positioning.
     * This affects the character glyph sharpness, kerning, hinting and layout.
     */
    disableFontSubpixelPositioning: false, // --disable-font-subpixel-positioning

    // Disable the creation of compositing layers when it would prevent LCD text.
    disablePreferCompositingToLcdText: false, // --disable-prefer-compositing-to-lcd-text

    // Disables LCD text.
    disableLcdText: false, // --disable-lcd-text

    // This switch disables the ScrollToTextFragment feature.
    disableScrollToTextFragment: false, // --disable-scroll-to-text-fragment

    // Enable font antialiasing for pixel tests.
    enableFontAntialiasing: false, // --enable-font-antialiasing
  },
  extensions: {
    // Disable extensions.
    disableExtensions: false, // --disable-extensions

    // Disable extensions except those specified in a comma-separated list.
    disableExtensionsExcept: false, // --disable-extensions-except

    /**
     * Disable checking for user opt-in for extensions that want to
     * inject script into file URLs (ie, always allow it).
     * This is used during automated testing
     */
    disableExtensionsFileAccessCheck: false, // --disable-extensions-file-access-check

    // Disable the net::URLRequestThrottlerManager functionality for requests originating from extensions.
    disableExtensionsHttpThrottling: false, // --disable-extensions-http-throttling

    // Comma-separated list of feature names to disable. See also kEnableFeatures.
    disableFeatures: null, // --disable-features

    /**
     * Disables installation of default apps on first run.
     * This is used during automated testing.
     */
    disableDefaultApps: false, // --disable-default-apps

    /**
     * Disable default component extensions with background pages - useful
     * for performance tests where these pages may interfere with perf results.
     */
    disableComponentExtensionsWidthBackgroundPages: false, // --disable-component-extensions-with-background-pages

    // Enables extension APIs that are in development.
    enableExperimentalExtensionApis: false, // enable-experimental-extension-apis

    /**
     * Writes open and installed web apps for each profile to the specified file without launching a new browser
     * window or tab. Pass a absolute file path to specify where to output the information.
     * Can be used together with optional --profile-base-name switch to only write information for a given profile.
     */
    listApps: null, // --list-apps

    listAudioDevices: null, // --list-audio-devices\

    // Comma-separated list of paths to apps to load at startup. The first app in the list will be launched.
    loadApps: false, // --load-apps

    // Comma-separated list of paths to extensions to load at startup.
    loadExtension: false, // --load-extension
  },
  render: {
    // Disable Pepper3D.
    disablePepper3d: false, // --disable-pepper-3d

    // Disable Image Chromium for Pepper 3d.
    disablePepper3dImageChromium: false, // --disable-pepper-3d-image-chromium

    /**
     * Disables the code path that makes Pepper use the MojoVideoDecoder for hardware
     * accelerated video decoding.
     * It overrides the value of the kUseMojoVideoDecoderForPepper feature flag.
     */
    disableUseMojoVideoDecoderForPepper: false, // --disable-use-mojo-video-decoder-for-pepper

    // Disables layer-edge anti-aliasing in the compositor.
    disableCompositedAntialiasing: false, // --disable-composited-antialiasing

    // Disables use of D3D11.
    disableD3d11: false, // --disable-d3d11

    // Disables DirectComposition surface.
    disableDirectComposition: false, // --disable-direct-composition

    // Disables using DirectComposition video overlays, even if hardware overlays are supported.
    disableDirectCompositionVideoOverlays: false, // --disable-direct-composition-video-overlays

    /**
     * Disables begin frame limiting in both cc scheduler and display scheduler.
     * Also implies --disable-gpu-vsync (see //ui/gl/gl_switches.h).
     */
    disableFrameRateLimit: false, // --disable-frame-rate-limit

    // Turns off the accessibility in the renderer.
    disableRendererAccessibility: false, // --disable-renderer-accessibility

    // Prevent renderer process backgrounding when set.
    disableRendererBackgrounding: false, // --disable-renderer-backgrounding

    /**
     * Disables GL drawing operations which produce pixel output.
     * With this the GL output will not be correct but tests will run faster.
     */
    disableGlDrawingForTests: false, // --disable-gl-drawing-for-tests

    // Disables specified comma separated GL Extensions if found.
    disableGlExtensions: false, // --disable-gl-extensions

    // Disable the GLSL translator.
    disableGlslTranslator: false, // --disable-glsl-translator

    // Disables Metal's shader cache, using the GPU sandbox to prevent access to it.
    disableMetalShaderCache: false, // --disable-metal-shader-cache

    /**
     * Disables clearing the rendering output of a renderer when it didn't commit
     * new output for a while after a top-frame navigation.
     */
    disableNewContentRenderingTimeout: false, // --disable-new-content-rendering-timeout

    // Disallow image animations to be reset to the beginning to avoid skipping many frames. Only effective if compositor image animations are enabled.
    disableImageAnimationResync: false, // --disable-image-animation-resync

    // Disables the video decoder from drawing to an NV12 textures instead of ARGB.
    disableNv12DxgiVideo: false, // --disable-nv12-dxgi-video

    /**
     * Disable partial raster in the renderer.
     * Disabling this switch also disables the use of persistent gpu memory buffers.
     */
    disablePartialRaster: false, // --disable-partial-raster

    // 	Disables RGBA_4444 textures
    disableRgba4444Textures: false,// --disable-rgba-4444-textures

    // Disables the new rendering algorithm for webrtc, which is designed to improve the rendering smoothness.
    disableRtcSmoothnessAlgorithm: false, // --disable-rtc-smoothness-algorithm

    // Turn off user-defined name hashing in shaders.
    disableShaderNameHashing: false, // --disable-shader-name-hashing

    /**
     * Do not use runtime-detected high-end CPU optimizations in Skia.
     * This is useful for forcing a baseline code path for e.g. web tests.
     */
    disableSkiaRuntimeOpts: false, // --disable-skia-runtime-opts

    // Disable smooth scrolling for testing.
    disableSmoothScrolling: false, //--disable-smooth-scrolling

    /**
     * For tests, to disable falling back to software compositing if the GPU Process
     * has crashed, and reached the GPU Process crash limit.
     */
    disableSoftwareCompositingFallback: false,

    // Disables the use of a 3D software rasterizer.
    disableSoftwareRasterizer: false, // --disable-software-rasterizer

    gpu: {
      /**
       * Disables GPU hardware acceleration.
       * If software renderer is not in place, then the GPU process won't launch.
       */
      disableGpu: false, // --disable-gpu

      // Prevent the compositor from using its GPU implementation.
      disableGpuCompositing: false, // --disable-gpu-compositing

      // Disable workarounds for various GPU driver bugs.
      disableGpuDriverBugWorkarounds: false, // --disable-gpu-driver-bug-workarounds

      // Disable proactive early init of GPU process.
      disableGpuEarlyInit: false, // --disable-gpu-early-init

      // Do not force that all compositor resources be backed by GPU memory buffers.
      disableGpuMemoryBufferCompositorResources: false, // --disable-gpu-memory-buffer-compositor-resources

      // Disable GpuMemoryBuffer backed VideoFrames.
      disableGpuMemoryBufferVideoFrames: false, // --disable-gpu-memory-buffer-video-frames

      // For tests, to disable the limit on the number of times the GPU process may be restarted.
      disableGpuProcessCrashLimit: false, // --disable-gpu-process-crash-limit

      // Disables the non-sandboxed GPU process for DX12 info collection
      disableGpuProcessForDx12InfoCollection: false, // --disable-gpu-process-for-dx12-info-collection

      // Turn off gpu program caching
      disableGpuProgramCache: false, // --disable-gpu-program-cache

      /**
       * Disable GPU rasterization, i.e. rasterize on the CPU only
       * Overrides the kEnableGpuRasterization flag.
       */
      disableGpuRasterization: false, // --disable-gpu-rasterization

      // Disables the GPU process sandbox.
      disableGpuSandbox: false, // --disable-gpu-sandbox

      // Disables the GPU shader on disk cache.
      disableGpuShaderDiskCache: false, // --disable-gpu-shader-disk-cache

      // Stop the GPU from synchronizing presentation with vblank.
      disableGpuVsync: false, // --disable-gpu-vsync

      // Disable the thread that crashes the GPU process if it stops responding to messages.
      disableGpuWatchdog: false, // --disable-gpu-watchdog

      // Select a different set of GPU blocklist entries with the specified test_group ID.
      gpuBlocklistTestGroup: null, // --gpu-blocklist-test-group

      // Passes the active graphics device id from browser process to info collection GPU process.
      gpuDeviceId: null, // --gpu-device-id

      /**
       * Allows explicitly specifying the shader disk cache size for embedded devices.
       * Default value is 6MB. On Android, 2MB is default and 128KB for low-end devices.
       */
      gpuDiskCacheSizeKb: null, // --gpu-disk-cache-size-kb

      // Passes the active graphics driver version from browser process to info collection GPU process.
      gpuDriverVersion: null,

      // Extra command line options for launching the GPU process (normally used for debugging). Use like renderer-cmd-prefix.
      gpuLauncher: null, // --gpu-launcher

      // Passes encoded GpuPreferences to GPU process.
      gpuPreferences: null, // --gpu-preferences

      // Sets the maximum size of the in-memory gpu program cache, in kb
      gpuProgramCacheSizeKb: null,

      // Allows shmat() system call in the GPU sandbox.
      gpuSandboxAllowSysvShm: false, // --gpu-sandbox-allow-sysv-shm

      // Starts the GPU sandbox before creating a GL context.
      gpuSandboxStartEarly: false, // --gpu-sandbox-start-early

      // Causes the GPU process to display a dialog on launch.
      gpuStartupDialog: false, // --gpu-startup-dialog

      // Passes the active graphics sub system id from browser process to info collection GPU process.
      gpuSubSystemId: false, // --gpu-sub-system-id

      // Passes the active graphics vendor id from browser process to info collection GPU process.
      gpuVendorId: false, // --gpu-vendor-id

      // Run the GPU process as a thread in the browser process.
      inProcessGpu: false, // --in-process-gpu
    },

    webgl: {
      // Disable all versions of WebGL.
      disableWebgl: false, // --disable-webgl

      // Disables WebGL rendering into a scanout buffer for overlay support.
      disableWebglImageChromium: false, // --disable-webgl-image-chromium

      // Disable WebGL2.
      disableWebgl2: false, // --disable-webgl2
    }
  },
  api: {
    // Disable FileSystem API.
    disableFileSystem: false, // --disable-file-system

    // Disable Media Session API
    disableMediaSessionApi: false, // --disable-media-session-api

    // Disables the Web Notification and the Push APIs.
    disableNotifications: false, // --disable-notifications

    // Disables the Permissions API.
    disablePermissionsApi: false, // --disable-permissions-api

    // Disables the Presentation API.
    disablePresentationApi: false, // --disable-presentation-api

    // Disables the RemotePlayback API.
    disableRemotePlaybackApi: false, // --disable-remote-playback-api

    // Disable the locking feature of the screen orientation API.
    disableScreenOrientationLock: false, // --disable-screen-orientation-lock

    // 	Disable shared workers.
    disableSharedWorkers: false, // --disable-shared-workers

    // Disables the Web Speech API (both speech recognition and synthesis).
    disableSpeechApi: false, // --disable-speech-api

    // Disables the speech synthesis part of Web Speech API.
    disableSpeechSynthesisApi: false, // --disable-speech-synthesis-api

    // Disables touch event based drag and drop. ↪
    disableTouchDragDrop: false, // --disable-touch-drag-drop

    // Disables the check for the system font when specified.
    disableSystemFontCheck: false, // --disable-system-font-check

    // Enables Web Platform features that are in development.
    enableExperimentalWebPlatformFeatures: false, // --enable-experimental-web-platform-features

    // Enables experimental WebAssembly features.
    enableExperimentalWebassemblyFeatures: false, // --enable-experimental-webassembly-features

    // Enables experimental WebAssembly stack switching.
    enableExperimentalWebassemblyStackSwitching: false, // --enable-experimental-webassembly-stack-switching

    /**
     * Enables Privacy Sandbox APIs: Attribution Reporting,Fledge, Topics, Fenced Frames,
     * Shared Storage, Private Aggregation, and their associated features.
     */
    enablePrivacySandboxAdsApis: false, // --enable-privacy-sandbox-ads-apis

    // Enable screen capturing support for MediaStream API.
    enableUsermediaScreenCapturing: false, // --enable-usermedia-screen-capturing
  },
  security: {
    // Enables web socket connections from the specified origins only. '*' allows any origin.
    remoteAllowOrigins: false, // --remote-allow-origins

    /**
     *  Don't enforce the same-origin policy; meant for website testing only.
     *  This switch has no effect unless --user-data-dir (as defined by the content embedder)
     *  is also present.
     */
    disableWebSecurity: false, // --disable-web-security

    // Whether cookies stored as part of user profile are encrypted.
    disabledCookieEncryption: false, // --disable-cookie-encryption

    /**
     * Flag that turns on a group of experimental/newly added cookie-related features together,
     * as a convenience for e.g. testing, to avoid having to set multiple switches
     * individually which may be error-prone (not to mention tedious). There is not a
     * corresponding switch to disable all these features, because that is discouraged,
     * and for testing purposes you'd need to switch them off individually to identify
     * the problematic feature anyway.
     */
    enableExperimentalCookieFeatures: false, // --enable-experimental-cookie-features

    // Disables HTML5 DB support.
    disableDatabases: false, // --disable-databases

    // Disable LocalStorage.
    disableLocalStorage: false, // --disable-local-storage

    // Disables Domain Reliability Monitoring
    disableDomainReliability: false, // --disable-domain-reliability

    /**
     * Enables a number of potentially annoying security features
     * (strict mixed content mode, powerful feature restrictions, etc.)
     */
    enablePotentiallyAnnoyingSecurityFeatures: false, // --enable-potentially-annoying-security-features

    /**
     *  Disable the per-domain blocking for 3D APIs after GPU reset.
     *  This switch is intended only for tests.
     */
    disableDomainBlockingFor3dApis: false, // --disable-domain-blocking-for-3d-apis

    // Disables pop-up blocking.
    disablePopupBlocking: false, // --disable-popup-blocking

    /**
     * Disables GAIA services such as enrollment and OAuth session restore.
     * Used by 'fake' telemetry login.
     */
    disableGaiaServices: false, // --disable-gaia-services

    // Disable V8 idle tasks.
    disableV8IdleTasks: false, // --disable-v8-idle-tasks

    // Disable the HID blocklist.
    disableHidBlocklist: false, // --disable-hid-blocklist

    // Disables HID-detection OOBE screen.
    disableHidDetectionOnOobe: false, // --disable-hid-detection-on-oobe

    // 	Disables the USB keyboard detection for blocking the OSK on Win8+.
    disableUsbKeyboardDetect: false, // --disable-usb-keyboard-detect

    // Disables sending signin scoped device id to LSO with refresh token request.
    disableSigninScopedDeviceId: false, // --disable-signin-scoped-device-id

    // Force to report VP9 as an unsupported MIME type.
    reportVp9AsAnUnsupportedMimeType: false, // --report-vp9-as-an-unsupported-mime-type

    // Enable Safe Browsing Enhanced Protection.
    safebrowsingEnableEnhancedProtection: false, // --safebrowsing-enable-enhanced-protection

    /**
     * List of comma-separated sha256 hashes of executable files which the download-protection service should treat as
     * "dangerous." For a file to show a warning, it also must be considered a dangerous filetype and not be
     * allowlisted otherwise (by signature or URL) and must be on a supported OS. Hashes are in hex. This is used
     * for manual testing when looking for ways to by-pass download protection
     */
    safebrowsingManualDownloadBlacklist: null, // --safebrowsing-manual-download-blacklist

    isolation: {
      /**
       * Enable the "Process Per Site" process model for all domains. This mode consolidates same-site pages so that
       * they share a single process. More details here: - https://www.chromium.org/developers/design-documents/process-models
       * The class comment in site_instance.h, listing the supported process models.
       * IMPORTANT: This isn't to be confused with --site-per-process (which is about isolation, not consolidation).
       * You probably want the other one.
       */
      processPerSite: true, //-- process-per-site

      /**
       * Runs each set of script-connected tabs (i.e., a BrowsingInstance) in its own renderer process.
       * We default to using a renderer process for each site instance (i.e., group of pages from the same
       * registered domain with script connections to each other).
       */
      processPerTab: false, // --process-per-tab

      // Require dedicated processes for a set of origins, specified as a comma-separated list. For example: --isolate-origins=https://www.foo.com,https://www.bar.com
      isolateOrigins: false, // --isolate-origins

      // Enable Isolated App restrictions for a set of origins, specified as a comma-separated list. For example: --isolated-app-origins=https://www.foo.com,https://www.bar.com
      isolatedAppOrigins: false, // --isolated-app-origins

      // Enables APIs guarded with the [IsolatedContext] IDL attribute for the given comma-separated list of origins.
      isolatedContextOrigin: false, // --isolated-context-origins

      /**
       * Enables the web-facing behaviors that will enable origin-isolation by default at some point
       * in the relatively near future. https://crbug.com/1140371
       */
      isolationByDefault: false, // --isolation-by-default

      // Just like kDisableSiteIsolation, but doesn't show the "stability and security will suffer" butter bar warning.
      disableSiteIsolationForPolicy: false, // --disable-site-isolation-for-policy

      /**
       * Disables site isolation. Note that the opt-in
       * (to site-per-process, isolate-origins, etc.) via enterprise policy and/or cmdline takes
       * precedence over the kDisableSiteIsolation switch (i.e. the opt-in takes effect despite
       * potential presence of kDisableSiteIsolation switch). Note that for historic reason
       * the name of the switch misleadingly mentions "trials", but the switch also disables
       * the default site isolation that ships on desktop since M67. The name of the switch
       * is preserved for backcompatibility of chrome://flags.
       */
      disableSiteIsolationTrials: false, // --disable-site-isolation-trials
    },

    simulation: {
      // --simulate-critical-update ⊗	Simulates a critical update being available. ↪
      // --simulate-elevated-recovery ⊗	Simulates that elevation is needed to recover upgrade channel. ↪
      // --simulate-outdated ⊗	Simulates that current version is outdated. ↪
      // --simulate-outdated-no-au ⊗	Simulates that current version is outdated and auto-update is off. ↪
      // --simulate-update-error-code ⊗	Simulates a GoogleUpdateErrorCode error by the update check. Must be supplied with |kSimulateUpdateHresult| switch. ↪
      // --simulate-update-hresult ⊗	Simulates a specific HRESULT error code returned by the update check. If the switch value is not specified (as hex) then it defaults to E_FAIL. ↪
      // --simulate-upgrade ⊗	Simulates an update being available. ↪
    },

    webrtc: {
      /**
       * Disables encryption of RTP Media for WebRTC.
       * When Chrome embeds Content, it ignores this switch on its stable and beta channels.
       */
      disableWebrtcEncryption: false, // --disable-webrtc-encryption
      // Disables HW decode acceleration for WebRTC.
      disableWebrtcHwDecoding: false, // --disable-webrtc-hw-decoding
      // Disables HW encode acceleration for WebRTC.
      disableWebrtcHwEncoding: false // --disable-webrtc-hw-encoding
    }
  },
  javascript: {
    // Disable the latest shipping ECMAScript 6 features.
    disableJavascriptHarmonyShipping: false, // --disable-javascript-harmony-shipping

    // Enables experimental Harmony (ECMAScript 6) features
    javascriptHarmony: false, // --javascript-harmony

    // Specifies the flags passed to JS engine.
    jsFlags: null, // --js-flags
  },
  devices: {
    // Adds fake Bluetooth devices to the quick settings menu.
    qsAddFakeBluetoothDevices: null, // --qs-add-fake-bluetooth-devices

    // Adds fake Cast devices to the quick settings menu
    qsAddFakeCastDevices: null, // --qs-add-fake-cast-devices
  },
  additional: {
    // Disables all experiments set on about:flags.
    noExperiments: false, // --no-experiments ⊗	Disables all experiments

    // Force low-end device mode when set.
    enableLowEndDeviceMode: false, // --enable-low-end-device-mode

    // Enables cros disks fake behavior. If the switch is set, fake cros disk D-Bus client is initialized and USB events do not reach chrome. ↪
    crosDisksFake: false, // --cros-disks-fake

    // Prevents permission prompts from appearing by denying instead of showing prompts.
    denyPermissionPrompts: false, // --deny-permission-prompts

    // Device scale factor passed to certain processes like renderers, etc.
    deviceScaleFactor: null, // --device-scale-factor

    // Disable high-resolution timer on Windows.
    disableHighresTimer: false, // --disable-highres-timer

    // Disables throttling of history.pushState/replaceState calls.
    disablePushstateThrottle: false, // --disable-pushstate-throttle
  }
})

const onSubmit = () => {
  createInstance(form)
}
</script>