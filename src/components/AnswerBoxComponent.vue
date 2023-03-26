<template>
  <!-- note this has a conditional class based on if the answer is not null-->
  <div
    class="answer-box"
    :class="{ 'answer-box--has-answer': answer }"
    @dragover.prevent
    @drop="onDrop"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
  >
    <!-- if there is no answer, the placeholder text is rendered -->
    {{ answer ? answer.text : placeholder }}
  </div>
</template>

<script>
export default {
  // these are the properties that can be set when calling this component in a view
  props: {
    answer: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Drag an answer here",
    },
  },
  methods: {
    // rerenders the component on drop
    onDrop() {
      this.$emit("drop", this.index);
    },
    // adds a class when hovered over with draggable object
    onDragEnter(event) {
      event.target.classList.add("answer-box--hover");
    },
    // removes the class when not hovered over with draggable object
    onDragLeave(event) {
      event.target.classList.remove("answer-box--hover");
    },
  },
};
</script>

<style scoped>
.answer-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 150px;
  min-height: 48px;
  border: 2px solid white;
  border-radius: 12px;
  font-size: 1rem;
}

.answer-box--has-answer {
  background-color: #2b4075;
  color: #f2f2f2;
}

.answer-box--hover {
  background-color: #ccc;
}
</style>
