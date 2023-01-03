export const CONFIG_INSTANCE_FORM = () => ({
    name: '',
    screen: {
        // --window-size (manual)
        width: 1440,
        height: 900,

        /**
         * Tells chrome to interpret events from these devices as touch events.
         * Only available with XInput 2 (i.e. X server 1.8 or above). The id's of the devices can be retrieved from 'xinput list'.
         */
        touchDevices: null, // --touch-devices

        // Enable support for touch event feature detection.
        touchEvents: null, // --touch-events
    },
    proxy: {
        // --proxy-server (manual)
        proxyEnabled: false,
        proxyType: 'http',
        proxyHost: null,
        proxyPort: null,
        proxyAuthEnabled: false,
        proxyUsername: null,
        proxyPassword: null,
    },
    identity: {
        // A string used to override the default user agent with a custom one.
        userAgent: null, // --user-agent

        // Set when Chromium should use a mobile user agent.
        useMobileUserAgent: false, // --use-mobile-user-agent

        /**
         * Reduce the minor version number in the User-Agent string. This flag implements phase 4 of User-Agent
         * reduction: https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html.
         */
        reduceUserAgentMinorVersion: false, // --reduce-user-agent-minor-version

        /**
         * Reduce the platform and oscpu in the desktop User-Agent string. This flag implements phase 5 of User-Agent
         * reduction: https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html.
         */
        reduceUserAgentPlatformOscpu: false, // --reduce-user-agent-platform-oscpu
    },
    system: {
        timezone: {
            // TZ (manual)
            timezone: 'Europe/Warsaw',

            // Disables fine grained time zone detection.
            disableFineGrainedTimeZoneDetection: false, // --disable-fine-grained-time-zone-detection

            // Disables per-user timezone.
            disablePerUserTimezone: false, // --disable-per-user-timezone

            // The time zone to use for testing. Passed to renderers and plugins on startup.
            timeZoneForTesting: null, // --time-zone-for-testing
        },

        language: {
            acceptLang: 'en', // --accept-lang

            /**
             * Reduce the accept-language http header, and only send one language in the request
             * header: https://github.com/Tanych/accept-language.
             */
            reduceAcceptLanguage: false, // --reduce-accept-language

            // Default country code to be used for search engine localization
            defaultCountryCode: null, // --default-country-code
        },
    },
    fonts: {
        // Disables remote web font support. SVG font should always work whether this option is specified or not.
        disableRemoteFonts: false, // --disable-remote-fonts

        /**
         * Force disables font subpixel positioning.
         * This affects the character glyph sharpness, kerning, hinting and layout.
         */
        disableFontSubpixelPositioning: false, // --disable-font-subpixel-positioning

        // Disables LCD text.
        disableLcdText: false, // --disable-lcd-text

        // Disable the creation of compositing layers when it would prevent LCD text.
        disablePreferCompositingToLcdText: false, // --disable-prefer-compositing-to-lcd-text

        // This switch disables the ScrollToTextFragment feature.
        disableScrollToTextFragment: false, // --disable-scroll-to-text-fragment

        // Enable font antialiasing for pixel tests.
        enableFontAntialiasing: false, // --enable-font-antialiasing
    },
    javascript: {
        // Disable the latest shipping ECMAScript 6 features.
        disableJavascriptHarmonyShipping: false, // --disable-javascript-harmony-shipping

        // Enables experimental Harmony (ECMAScript 6) features
        javascriptHarmony: false, // --javascript-harmony

        // Specifies the flags passed to JS engine.
        jsFlags: null, // --js-flags
    },
    extensions: {
        // Disable extensions.
        disableExtensions: false, // --disable-extensions

        // Disable extensions except those specified in a comma-separated list.
        disableExtensionsExcept: null, // --disable-extensions-except

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

        listAudioDevices: null, // --list-audio-devices

        // Comma-separated list of paths to apps to load at startup. The first app in the list will be launched.
        loadApps: null, // --load-apps

        // Comma-separated list of paths to extensions to load at startup.
        loadExtension: null, // --load-extension
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

        /*
        * Disables client-visible 3D APIs, in particular WebGL and Pepper 3D.
        * This is controlled by policy and is kept separate from the other enable/disable
        * switches to avoid accidentally regressing the policy support for controlling access
        * to these APIs
        * */
        disabled3DApis: true, // --disable-3d-apis

        // Disables touch event based drag and drop.
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

        /**
         * Disable one or more Blink runtime-enabled features. Use names from
         * runtime_enabled_features.json5, separated by commas.
         * Applied after kEnableBlinkFeatures, and after other flags that change these features.
         */
        disableBlinkFeatures: false, // --disable-blink-features
    },
    devices: {
        // Adds fake Bluetooth devices to the quick settings menu.
        qsAddFakeBluetoothDevices: null, // --qs-add-fake-bluetooth-devices

        // Adds fake Cast devices to the quick settings menu
        qsAddFakeCastDevices: null, // --qs-add-fake-cast-devices
    },
    security: {
        ssl: {
            //Specifies the maximum SSL/TLS version ("tls1.2" or "tls1.3").
            sslVersionMax: null, // --ssl-version-max
            // // Specifies the minimum SSL/TLS version ("tls1.2" or "tls1.3").
            sslVersionMin: null,	// --ssl-version-min
        },

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
             * Enforces a one-site-per-process security policy: * Each renderer process, for its whole lifetime,
             * is dedicated to rendering pages for just one site. * Thus, pages from different sites are never in
             * the same process. * A renderer process's access rights are restricted based on its site.
             * * All cross-site navigations force process swaps. * <iframe>s are rendered out-of-process
             * whenever the src=is cross-site. More details here: -
             * https://www.chromium.org/developers/design-documents/site-isolation -
             * https://www.chromium.org/developers/design-documents/process-models -
             * The class comment in site_instance.h, listing the supported process models.
             * IMPORTANT: this isn't to be confused with --process-per-site (which is about process consolidation, not isolation).
             * You probably want this one.
             */
            sitePerProcess: true, // --site-per-process

            // Runs the renderer and plugins in the same process as the browser
            singleProcess: false, // --single-process

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

            /**
             * Disables the automatic origin isolation of web platform test domains.
             * We normally origin-isolate them for better test coverage, but tests of opt-in
             * origin isolation need to disable this.
             */
            disableAutoWptOriginIsolation: false, // --disable-auto-wpt-origin-isolation
        },

        fakes: {
            // Replaces the existing codecs supported in peer connection with a single fake codec entry that create a fake video encoder and decoder.
            useFakeCodecForPeerConnection: false, // --use-fake-codec-for-peer-connection

            /**
             * Use fake device for Media Stream to replace actual camera and microphone.
             * For the list of allowed parameters, see FakeVideoCaptureDeviceFactory::ParseFakeDevicesConfigFromOptionsString().
             */
            useFakeDeviceForMediaStream: false, // --use-fake-device-for-media-stream

            /**
             * Use a fake device for accelerated decoding of MJPEG. This allows, for example, testing of the communication
             * to the GPU service without requiring actual accelerator hardware to be present.
             */
            useFakeMjpegDecodeAccelerator: false, // --use-fake-mjpeg-decode-accelerator

            /**
             * Bypass the FedCM account selection dialog. If a value is provided for this switch,
             * that account ID is selected, otherwise the first account is chosen.
             */
            useFakeUiForFedcm: false, // --use-fake-ui-for-fedcm

            /**
             * Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC).
             * Works with --use-fake-device-for-media-stream.
             */
            useFakeUiForMediaStream: false, // --use-fake-ui-for-media-stream

            /**
             * Play a .wav file as the microphone. Note that for WebRTC calls we'll treat the bits as if they came from
             * the microphone, which means you should disable audio processing (lest your audio file will play back distorted).
             * The input file is converted to suit Chrome's audio buses if necessary, so most sane .wav files should work.
             * You can pass either <path> to play the file looping or <path>%noloop to stop after playing the file to completion.
             */
            useFileForFakeAudioCapture: false, // --use-file-for-fake-audio-capture
        },

        simulation: {
            // Simulates a critical update being available.
            simulateCriticalUpdate: false, // --simulate-critical-update

            // Simulates that elevation is needed to recover upgrade channel.
            simulateElevatedRecovery: false, // --simulate-elevated-recovery

            // Simulates that current version is outdated.
            simulateOutdated: false, // --simulate-outdated

            // Simulates that current version is outdated and auto-update is off.
            simulateOutdatedNoAu: false, // --simulate-outdated-no-au

            // Simulates a GoogleUpdateErrorCode error by the update check. Must be supplied with |kSimulateUpdateHresult| switch.
            simulateUpdateErrorCode: false, // --simulate-update-error-code

            /**
             * Simulates a specific HRESULT error code returned by the update check.
             * If the switch value is not specified (as hex) then it defaults to E_FAIL.
             */
            simulateUpdateHresult: false, // --simulate-update-hresult

            // Simulates an update being available.
            simulateUpgrade: false, // --simulate-upgrade
        },

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

        // Overrides per-origin quota settings to unlimited storage for any apps/origins.
        unlimitedStorage: false, // --unlimited-storage

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

        // Prevents any CPU restrictions being set on ARC[VM]. Only meant to be used by tests as some tests may time out if the ARC container is throttled.
        disableArcCpuRestriction: false, // --disable-arc-cpu-restriction

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

        // Whether to disable app content verification when testing changes locally on Chromebox for Meetings hardware.
        disableAppContentVerification: false, // --disable-app-content-verification

        /**
         * Disabled defering all image decodes to the image decode service,
         * ignoring DecodingMode preferences specified on PaintImage
         */
        disableCheckerImaging: false, // --disable-checker-imaging
    },
    render: {
        pepper: {
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
        },

        decode: {
            // Disable hardware acceleration of mjpeg decode for captured frame, where available.
            disableAcceleratedMjpegDecode: false, // --disable-accelerated-mjpeg-decode

            // Disables hardware acceleration of video decode, where available
            disableAcceleratedVideoDecode: false, // --disable-accelerated-video-decode

            // Disables hardware acceleration of video encode, where available.
            disableAcceleratedVideoEncode: false, // --disable-accelerated-video-encode
        },

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

            // Set the antialiasing method used for webgl. (none, explicit, implicit)
            webglAntialiasingMode: false, // --webgl-antialiasing-mode

            // Set a default sample count for webgl if msaa is enabled..
            webglMsaaSampleCount: null, // --webgl-msaa-sample-count
        },

        gl: {
            /**
             * Disables GL drawing operations which produce pixel output.
             * With this the GL output will not be correct but tests will run faster.
             */
            disableGlDrawingForTests: false, // --disable-gl-drawing-for-tests

            // Disables specified comma separated GL Extensions if found.
            disableGlExtensions: false, // --disable-gl-extensions

            // Disable the GLSL translator.
            disableGlslTranslator: false, // --disable-glsl-translator
        },

        webview: {
            // Disables WebView from checking for app recovery mitigations.
            webviewDisableAppRecovery: false, // --webview-disable-app-recovery

            // Disables throttling querying apps package names allowlist components in WebView clients.
            webviewDisablePackageAllowlistThrottling: false, // --webview-disable-package-allowlist-throttling

            // Used to disable safebrowsing functionality in webview
            webviewDisableSafebrowsingSupport: false, // --webview-disable-safebrowsing-support

            // Enables WebView to check for app recovery mitigations.
            webviewEnableAppRecovery: false, // --webview-enable-app-recovery

            /**
             * Enables modern SameSite cookie behavior (as opposed to legacy behavior).
             * This is used for WebView versions prior to when the modern behavior will be enabled by default.
             * This enables the same-site-by-default-cookies, cookies-without-SameSite-must-be-secure,
             * and schemeful-same-site features.
             */
            webviewEnableModernCookieSameSite: false, // --webview-enable-modern-cookie-same-site

            // Enables MPArch-based FencedFrames. This also implies PrivacySandboxAdsAPIsOverride and SharedStorageAPI.
            webviewMparchFencedFrames: false, // --webview-mparch-fenced-frames

            // Enables SafeBrowsing and causes WebView to treat all resources as malicious. Use care: this will block all resources from loading.
            webviewSafebrowsingBlockAllResources: false, // --webview-safebrowsing-block-all-resources

            webviewSandboxedRenderer: false, // --webview-sandboxed-renderer

            // Enables use selective image inversion to automatically darken page, it will be used when WebView is in dark mode, but website doesn't provide dark style.
            webviewSelectiveImageInversionDarkening: false, // --webview-selective-image-inversion-darkening

            // Enables MPArch-based FencedFrames. This also implies PrivacySandboxAdsAPIsOverride and SharedStorageAPI.
            webviewShadowDomFencedFrames: false, // --webview-shadow-dom-fenced-frames
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
            disableWebrtcHwEncoding: false, // --disable-webrtc-hw-encoding

            /**
             * Sets the delay (in seconds) between proactive prunings of remote-bound WebRTC event logs which are pending upload.
             * All positive values are legal. All negative values are illegal, and ignored.
             * If set to 0, the meaning is "no proactive pruning".
             */
            webrtcEventLogProactivePruningDelta: null, // --webrtc-event-log-proactive-pruning-delta

            // WebRTC event logs will only be uploaded if the conditions hold for this many milliseconds.
            webrtcEventLogUploadDelayMs: null, // --webrtc-event-log-upload-delay-ms

            // Normally, remote-bound WebRTC event logs are uploaded only when no peer connections are active. With this flag, the upload is never suppressed.
            webrtcEventLogUploadNoSuppression: false, // --webrtc-event-log-upload-no-suppression

            /**
             * Enable capture and local storage of WebRTC event logs without visiting chrome://webrtc-internals.
             * This is useful for automated testing. It accepts the path to which the local logs would be stored.
             * Disabling is not possible without restarting the browser and relaunching without this flag.
             */
            webrtcEventLogging: null, // --webrtc-event-logging

            // Override WebRTC IP handling policy to mimic the behavior when WebRTC IP handling policy is specified in Preferences.
            webrtcIpHandlingPolicy: null, // --webrtc-ip-handling-policy

            /**
             * Configure the maximum CPU time percentage of a single core that can be consumed for desktop capturing.
             * Default is 50. Set 100 to disable the throttling of the capture.
             */
            webrtcMaxCpuConsumptionPercentage: null, // --webrtc-max-cpu-consumption-percentage
        },

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

        // Disables specified comma separated ANGLE features if found.
        disableAngleFeatures: false, // --disable-angle-features
    },
    canvas: {
        // Enable in-progress canvas 2d API methods BeginLayer and EndLayer.
        enabled2DLayers: false, // --canvas-2d-layers

        // Disable antialiasing on 2d canvas.
        disableCanvasAa: false, // --disable-canvas-aa

        // Disable antialiasing on 2d canvas clips
        disabled2DCanvasClipAa: false, // --disable-2d-canvas-clip-aa

        // Disables Canvas2D rendering into a scanout buffer for overlay support.
        disabled2DCanvasImageChromium: false, // --disable-2d-canvas-image-chromium

        // Taints all <canvas> elements, regardless of origin.
        disableReadingFromCanvas: false, // --disable-reading-from-canvas

        // Disable gpu-accelerated 2d canvas.
        disabledAccelerated2DCanvas: false, // --disable-accelerated-2d-canvas

        // Enable accelerated 2D canvas.
        enableAccelerated2dCanvas: false, // --enable-accelerated-2d-canvas
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

        // Disable auto-reload of error pages.
        disableAutoReload: false, // --disable-auto-reload

        // Disables the BackForwardCache feature.
        disableBackForwardCache: false, // --disable-back-forward-cache

        /**
         * Disable several subsystems which run network requests in the background.
         * This is for use when doing network performance testing to avoid noise in the measurements.
         */
        disableBackgroundNetworking: false, // --disable-background-networking

        // Disable task throttling of timer tasks from background pages.
        disableBackgroundTimerThrottling: false, // --disable-background-timer-throttling
    }
})
