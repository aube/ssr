<template>
  <div>
    <b-field class="file is-primary" :class="{'has-name': !!file}">
      <b-upload v-model="file" class="file-label" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" @input="handleFileChange">
        <span class="file-cta">
          <b-icon icon="upload"></b-icon>
          <span class="file-label">Выберите файл</span>
        </span>
        <span class="file-name" v-if="file">
          {{ file.name }}
        </span>
      </b-upload>
    </b-field>

    <b-field v-if="file" label="Описание файла">
      <b-input v-model="description" placeholder="Необязательное описание"></b-input>
    </b-field>

    <b-field v-if="file">
      <div class="buttons">
        <b-button type="is-primary" :loading="isLoading" @click="handleUpload">
          Загрузить
        </b-button>
        <b-button type="is-danger" @click="cancelUpload">
          Отмена
        </b-button>
      </div>
    </b-field>

    <b-progress v-if="uploadProgress > 0 && uploadProgress < 100" :value="uploadProgress" show-value format="percent"></b-progress>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'FormUpload'
})

defineEmits(['upload'])

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
    const interval = setInterval(() => {
        uploadProgress.value += 10
        if (uploadProgress.value >= 90) clearInterval(interval)
    }, 200)
    
    // Здесь должна быть реальная загрузка на сервер
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    clearInterval(interval)
    uploadProgress.value = 100
    
    emit('upload', {
        file: file.value,
        description: description.value
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