<template>
  <div>
    <o-field
      class="file is-primary"
      :class="{'has-name': !!file}"
    >
      <o-upload
        v-model="file"
        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
        class="file-label"
        @input="handleFileChange"
      >
        <span class="file-cta">
          <o-icon icon="upload" />
          <span class="file-label">Выберите файл</span>
        </span>
        <span
          v-if="file"
          class="file-name"
        >
          {{ file.name }}
        </span>
      </o-upload>
    </o-field>

    <o-field
      v-if="file"
      label="Описание файла"
    >
      <o-input
        v-model="description"
        placeholder="Необязательное описание"
      />
    </o-field>

    <o-field v-if="file">
      <div class="buttons">
        <o-button
          :loading="isLoading"
          type="is-primary"
          @click="handleUpload"
        >
          Загрузить
        </o-button>
        <o-button
          type="is-danger"
          @click="cancelUpload"
        >
          Отмена
        </o-button>
      </div>
    </o-field>
    <!--
    <o-progress
      v-if="uploadProgress > 0 && uploadProgress < 100"
      format="percent"
      show-value
      :value="uploadProgress"
    /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'FormUpload',
})

const emit = defineEmits(['upload'])

const file = ref(null)
const description = ref('')
const isLoading = ref(false)
const uploadProgress = ref(0)

const handleFileChange = (newFile) => {
  if (!newFile) return

  // Можно добавить дополнительную валидацию файла
  const maxSize = 10 * 1024 * 1024 // 10MB
  if (newFile.size > maxSize) {
    file.value = null
    // Здесь можно показать уведомление об ошибке
    return
  }
}

const handleUpload = async () => {
  if (!file.value) return

  isLoading.value = true
  uploadProgress.value = 0

  try {
    // Эмулируем прогресс загрузки
    // const interval = setInterval(() => {
    //   uploadProgress.value += 10
    //   if (uploadProgress.value >= 90) clearInterval(interval)
    // }, 200)

    // // Здесь должна быть реальная загрузка на сервер
    // await new Promise(resolve => setTimeout(resolve, 2000))

    // clearInterval(interval)
    // uploadProgress.value = 100

    emit('upload', {
      file: file.value,
      description: description.value,
    })

    // Сброс формы после успешной загрузки
    file.value = null
    description.value = ''
  } catch (error) {
    console.error('Ошибка загрузки:', error)
    // Здесь можно показать уведомление об ошибке
  } finally {
    isLoading.value = false
    setTimeout(() => { uploadProgress.value = 0 }, 1000)
  }
}

const cancelUpload = () => {
  file.value = null
  description.value = ''
  uploadProgress.value = 0
}

</script>