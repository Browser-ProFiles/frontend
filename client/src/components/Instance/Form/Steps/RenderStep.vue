<template>
  <div class="render-step">
    <div class="section">
      <h2 class="title">Pepper</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disablePepper3d"
            label="Disable Pepper 3D"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.pepper.disablePepper3d', $event.target.checked)"
                :checked="form.render.pepper.disablePepper3d"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disablePepper3dImageChromium"
            label="Disable Pepper 3D Image Chromium"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.pepper.disablePepper3dImageChromium', $event.target.checked)"
                :checked="form.render.pepper.disablePepper3dImageChromium"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableUseMojoVideoDecoderForPepper"
            label="Disable use mojo video decoder for pepper"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.pepper.disableUseMojoVideoDecoderForPepper', $event.target.checked)"
                :checked="form.render.pepper.disableUseMojoVideoDecoderForPepper"
              />
            </template>

            <template #enDescription>
              Disables the code path that makes Pepper use the MojoVideoDecoder for hardware
              accelerated video decoding.
              It overrides the value of the kUseMojoVideoDecoderForPepper feature flag.
            </template>

            <template #ruDescription>
              Отключает путь кода, который заставляет Pepper использовать MojoVideoDecoder для аппаратного
              ускоренного аппаратного декодирования видео.
              Он переопределяет значение флага функции kUseMojoVideoDecoderForPepper.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Decode</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableAcceleratedMjpegDecode"
            label="Disable accelerated mjpeg decode"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.decode.disableAcceleratedMjpegDecode', $event.target.checked)"
                :checked="form.render.decode.disableAcceleratedMjpegDecode"
              />
            </template>

            <template #enDescription>
              Disable hardware acceleration of mjpeg decode for captured frame, where available.
            </template>
            <template #ruDescription>
              Отключите аппаратное ускорение декодирования mjpeg для захваченного кадра, если оно доступно.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableAcceleratedVideoDecode"
            label="Disable accelerated video decode"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.decode.disableAcceleratedVideoDecode', $event.target.checked)"
                :checked="form.render.decode.disableAcceleratedVideoDecode"
              />
            </template>

            <template #enDescription>
              Disables hardware acceleration of video decode, where available.
            </template>
            <template #ruDescription>
              Отключает аппаратное ускорение декодирования видео, если оно доступно.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableAcceleratedVideoEncode"
            label="Disable accelerated video encode"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.decode.disableAcceleratedVideoEncode', $event.target.checked)"
                :checked="form.render.decode.disableAcceleratedVideoEncode"
              />
            </template>

            <template #enDescription>
              Disables hardware acceleration of video encode, where available.
            </template>
            <template #ruDescription>
              Отключает аппаратное ускорение кодирования видео, если оно доступно.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">GPU</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpu"
            label="Disable GPU"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpu', $event.target.checked)"
                :checked="form.render.gpu.disableGpu"
              />
            </template>

            <template #enDescription>
              Disables GPU hardware acceleration.
              If software renderer is not in place, then the GPU process won't launch.
            </template>
            <template #ruDescription>
              Отключает аппаратное ускорение GPU.
              Если программный рендерер не установлен, то процесс GPU не запустится.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuCompositing"
            label="Disable GPU Compositing"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuCompositing', $event.target.checked)"
                :checked="form.render.gpu.disableGpuCompositing"
              />
            </template>

            <template #enDescription>
              Prevent the compositor from using its GPU implementation.
            </template>
            <template #ruDescription>
              Запрещает compositor использовать свою реализацию GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuDriverBugWorkarounds"
            label="Disable GPU driver bug workarounds"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuDriverBugWorkarounds', $event.target.checked)"
                :checked="form.render.gpu.disableGpuDriverBugWorkarounds"
              />
            </template>

            <template #enDescription>
              Disable workarounds for various GPU driver bugs.
            </template>
            <template #ruDescription>
              Отключает обходные пути для различных ошибок драйверов GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuEarlyInit"
            label="Disable GPU early init"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuEarlyInit', $event.target.checked)"
                :checked="form.render.gpu.disableGpuEarlyInit"
              />
            </template>

            <template #enDescription>
              Disable proactive early init of GPU process.
            </template>
            <template #ruDescription>
              Отключает проактивный ранний запуск процесса GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuMemoryBufferCompositorResources"
            label="Disable GPU memory buffer compositor resources"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuMemoryBufferCompositorResources', $event.target.checked)"
                :checked="form.render.gpu.disableGpuMemoryBufferCompositorResources"
              />
            </template>

            <template #enDescription>
              Do not force that all compositor resources be backed by GPU memory buffers.
            </template>
            <template #ruDescription>
              Не заставляет, чтобы все ресурсы compositor были обеспечены буферами памяти GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuMemoryBufferVideoFrames"
            label="Disable GPU memory buffer video frames"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuMemoryBufferVideoFrames', $event.target.checked)"
                :checked="form.render.gpu.disableGpuMemoryBufferVideoFrames"
              />
            </template>

            <template #enDescription>
              Disable GpuMemoryBuffer backed VideoFrames.
            </template>
            <template #ruDescription>
              Отключает GpuMemoryBuffer с поддержкой VideoFrames.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuProcessCrashLimit"
            label="Disable GPU process crash limit"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuProcessCrashLimit', $event.target.checked)"
                :checked="form.render.gpu.disableGpuProcessCrashLimit"
              />
            </template>

            <template #enDescription>
              For tests, to disable the limit on the number of times the GPU process may be restarted.
            </template>
            <template #ruDescription>
              Для тестов, чтобы отключить ограничение на количество перезапусков процесса GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuProcessForDx12InfoCollection"
            label="Disable GPU process for DX12 info collection"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuProcessForDx12InfoCollection', $event.target.checked)"
                :checked="form.render.gpu.disableGpuProcessForDx12InfoCollection"
              />
            </template>

            <template #enDescription>
              Disables the non-sandboxed GPU process for DX12 info collection.
            </template>
            <template #ruDescription>
              Отключает non-sandboxed процесс GPU для сбора информации DX12.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuProgramCache"
            label="Disable GPU program cache"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuProgramCache', $event.target.checked)"
                :checked="form.render.gpu.disableGpuProgramCache"
              />
            </template>

            <template #enDescription>
              Turn off gpu program caching.
            </template>
            <template #ruDescription>
              Отключите кэширование программ на графическом процессоре.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuRasterization"
            label="Disable GPU rasterization"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuRasterization', $event.target.checked)"
                :checked="form.render.gpu.disableGpuRasterization"
              />
            </template>

            <template #enDescription>
              Disable GPU rasterization, i.e. rasterize on the CPU only
              Overrides the kEnableGpuRasterization flag.
            </template>
            <template #ruDescription>
              Отключить растеризацию на GPU, т.е. растеризацию только на CPU.
              Переопределяет флаг kEnableGpuRasterization.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuSandbox"
            label="Disable GPU sandbox"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuSandbox', $event.target.checked)"
                :checked="form.render.gpu.disableGpuSandbox"
              />
            </template>

            <template #enDescription>
              Disables the GPU process sandbox.
            </template>
            <template #ruDescription>
              Отключает "песочницу" процессов GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuShaderDiskCache"
            label="Disable GPU shader disk cache"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuShaderDiskCache', $event.target.checked)"
                :checked="form.render.gpu.disableGpuShaderDiskCache"
              />
            </template>

            <template #enDescription>
              Disables the GPU shader on disk cache.
            </template>
            <template #ruDescription>
              Отключает GPU шейдер на дисковом кэше.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuVsync"
            label="Disable GPU vsync"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuVsync', $event.target.checked)"
                :checked="form.render.gpu.disableGpuVsync"
              />
            </template>

            <template #enDescription>
              Stop the GPU from synchronizing presentation with vblank.
            </template>
            <template #ruDescription>
              Запрещает GPU синхронизировать презентацию с vblank.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGpuWatchdog"
            label="Disable GPU watchdog"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.disableGpuWatchdog', $event.target.checked)"
                :checked="form.render.gpu.disableGpuWatchdog"
              />
            </template>

            <template #enDescription>
              Disable the thread that crashes the GPU process if it stops responding to messages.
            </template>
            <template #ruDescription>
              Отключает поток, который разрушает процесс GPU, если он перестает отвечать на сообщения.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row" align="bottom">
        <a-col span="12">
          <base-input-group
            advanced
            name="gpuBlocklistTestGroup"
            label="GPU Blocklist test group"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuBlocklistTestGroup', $event.target.value)"
                :value="form.render.gpu.gpuBlocklistTestGroup"
              />
            </template>

            <template #enDescription>
              Select a different set of GPU blocklist entries with the specified test_group ID.
            </template>
            <template #ruDescription>
              Выберите другой набор записей блок-листа GPU с указанным идентификатором test_group.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="12">
          <base-input-group
            advanced
            name="gpuDeviceId"
            label="GPU Device ID"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuDeviceId', $event.target.value)"
                :value="form.render.gpu.gpuDeviceId"
              />
            </template>

            <template #enDescription>
              Passes the active graphics device id from browser process to info collection GPU process.
            </template>
            <template #ruDescription>
              Передает идентификатор активного графического устройства из процесса браузера в процесс GPU сбора информации.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row" align="bottom">
        <a-col span="12">
          <base-input-group
            advanced
            name="gpuDiskCacheSizeKb"
            label="GPU Disk Cache size KB"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuDiskCacheSizeKb', $event.target.value)"
                :value="form.render.gpu.gpuDiskCacheSizeKb"
              />
            </template>

            <template #enDescription>
              Allows explicitly specifying the shader disk cache size for embedded devices.
              Default value is 6MB. On Android, 2MB is default and 128KB for low-end devices.
            </template>
            <template #ruDescription>
              Позволяет явно указать размер дискового кэша шейдеров для встроенных устройств.
              Значение по умолчанию - 6 МБ. На Android по умолчанию 2MB, а для устройств низкого класса - 128KB.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="12">
          <base-input-group
            advanced
            name="gpuDriverVersion"
            label="GPU Driver version"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuDriverVersion', $event.target.value)"
                :value="form.render.gpu.gpuDriverVersion"
              />
            </template>

            <template #enDescription>
              Passes the active graphics driver version from browser process to info collection GPU process.
            </template>
            <template #ruDescription>
              Передает версию активного графического драйвера из процесса браузера в процесс GPU сбора информации.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row" align="bottom">
        <a-col span="12">
          <base-input-group
            advanced
            name="gpuLauncher"
            label="GPU Launcher"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuLauncher', $event.target.value)"
                :value="form.render.gpu.gpuLauncher"
              />
            </template>

            <template #enDescription>
              Extra command line options for launching the GPU process (normally used for debugging). Use like renderer-cmd-prefix.
            </template>
            <template #ruDescription>
              Дополнительные параметры командной строки для запуска процесса GPU (обычно используется для отладки). Используется аналогично renderer-cmd-prefix.
            </template>
          </base-input-group>
        </a-col>

        <a-col span="12">
          <base-input-group
            advanced
            name="gpuPreferences"
            label="GPU Preferences"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuPreferences', $event.target.value)"
                :value="form.render.gpu.gpuPreferences"
              />
            </template>

            <template #enDescription>
              Passes encoded GpuPreferences to GPU process.
            </template>
            <template #ruDescription>
              Передает закодированные GpuPreferences процессу GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="gpuProgramCacheSizeKb"
            label="GPU program cache size KB"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gpu.gpuProgramCacheSizeKb', $event.target.value)"
                :value="form.render.gpu.gpuProgramCacheSizeKb"
              />
            </template>

            <template #enDescription>
              Sets the maximum size of the in-memory gpu program cache, in kb.
            </template>
            <template #ruDescription>
              Устанавливает максимальный размер кэша программ gpu in-memory, в кб.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="gpuSandboxAllowSysvShm"
            label="GPU sandbox allow sysv shm"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.gpuSandboxAllowSysvShm', $event.target.checked)"
                :checked="form.render.gpu.gpuSandboxAllowSysvShm"
              />
            </template>

            <template #enDescription>
              Allows shmat() system call in the GPU sandbox.
            </template>
            <template #ruDescription>
              Разрешает системный вызов shmat() в песочнице GPU.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="gpuSandboxStartEarly"
            label="GPU sandbox start early"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.gpuSandboxStartEarly', $event.target.checked)"
                :checked="form.render.gpu.gpuSandboxStartEarly"
              />
            </template>

            <template #enDescription>
              Starts the GPU sandbox before creating a GL context.
            </template>
            <template #ruDescription>
              Запускает "песочницу" GPU перед созданием контекста GL.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="gpuStartupDialog"
            label="GPU startup dialog"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.gpuStartupDialog', $event.target.checked)"
                :checked="form.render.gpu.gpuStartupDialog"
              />
            </template>

            <template #enDescription>
              Causes the GPU process to display a dialog on launch.
            </template>
            <template #ruDescription>
              Заставляет процесс GPU отображать диалог при запуске.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="gpuSubSystemId"
            label="GPU subsystem ID"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.gpuSubSystemId', $event.target.checked)"
                :checked="form.render.gpu.gpuSubSystemId"
              />
            </template>

            <template #enDescription>
              Passes the active graphics sub system id from browser process to info collection GPU process.
            </template>
            <template #ruDescription>
              Передает идентификатор активной графической подсистемы из процесса браузера в процесс GPU сбора информации.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="gpuVendorId"
            label="GPU vendor ID"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.gpuVendorId', $event.target.checked)"
                :checked="form.render.gpu.gpuVendorId"
              />
            </template>

            <template #enDescription>
              Passes the active graphics vendor id from browser process to info collection GPU process.
            </template>
            <template #ruDescription>
              Передает идентификатор активного поставщика графики из процесса браузера в процесс GPU сбора информации.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="inProcessGpu"
            label="Run the GPU process as a thread in the browser process"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gpu.inProcessGpu', $event.target.checked)"
                :checked="form.render.gpu.inProcessGpu"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">WebGL</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableWebgl"
            label="Disable WebGL"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webgl.disableWebgl', $event.target.checked)"
                :checked="form.render.webgl.disableWebgl"
              />
            </template>

            <template #enDescription>
              Disable all versions of WebGL.
            </template>
            <template #ruDescription>
              Отключает все версии WebGL.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableWebglImageChromium"
            label="Disable WebGL image chromium"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webgl.disableWebglImageChromium', $event.target.checked)"
                :checked="form.render.webgl.disableWebglImageChromium"
              />
            </template>

            <template #enDescription>
              Disables WebGL rendering into a scanout buffer for overlay support.
            </template>
            <template #ruDescription>
              Отключает рендеринг WebGL в буфер развертки для поддержки оверлея.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableWebgl2"
            label="Disable WebGL 2"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webgl.disableWebgl2', $event.target.checked)"
                :checked="form.render.webgl.disableWebgl2"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webglAntialiasingMode"
            label="WebGL Antialiasing mode"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webgl.webglAntialiasingMode', $event.target.checked)"
                :checked="form.render.webgl.webglAntialiasingMode"
              />
            </template>

            <template #enDescription>
              Set the antialiasing method used for webgl. (none, explicit, implicit)
            </template>
            <template #ruDescription>
              Устанавливает метод сглаживания, используемый для webgl. (нет, явный, неявный).
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webglMsaaSampleCount"
            label="WebGL MSAA Sample count"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webgl.webglMsaaSampleCount', $event.target.checked)"
                :checked="form.render.webgl.webglMsaaSampleCount"
              />
            </template>

            <template #enDescription>
              Set a default sample count for webgl if msaa is enabled.
            </template>
            <template #ruDescription>
              Установите количество выборок по умолчанию для webgl, если включена функция msaa.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">GL</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGlDrawingForTests"
            label="Disable GL Drawing for tests"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gl.disableGlDrawingForTests', $event.target.checked)"
                :checked="form.render.gl.disableGlDrawingForTests"
              />
            </template>

            <template #enDescription>
              Disables GL drawing operations which produce pixel output.
              With this the GL output will not be correct but tests will run faster.
            </template>
            <template #ruDescription>
              Отключает операции рисования GL, которые производят вывод пикселей.
              При этом вывод GL не будет корректным, но тесты будут выполняться быстрее.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGlExtensions"
            label="Disable GL extensions"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.gl.disableGlExtensions', $event.target.value)"
                :value="form.render.gl.disableGlExtensions"
              />
            </template>

            <template #enDescription>
              Disables specified comma separated GL Extensions if found.
            </template>
            <template #ruDescription>
              Отключает указанные через запятую расширения GL, если они найдены.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableGlslTranslator"
            label="Disable GLSL Translator"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.gl.disableGlslTranslator', $event.target.checked)"
                :checked="form.render.gl.disableGlslTranslator"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Web View</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewDisableAppRecovery"
            label="WebView disable app recovery"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewDisableAppRecovery', $event.target.checked)"
                :checked="form.render.webview.webviewDisableAppRecovery"
              />
            </template>

            <template #description>
              Disables WebView from checking for app recovery mitigations.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewDisablePackageAllowlistThrottling"
            label="WebView disable package allow list throttling"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewDisablePackageAllowlistThrottling', $event.target.checked)"
                :checked="form.render.webview.webviewDisablePackageAllowlistThrottling"
              />
            </template>

            <template #description>
              Disables throttling querying apps package names allowlist components in WebView clients.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewDisableSafebrowsingSupport"
            label="Used to disable safebrowsing functionality in webview"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewDisableSafebrowsingSupport', $event.target.checked)"
                :checked="form.render.webview.webviewDisableSafebrowsingSupport"
              />
            </template>

            <template #description>
              Used to disable safebrowsing functionality in webview
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewEnableAppRecovery"
            label="WebView enable app recover"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewEnableAppRecovery', $event.target.checked)"
                :checked="form.render.webview.webviewEnableAppRecovery"
              />
            </template>

            <template #description>
              Enables WebView to check for app recovery mitigations.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewEnableModernCookieSameSite"
            label="WebView enable modern cookie same site"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewEnableModernCookieSameSite', $event.target.checked)"
                :checked="form.render.webview.webviewEnableModernCookieSameSite"
              />
            </template>

            <template #description>
              Enables modern SameSite cookie behavior (as opposed to legacy behavior).
              This is used for WebView versions prior to when the modern behavior will be enabled by default.
              This enables the same-site-by-default-cookies, cookies-without-SameSite-must-be-secure,
              and schemeful-same-site features.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewMparchFencedFrames"
            label="WebView mparch fenced frames"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewMparchFencedFrames', $event.target.checked)"
                :checked="form.render.webview.webviewMparchFencedFrames"
              />
            </template>

            <template #description>
              Enables MPArch-based FencedFrames. This also implies PrivacySandboxAdsAPIsOverride and SharedStorageAPI.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewSafebrowsingBlockAllResources"
            label="WebView safebrowsing block all resources"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewSafebrowsingBlockAllResources', $event.target.checked)"
                :checked="form.render.webview.webviewSafebrowsingBlockAllResources"
              />
            </template>

            <template #description>
              Enables SafeBrowsing and causes WebView to treat all resources as malicious. Use care: this will block all resources from loading.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewSandboxedRenderer"
            label="WebView sandboxed renderer"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewSandboxedRenderer', $event.target.checked)"
                :checked="form.render.webview.webviewSandboxedRenderer"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webviewShadowDomFencedFrames"
            label="WebView Shadow DOM fenced frames"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webview.webviewShadowDomFencedFrames', $event.target.checked)"
                :checked="form.render.webview.webviewShadowDomFencedFrames"
              />
            </template>

            <template #description>
              Enables MPArch-based FencedFrames. This also implies PrivacySandboxAdsAPIsOverride and SharedStorageAPI
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">WebRTC</h2>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableWebrtcEncryption"
            label="Disable WebRTC Encryption"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webrtc.disableWebrtcEncryption', $event.target.checked)"
                :checked="form.render.webrtc.disableWebrtcEncryption"
              />
            </template>

            <template #description>
              Disables encryption of RTP Media for WebRTC.
              When Chrome embeds Content, it ignores this switch on its stable and beta channels.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableWebrtcHwDecoding"
            label="Disable WebRTC HW Decoding"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webrtc.disableWebrtcHwDecoding', $event.target.checked)"
                :checked="form.render.webrtc.disableWebrtcHwDecoding"
              />
            </template>

            <template #description>
              Disables HW decode acceleration for WebRTC.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableWebrtcHwEncoding"
            label="Disable WebRTC HW Encoding"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.webrtc.disableWebrtcHwEncoding', $event.target.checked)"
                :checked="form.render.webrtc.disableWebrtcHwEncoding"
              />
            </template>

            <template #description>
              Disables HW encode acceleration for WebRTC.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webrtcEventLogProactivePruningDelta"
            label="WebRTC event log proactive pruning delta"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.webrtc.webrtcEventLogProactivePruningDelta', $event.target.value)"
                :value="form.render.webrtc.webrtcEventLogProactivePruningDelta"
              />
            </template>

            <template #description>
              Sets the delay (in seconds) between proactive prunings of remote-bound WebRTC event logs which are pending upload.
              All positive values are legal. All negative values are illegal, and ignored.
              If set to 0, the meaning is "no proactive pruning".
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webrtcEventLogUploadDelayMs"
            label="WebRTC event log upload delay ms"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.webrtc.webrtcEventLogUploadDelayMs', $event.target.value)"
                :value="form.render.webrtc.webrtcEventLogUploadDelayMs"
              />
            </template>

            <template #description>
              WebRTC event logs will only be uploaded if the conditions hold for this many milliseconds.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webrtcEventLogUploadNoSuppression"
            label="WebRTC event log upload no suppression"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.webrtc.webrtcEventLogUploadNoSuppression', $event.target.value)"
                :value="form.render.webrtc.webrtcEventLogUploadNoSuppression"
              />
            </template>

            <template #description>
              Normally, remote-bound WebRTC event logs are uploaded only when no peer connections are active.
              With this flag, the upload is never suppressed.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webrtcEventLogging"
            label="WebRTC event logging"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.webrtc.webrtcEventLogging', $event.target.value)"
                :value="form.render.webrtc.webrtcEventLogging"
              />
            </template>

            <template #description>
              Enable capture and local storage of WebRTC event logs without visiting chrome://webrtc-internals.
              This is useful for automated testing. It accepts the path to which the local logs would be stored.
              Disabling is not possible without restarting the browser and relaunching without this flag.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webrtcIpHandlingPolicy"
            label="WebRTC IP handling police"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.webrtc.webrtcIpHandlingPolicy', $event.target.value)"
                :value="form.render.webrtc.webrtcIpHandlingPolicy"
              />
            </template>

            <template #description>
              Override WebRTC IP handling policy to mimic the behavior when WebRTC IP handling policy is specified in Preferences.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="webrtcMaxCpuConsumptionPercentage"
            label="WebRTC max CPU consumption percentage"
          >
            <template #default>
              <base-input
                @change="onChangeField('render.webrtc.webrtcMaxCpuConsumptionPercentage', $event.target.value)"
                :value="form.render.webrtc.webrtcMaxCpuConsumptionPercentage"
              />
            </template>

            <template #description>
              Configure the maximum CPU time percentage of a single core that can be consumed for desktop capturing.
              Default is 50. Set 100 to disable the throttling of the capture.
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
            advanced
            name="disableCompositedAntialiasing"
            label="Disable composited antialiasing"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableCompositedAntialiasing', $event.target.checked)"
                :checked="form.render.disableCompositedAntialiasing"
              />
            </template>

            <template #description>
              Disables layer-edge anti-aliasing in the compositor.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableD3d11"
            label="Disable D3D11"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableD3d11', $event.target.checked)"
                :checked="form.render.disableD3d11"
              />
            </template>

            <template #description>
              Disables use of D3D11.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableDirectComposition"
            label="Disable direct composition"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableDirectComposition', $event.target.checked)"
                :checked="form.render.disableDirectComposition"
              />
            </template>

            <template #description>
              Disables use of D3D11.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableDirectCompositionVideoOverlays"
            label="Disable direct composition video overlays"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableDirectCompositionVideoOverlays', $event.target.checked)"
                :checked="form.render.disableDirectCompositionVideoOverlays"
              />
            </template>

            <template #description>
              Disables using DirectComposition video overlays, even if hardware overlays are supported.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableFrameRateLimit"
            label="Disable framerate limit"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableFrameRateLimit', $event.target.checked)"
                :checked="form.render.disableFrameRateLimit"
              />
            </template>

            <template #description>
              Disables begin frame limiting in both cc scheduler and display scheduler.
              Also implies --disable-gpu-vsync (see //ui/gl/gl_switches.h).
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableRendererAccessibility"
            label="Disable renderer accessibility"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableRendererAccessibility', $event.target.checked)"
                :checked="form.render.disableRendererAccessibility"
              />
            </template>

            <template #description>
              Turns off the accessibility in the renderer.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableRendererBackgrounding"
            label="Disable renderer backgrounding"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableRendererBackgrounding', $event.target.checked)"
                :checked="form.render.disableRendererBackgrounding"
              />
            </template>

            <template #description>
              Prevent renderer process backgrounding when set.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableMetalShaderCache"
            label="Disable metal shader cache"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableMetalShaderCache', $event.target.checked)"
                :checked="form.render.disableMetalShaderCache"
              />
            </template>

            <template #description>
              Disables Metal's shader cache, using the GPU sandbox to prevent access to it.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableNewContentRenderingTimeout"
            label="Disable new content rendering timeout"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableNewContentRenderingTimeout', $event.target.checked)"
                :checked="form.render.disableNewContentRenderingTimeout"
              />
            </template>

            <template #description>
              Disables clearing the rendering output of a renderer when it didn't commit
              new output for a while after a top-frame navigation.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableImageAnimationResync"
            label="Disable image animation resync"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableImageAnimationResync', $event.target.checked)"
                :checked="form.render.disableImageAnimationResync"
              />
            </template>

            <template #description>
              Disallow image animations to be reset to the beginning to avoid skipping many frames.
              Only effective if compositor image animations are enabled.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableNv12DxgiVideo"
            label="Disable nv12dxgi video"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableNv12DxgiVideo', $event.target.checked)"
                :checked="form.render.disableNv12DxgiVideo"
              />
            </template>

            <template #description>
              Disables the video decoder from drawing to an NV12 textures instead of ARGB.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disablePartialRaster"
            label="Disable partial raster"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disablePartialRaster', $event.target.checked)"
                :checked="form.render.disablePartialRaster"
              />
            </template>

            <template #description>
              Disable partial raster in the renderer.
              Disabling this switch also disables the use of persistent gpu memory buffers.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableRgba4444Textures"
            label="Disable rgba4444 textures"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableRgba4444Textures', $event.target.checked)"
                :checked="form.render.disableRgba4444Textures"
              />
            </template>

            <template #description>
              Disables RGBA_4444 textures
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableRtcSmoothnessAlgorithm"
            label="Disable RTC Smoothness algorithm"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableRtcSmoothnessAlgorithm', $event.target.checked)"
                :checked="form.render.disableRtcSmoothnessAlgorithm"
              />
            </template>

            <template #description>
              Disables the new rendering algorithm for webrtc, which is designed to improve the rendering smoothness.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableShaderNameHashing"
            label="Disable shader name hashing"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableShaderNameHashing', $event.target.checked)"
                :checked="form.render.disableShaderNameHashing"
              />
            </template>

            <template #description>
              Turn off user-defined name hashing in shaders.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableSkiaRuntimeOpts"
            label="Disable skia runtime opts"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableSkiaRuntimeOpts', $event.target.checked)"
                :checked="form.render.disableSkiaRuntimeOpts"
              />
            </template>

            <template #description>
              Do not use runtime-detected high-end CPU optimizations in Skia.
              This is useful for forcing a baseline code path for e.g. web tests.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableSmoothScrolling"
            label="Disable smooth scrolling"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableSmoothScrolling', $event.target.checked)"
                :checked="form.render.disableSmoothScrolling"
              />
            </template>

            <template #description>
              Disable smooth scrolling for testing.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableSoftwareCompositingFallback"
            label="Disable software compositing fallback"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableSoftwareCompositingFallback', $event.target.checked)"
                :checked="form.render.disableSoftwareCompositingFallback"
              />
            </template>

            <template #description>
              For tests, to disable falling back to software compositing if the GPU Process
              has crashed, and reached the GPU Process crash limit.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableSoftwareRasterizer"
            label="Disable software rasterizer"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableSoftwareRasterizer', $event.target.checked)"
                :checked="form.render.disableSoftwareRasterizer"
              />
            </template>

            <template #description>
              Disables the use of a 3D software rasterizer.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="20" class="row">
        <a-col span="24">
          <base-input-group
            advanced
            name="disableAngleFeatures"
            label="Disable angle features"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('render.disableAngleFeatures', $event.target.checked)"
                :checked="form.render.disableAngleFeatures"
              />
            </template>

            <template #description>
              Disables specified comma separated ANGLE features if found.
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
