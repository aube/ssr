<template>
  <o-field>
    <div class="buttons">
      <o-button
        :loading="isLoading"
        native-type="submit"
        type="is-primary"
        @click="handleSubmit"
      >
        Выйти
      </o-button>
    </div>
  </o-field>
</template>

<script setup>

defineOptions({
  name: 'FormLogout',
})
const emit = defineEmits(['submit'])
const handleSubmit = () => emit('submit')
</script>