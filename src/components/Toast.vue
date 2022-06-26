<template>
  <div class="toast-wrapper">
    <div v-if="cleanedMessages.length" class="toast-message" :class="type">
    <ul class="mb-0">
      <li class="mx-0" v-for="(meesage, index) in cleanedMessages" :key="index" >
        {{ meesage }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    type: {
      required: true,
      type: String,
      validator(value) {
        return ["success", "error"].includes(value)
      }
    },
    messages: {
      required: true,
      type: Array,
      validator(value) {
        return value.filter(el => el).length
      }
    },
  },
  computed: {
    cleanedMessages() {
      return this.messages.filter(el => el)
    }
  }
}
</script>

<style scoped>
  .success {
    background-color: #3FB883;
  }
  .error {
    background-color: #FF0062;
  }

  .toast-wrapper {
    box-sizing: border-box;
    position: fixed;
    left: 0px;
    top: 200px;
    width: 100%;
    z-index: 999;
    padding: 0 1rem;
  }
  .toast-message {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    margin: 0 auto;
    max-width: 600px;
  }
</style>