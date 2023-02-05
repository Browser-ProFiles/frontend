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

            <template #enDescription>
              Specifies the maximum SSL/TLS version ("tls1.2" or "tls1.3").
            </template>

            <template #ruDescription>
              Указывает максимальную версию SSL/TLS ("tls1.2" или "tls1.3").
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

            <template #enDescription>
              Specifies the minimum SSL/TLS version ("tls1.2" or "tls1.3").
            </template>

            <template #ruDescription>
              Указывает минимальную версию SSL/TLS ("tls1.2" или "tls1.3").
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">{{ $t('form.fields.isolation') }}</h2>

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

            <template #enDescription>
              Enable the "Process Per Site" process model for all domains. This mode consolidates same-site pages so that
              they share a single process. More details here: - https://www.chromium.org/developers/design-documents/process-models
              The class comment in site_instance.h, listing the supported process models. <br>
              <b>IMPORTANT</b>: This isn't to be confused with --site-per-process (which is about isolation, not consolidation).
              You probably want the other one.
            </template>

            <template #ruDescription>
              Включает "Process Per Site" для всех моделей. Этот режим консолидирует страницы same-site чтобы
              они находились в одном процессе. Подробнее: -
              <a href="https://www.chromium.org/developers/design-documents/process-models" target="_blank">https://www.chromium.org/developers/design-documents/process-models</a>
              <br>
              <b>ВАЖНО</b>: Не путайте с --site-per-process (которая заключается в изоляции, а не в консолидации).
              Скорее свсего вы хотите выбрать другой режим
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

            <template #enDescription>
              Enforces a one-site-per-process security policy:

              <br>
              * Each renderer process, for its whole lifetime,
              is dedicated to rendering pages for just one site.
              <br>
              * Thus, pages from different sites are never in
              the same process.
              <br>
              * A renderer process's access rights are restricted based on its site.
              All cross-site navigations force process swaps.
              <br>
              * iframes are rendered out-of-process
              whenever the src=is cross-site.
              <br>

              More details here:
              - <a href="https://www.chromium.org/developers/design-documents/site-isolation" target="_blank">https://www.chromium.org/developers/design-documents/site-isolation</a> <br>
              - <a href="https://www.chromium.org/developers/design-documents/process-models" target="_blank">https://www.chromium.org/developers/design-documents/process-models</a>
              <br>
              The class comment in site_instance.h, listing the supported process models. <br>

              <b>IMPORTANT</b>: this isn't to be confused with --process-per-site (which is about process consolidation, not isolation).
              You probably want this one.
            </template>

            <template #ruDescription>
              Обеспечивает политику безопасности "один сайт на процесс":

              <br>
              * Каждый процесс рендеринга, в течение всего своего срока службы,
              предназначен для рендеринга страниц только одного сайта.
              <br>
              * Таким образом, страницы с разных сайтов никогда не находятся в
              одном и том же процессе.
              <br>
              * Права доступа процесса рендеринга ограничены в зависимости от его сайта.
              Все межсайтовые переходы заставляют менять процессы местами.
              <br>
              * iframe отображаются вне процесса
              всякий раз, когда src= является межсайтовым.
              <br>

              Подробнее:
              - <a href="https://www.chromium.org/developers/design-documents/site-isolation" target="_blank">https://www.chromium.org/developers/design-documents/site-isolation</a> <br>
              - <a href="https://www.chromium.org/developers/design-documents/process-models" target="_blank">https://www.chromium.org/developers/design-documents/process-models</a>
              <br>

              <b>ВАЖНО</b>: Не следует путать с --process-per-site (который относится к консолидации процессов, а не к изоляции).
              Вам, вероятно, нужен этот параметр.
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

            <template #enDescription>
              Runs the renderer and plugins in the same process as the brows
            </template>

            <template #ruDescription>
              Запускает рендерер и плагины в том же процессе, что и браузер
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

            <template #enDescription>
              Runs each set of script-connected tabs (i.e., a BrowsingInstance) in its own renderer process.
              We default to using a renderer process for each site instance (i.e., group of pages from the same
              registered domain with script connections to each other).
            </template>

            <template #ruDescription>
              Запускает каждый набор связанных со сценарием вкладок (т.е. BrowsingInstance) в собственном процессе рендеринга.
              По умолчанию мы используем процесс рендеринга для каждого экземпляра сайта (т.е. группы страниц из одного и того же
              зарегистрированного домена со скриптовыми связями друг с другом).
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolateOrigins"
            label="Isolate Origins"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('security.isolation.isolateOrigins', $event.target.value)"
                :value="form.security.isolation.isolateOrigins"
              />
            </template>

            <template #enDescription>
              Require dedicated processes for a set of origins, specified as a comma-separated list. For example: <br>
              --isolate-origins=https://www.foo.com,https://www.bar.com
            </template>

            <template #ruDescription>
              Требовать выделенные процессы для набора источников, указанных в виде списка, разделенного запятыми. Например: <br>
              --isolate-origins=https://www.foo.com,https://www.bar.com
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolatedAppOrigins"
            label="Isolated App Origins"
            advanced
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.isolation.isolatedAppOrigins', $event.target.value)"
                :value="form.security.isolation.isolatedAppOrigins"
              />
            </template>

            <template #enDescription>
              Enable Isolated App restrictions for a set of origins, specified as a comma-separated list. For example:
              <br>
              --isolated-app-origins=https://www.foo.com,https://www.bar.com
            </template>

            <template #ruDescription>
              Включить ограничения Isolated App для набора источников, указанных в виде списка, разделенного запятыми. Например:
              <br>
              --isolated-app-origins=https://www.foo.com,https://www.bar.com
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="isolatedContextOrigin"
            label="Isolated Context Origin"
            advanced
          >
            <template #afterLabel>
              <base-input
                @change="onChangeField('security.isolation.isolatedContextOrigin', $event.target.value)"
                :value="form.security.isolation.isolatedContextOrigin"
              />
            </template>

            <template #enDescription>
              Enables APIs guarded with the [IsolatedContext] IDL attribute for the given comma-separated list of origins.
            </template>

            <template #ruDescription>
              Включает API, защищенные IDL-атрибутом [IsolatedContext], для заданного списка источников, разделенных запятыми.
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

            <template #enDescription>
              Enables the web-facing behaviors that will enable origin-isolation by default at some point
              in the relatively near future. <a href="https://crbug.com/1140371" target="_blank">https://crbug.com/1140371</a>
            </template>

            <template #ruDescription>
              Включает поведение на веб-сайте, которое в какой-то момент включит изоляцию происхождения по умолчанию
              в относительно недалеком будущем. <a href="https://crbug.com/1140371" target="_blank">https://crbug.com/1140371</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableSiteIsolationForPolicy"
            label="Disable site isolation for policy"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.disableSiteIsolationForPolicy', $event.target.checked)"
                :checked="form.security.isolation.disableSiteIsolationForPolicy"
              />
            </template>

            <template #enDescription>
              Just like kDisableSiteIsolation, but doesn't show the "stability and security will suffer" butter bar warning.
            </template>

            <template #ruDescription>
              Аналогично kDisableSiteIsolation, но не показывает предупреждение "стабильность и безопасность пострадают".
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableSiteIsolationTrials"
            label="Disable site isolation trials"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.disableSiteIsolationTrials', $event.target.checked)"
                :checked="form.security.isolation.disableSiteIsolationTrials"
              />
            </template>

            <template #enDescription>
              Disables site isolation. Note that the opt-in
              (to site-per-process, isolate-origins, etc.) via enterprise policy and/or cmdline takes
              precedence over the kDisableSiteIsolation switch (i.e. the opt-in takes effect despite
              potential presence of kDisableSiteIsolation switch). Note that for historic reason
              the name of the switch misleadingly mentions "trials", but the switch also disables
              the default site isolation that ships on desktop since M67. The name of the switch
              is preserved for backcompatibility of chrome://flags.
            </template>

            <template #ruDescription>
              Отключает изоляцию сайта. Обратите внимание, что выбор
              (для site-per-process, isolate-origins и т.д.) через политику предприятия и/или командную строку имеет приоритет
              приоритет над переключателем kDisableSiteIsolation (т.е. выбор вступает в силу, несмотря на
              потенциальное присутствие переключателя kDisableSiteIsolation). Обратите внимание, что по историческим причинам
              название переключателя вводит в заблуждение, упоминая "испытания", но этот переключатель также отключает
              изоляцию сайта по умолчанию, которая поставляется на рабочий стол начиная с M67. Название переключателя
              сохранено для обеспечения обратной совместимости chrome://flags.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableAutoWptOriginIsolation"
            label="Disable auto wpt origin isolation"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.isolation.disableAutoWptOriginIsolation', $event.target.checked)"
                :checked="form.security.isolation.disableAutoWptOriginIsolation"
              />
            </template>

            <template #enDescription>
              Disables the automatic origin isolation of web platform test domains.
              We normally origin-isolate them for better test coverage, but tests of opt-in
              origin isolation need to disable this.
            </template>

            <template #ruDescription>
              Отключает автоматическую изоляцию происхождения тестовых доменов веб-платформы.
              Обычно мы изолируем их для лучшего покрытия тестов, но в тестах с опцией
              изоляция происхождения должна быть отключена.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">{{ $t('form.fields.fakes') }}</h2>

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

            <template #enDescription>
              Replaces the existing codecs supported in peer connection with a single fake
              codec entry that create a fake video encoder and decoder.
            </template>

            <template #ruDescription>
              Заменяет существующие кодеки, поддерживаемые в одноранговом соединении, одним поддельным
              кодеком, который создает поддельные кодер и декодер видео.
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

            <template #enDescription>
              Use fake device for Media Stream to replace actual camera and microphone.
              For the list of allowed parameters, see FakeVideoCaptureDeviceFactory::ParseFakeDevicesConfigFromOptionsString().
            </template>

            <template #ruDescription>
              Используйте поддельное устройство для медиапотока, чтобы заменить настоящую камеру и микрофон.
              Список допустимых параметров см. в FakeVideoCaptureDeviceFactory::ParseFakeDevicesConfigFromOptionsString().
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

            <template #enDescription>
              Use a fake device for accelerated decoding of MJPEG. This allows, for example, testing of the communication
              to the GPU service without requiring actual accelerator hardware to be present.
            </template>

            <template #ruDescription>
              Используйте поддельное устройство для ускоренного декодирования MJPEG. Это позволяет, например, протестировать связь
              к службе GPU, не требуя наличия реального оборудования ускорителя.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeUiForFedcm"
            label="Use fake UI for FedCM"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeUiForFedcm', $event.target.checked)"
                :checked="form.security.fakes.useFakeUiForFedcm"
              />
            </template>

            <template #enDescription>
              Bypass the FedCM account selection dialog. If a value is provided for this switch,
              that account ID is selected, otherwise the first account is chosen.
            </template>

            <template #ruDescription>
              Обходить диалог выбора учетной записи FedCM. Если для этого переключателя указано значение,
              то выбирается идентификатор счета, в противном случае выбирается первый счет.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFakeUiForMediaStream"
            label="Use fake UI for media stream"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFakeUiForMediaStream', $event.target.checked)"
                :checked="form.security.fakes.useFakeUiForMediaStream"
              />
            </template>

            <template #enDescription>
              Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC).
              Works with --use-fake-device-for-media-stream.
            </template>

            <template #ruDescription>
              Обход инфобара медиапотоков путем выбора устройства по умолчанию для медиапотоков (например, WebRTC).
              Работает с параметром --use-fake-device-for-media-stream.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="useFileForFakeAudioCapture"
            label="Use file for fake audio capture"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.fakes.useFileForFakeAudioCapture', $event.target.checked)"
                :checked="form.security.fakes.useFileForFakeAudioCapture"
              />
            </template>

            <template #enDescription>
              Play a .wav file as the microphone. Note that for WebRTC calls we'll treat the bits as if they came from
              the microphone, which means you should disable audio processing (lest your audio file will play back distorted).
              The input file is converted to suit Chrome's audio buses if necessary, so most sane .wav files should work.
              You can pass either to play the file looping or noloop to stop after playing the file to completion.
            </template>

            <template #ruDescription>
              Воспроизведите .wav-файл в качестве микрофона. Обратите внимание, что для вызовов WebRTC мы будем обрабатывать биты так, как будто они исходят от
              микрофона, что означает, что вы должны отключить обработку звука (чтобы ваш аудиофайл не воспроизводился с искажениями).
              При необходимости входной файл преобразуется в соответствии с аудиошинами Chrome, поэтому большинство нормальных .wav-файлов должны работать.
              Вы можете передать параметр либо для циклического воспроизведения файла, либо параметр noloop для остановки после завершения воспроизведения файла.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">{{ $t('form.fields.simulation') }}</h2>

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

            <template #enDescription>
              Simulates a critical update being available.
            </template>

            <template #ruDescription>
              Имитирует доступность критического обновления.
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

            <template #enDescription>
              Simulates that elevation is needed to recover upgrade channel.
            </template>

            <template #ruDescription>
              Моделирует, что для восстановления обновленного канала необходим подъем.
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

            <template #enDescription>
              Simulates that current version is outdated.
            </template>

            <template #ruDescription>
              Имитирует, что текущая версия устарела.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateOutdatedNoAu"
            label="Simulate outdated (No AU)"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateOutdatedNoAu', $event.target.checked)"
                :checked="form.security.simulation.simulateOutdatedNoAu"
              />
            </template>

            <template #enDescription>
              Simulates that current version is outdated and auto-update is off.
            </template>

            <template #ruDescription>
              Имитирует, что текущая версия устарела и автообновление выключено.
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

            <template #enDescription>
              Simulates a GoogleUpdateErrorCode error by the update check. Must be supplied with |kSimulateUpdateHresult| switch.
            </template>

            <template #ruDescription>
              Имитирует ошибку GoogleUpdateErrorCode при проверке обновления. Должен быть задан с ключом |kSimulateUpdateHresult|.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="24">
          <base-input-group
            name="simulateUpdateHresult"
            label="Simulate update hresult"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.simulation.simulateUpdateHresult', $event.target.checked)"
                :checked="form.security.simulation.simulateUpdateHresult"
              />
            </template>

            <template #enDescription>
              Simulates a specific HRESULT error code returned by the update check.
              If the switch value is not specified (as hex) then it defaults to E_FAIL.
            </template>

            <template #ruDescription>
              Имитирует определенный код ошибки HRESULT, возвращаемый проверкой обновления.
              Если значение переключателя не указано (в шестнадцатеричном виде), то по умолчанию устанавливается значение E_FAIL.
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

            <template #enDescription>
              Simulates an update being available.
            </template>

            <template #ruDescription>
              Имитирует доступность обновления.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">{{ $t('form.fields.other') }}</h2>

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

            <template #enDescription>
              Enables web socket connections from the specified origins only. '*' allows any origin.
            </template>

            <template #ruDescription>
              Разрешает соединения с веб-сокетами только указанного происхождения. '*' разрешает любое происхождение.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableWebSecurity"
            label="Disable Web Security (danger)"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableWebSecurity', $event.target.checked)"
                :checked="form.security.disableWebSecurity"
              />
            </template>

            <template #enDescription>
              Don't enforce the same-origin policy; meant for website testing only.
              This switch has no effect unless --user-data-dir (as defined by the content embedder)
              is also present.
            </template>

            <template #ruDescription>
              Не применять политику same-origin; предназначен только для тестирования веб-сайта.
              Этот переключатель не имеет эффекта, если только --user-data-dir (как определено встраивателем содержимого)
              также присутствует.
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

            <template #enDescription>
              Whether cookies stored as part of user profile are encrypted.
            </template>

            <template #ruDescription>
              Шифруются ли файлы cookie, хранящиеся как часть профиля пользователя.
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

            <template #enDescription>
              Flag that turns on a group of experimental/newly added cookie-related features together,
              as a convenience for e.g. testing, to avoid having to set multiple switches
              individually which may be error-prone (not to mention tedious). There is not a
              corresponding switch to disable all these features, because that is discouraged,
              and for testing purposes you'd need to switch them off individually to identify
              the problematic feature anyway.
            </template>

            <template #ruDescription>
              Флаг, который включает группу экспериментальных/новых добавленных функций, связанных с cookie, вместе,
              для удобства, например, при тестировании, чтобы избежать необходимости устанавливать несколько переключателей
              по отдельности, что может привести к ошибкам (не говоря уже о том, что это утомительно). Не существует
              соответствующего переключателя для отключения всех этих функций, поскольку это не приветствуется,
              и для целей тестирования вам придется отключать их по отдельности, чтобы определить
              проблемную функцию.
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

            <template #enDescription>
              Disables HTML5 DB support.
            </template>

            <template #ruDescription>
              Отключает поддержку HTML5 DB.
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

            <template #enDescription>
              Overrides per-origin quota settings to unlimited storage for any apps/origins.
            </template>

            <template #ruDescription>
              Отменяет настройки квоты для каждого приложения/оригиналов, обеспечивая неограниченное хранение для любых приложений/оригиналов.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableDomainReliability"
            label="Disable domain reliability"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableDomainReliability', $event.target.checked)"
                :checked="form.security.disableDomainReliability"
              />
            </template>

            <template #enDescription>
              Disables Domain Reliability Monitoring
            </template>

            <template #ruDescription>
              Отключение мониторинга надежности домена
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="enablePotentiallyAnnoyingSecurityFeatures"
            label="Enable Potentially Annoying Security Features"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.enablePotentiallyAnnoyingSecurityFeatures', $event.target.checked)"
                :checked="form.security.enablePotentiallyAnnoyingSecurityFeatures"
              />
            </template>

            <template #enDescription>
              Enables a number of potentially annoying security features
              (strict mixed content mode, powerful feature restrictions, etc.)
            </template>

            <template #ruDescription>
              Включает ряд потенциально раздражающих функций безопасности
              (строгий режим смешанного содержимого, мощные ограничения функций и т.д.)
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableDomainBlockingFor3dApis"
            label="Disable Domain Blocking For 3d APIs"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableDomainBlockingFor3dApis', $event.target.checked)"
                :checked="form.security.disableDomainBlockingFor3dApis"
              />
            </template>

            <template #enDescription>
              Disable the per-domain blocking for 3D APIs after GPU reset.
              This switch is intended only for tests.
            </template>

            <template #ruDescription>
              Отключите блокировку каждого домена для 3D API после перезагрузки GPU.
              Эта настройка предназначена только для тестов.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disablePopupBlocking"
            label="Disable Popup Blocking"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disablePopupBlocking', $event.target.checked)"
                :checked="form.security.disablePopupBlocking"
              />
            </template>

            <template #enDescription>
              Disable the per-domain blocking for 3D APIs after GPU reset.
              This switch is intended only for tests.
            </template>

            <template #ruDescription>
              Отключите блокировку каждого домена для 3D API после перезагрузки GPU.
              Эта настройка предназначена только для тестов.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableGaiaServices"
            label="Disable Gaia Services"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('security.disableGaiaServices', $event.target.checked)"
                :checked="form.security.disableGaiaServices"
              />
            </template>

            <template #enDescription>
              Disables GAIA services such as enrollment and OAuth session restore.
              Used by 'fake' telemetry login.
            </template>

            <template #ruDescription>
              Отключает такие сервисы GAIA, как регистрация и восстановление сессии OAuth.
              Используется для "поддельного" входа в систему телеметрии.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            name="disableV8IdleTasks"
            label="Disable V8 Idle tasks"
            advanced
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
            advanced
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
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableHidDetectionOnOobe', $event.target.checked)"
              :value="form.security.disableHidDetectionOnOobe"
              advanced
            />
          </template>

          <template #enDescription>
            Disables HID-detection OOBE screen.
          </template>

          <template #ruDescription>
            Отключает экран OOBE обнаружения HID.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableUsbKeyboardDetect"
          label="Disable USB keyboard detect"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableUsbKeyboardDetect', $event.target.checked)"
              :value="form.security.disableUsbKeyboardDetect"
              advanced
            />
          </template>

          <template #enDescription>
            Disables the USB keyboard detection for blocking the OSK on Win8+.
          </template>

          <template #ruDescription>
            Отключает обнаружение USB-клавиатуры для блокировки OSK на Win8+.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableSigninScopedDeviceId"
          label="Disable sign in scoped device ID"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableSigninScopedDeviceId', $event.target.checked)"
              :value="form.security.disableSigninScopedDeviceId"
            />
          </template>

          <template #enDescription>
            Disables sending signin scoped device id to LSO with refresh token request.
          </template>

          <template #ruDescription>
            Отключает отправку идентификатора устройства, связанного с входом в систему, в LSO с запросом на обновление маркера.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableArcCpuRestriction"
          label="Disable Arc CPU Restriction"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableArcCpuRestriction', $event.target.checked)"
              :value="form.security.disableArcCpuRestriction"
            />
          </template>

          <template #enDescription>
            Prevents any CPU restrictions being set on ARC[VM].
            Only meant to be used by tests as some tests may time out if the ARC container is throttled.
          </template>

          <template #ruDescription>
            Предотвращает любые ограничения CPU, установленные на ARC[VM].
            Используется только в тестах, так как некоторые тесты могут прерваться, если контейнер ARC будет дросселирован.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="reportVp9AsAnUnsupportedMimeType"
          label="Report vp9 as an unsupported MIME type"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.reportVp9AsAnUnsupportedMimeType', $event.target.checked)"
              :value="form.security.reportVp9AsAnUnsupportedMimeType"
            />
          </template>

          <template #enDescription>
            Force to report VP9 as an unsupported MIME type.
          </template>

          <template #ruDescription>
            Принудительно сообщать о VP9 как о неподдерживаемом типе MIME.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="safebrowsingEnableEnhancedProtection"
          label="Safe browsing enable enhanced protection"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.safebrowsingEnableEnhancedProtection', $event.target.checked)"
              :value="form.security.safebrowsingEnableEnhancedProtection"
            />
          </template>

          <template #enDescription>
            Enable Safe Browsing Enhanced Protection.
          </template>

          <template #ruDescription>
            Включите расширенную защиту Safe Browsing.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="safebrowsingManualDownloadBlacklist"
          label="Safe browsing manual download black list"
          advanced
        >
          <template #default>
            <base-input
              @change="onChangeField('security.safebrowsingManualDownloadBlacklist', $event.target.value)"
              :value="form.security.safebrowsingManualDownloadBlacklist"
            />
          </template>

          <template #enDescription>
            List of comma-separated sha256 hashes of executable files which the download-protection service should treat as
            "dangerous." For a file to show a warning, it also must be considered a dangerous filetype and not be
            allowlisted otherwise (by signature or URL) and must be on a supported OS. Hashes are in hex. This is used
            for manual testing when looking for ways to by-pass download protection
          </template>

          <template #ruDescription>
            Список разделенных запятыми хэшей sha256 исполняемых файлов, которые служба защиты загрузки должна рассматривать как
            "опасный". Чтобы файл отображался с предупреждением, он также должен считаться опасным типом файлов и не быть
            разрешенным в других списках (по сигнатуре или URL) и должен находиться на поддерживаемой ОС. Хешируются в шестнадцатеричном формате. Это используется
            для ручного тестирования при поиске способов обхода защиты при загрузке.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableAppContentVerification"
          label="Disable App Content Verification"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableAppContentVerification', $event.target.checked)"
              :value="form.security.disableAppContentVerification"
            />
          </template>

          <template #enDescription>
            Whether to disable app content verification when testing changes locally on Chromebox for Meetings hardware.
          </template>

          <template #ruDescription>
            Следует ли отключать проверку содержимого приложений при локальном тестировании изменений на оборудовании Chromebox для Meetings.
          </template>
        </base-input-group>
      </a-col>
    </a-row>

    <a-row :gutter="20" class="row">
      <a-col span="24">
        <base-input-group
          name="disableCheckerImaging"
          label="Disable Checker Imaging"
          advanced
        >
          <template #afterLabel>
            <base-checkbox
              class="checkbox"
              @change="onChangeField('security.disableCheckerImaging', $event.target.checked)"
              :value="form.security.disableCheckerImaging"
            />
          </template>

          <template #enDescription>
            Disabled defering all image decodes to the image decode service,
            ignoring DecodingMode preferences specified on PaintImage
          </template>

          <template #ruDescription>
            Отключено откладывание всех декодирований изображений в службу декодирования изображений,
            игнорируя предпочтения DecodingMode, указанные в PaintImage
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
