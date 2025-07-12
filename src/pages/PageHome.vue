<template>
  <div class="container">
    <section class="odocs-spaced">
      <p>
        <o-button
          click="toast"
          label="Launch toast (default)"
          size="medium"
        />
        <o-button
          click="success"
          label="Launch toast (success)"
          size="medium"
          variant="success"
        />
        <o-button
          click="danger"
          label="Launch toast (danger)"
          size="medium"
          variant="danger"
        />
      </p>

      <p>
        <o-button
          click="queueToast"
          label="Launch toast (queued)"
          size="medium"
          variant="primary"
        />
        <o-button
          click="pause"
          label="Launch toast (pause on hover)"
          size="medium"
          variant="secondary"
        />
        <o-button
          click="infinite"
          label="Launch toast (infinite)"
          size="medium"
          variant="warning"
        />
        <o-button
          click="closeIndefinite"
          label="close toast (infinite)"
          size="medium"
          variant="danger"
        />
      </p>
    </section>
  </div>
</template>

<script>

export default {
  components: {
  },
}
</script>