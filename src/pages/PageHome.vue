<template>
  <div class="container">
<section class="odocs-spaced">
    <p>
        <o-button
            label="Launch toast (default)"
            size="medium"
            click="toast" />
        <o-button
            label="Launch toast (success)"
            variant="success"
            size="medium"
            click="success" />
        <o-button
            label="Launch toast (danger)"
            variant="danger"
            size="medium"
            click="danger" />
    </p>

    <p>
        <o-button
            label="Launch toast (queued)"
            variant="primary"
            size="medium"
            click="queueToast" />
        <o-button
            label="Launch toast (pause on hover)"
            variant="secondary"
            size="medium"
            click="pause" />
        <o-button
            label="Launch toast (infinite)"
            variant="warning"
            size="medium"
            click="infinite" />
        <o-button
            label="close toast (infinite)"
            variant="danger"
            size="medium"
            click="closeIndefinite" />
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