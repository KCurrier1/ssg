<template>
  <common-layout>
    <h1>SASS-y Cat</h1>
    <div class="instructions">{{ currentLevel.instructions }}</div>
    <div class="game" v-if="level > 0">
      <div class="answers">
        <div
          class="drag"
          v-for="line in currentLevel.answers.filter((answer) => answer.line === 0)"
          :key="line.id"
          draggable="true"
          @dragstart="drag($event, line)"
        >
          {{ line.answer }}
        </div>
      </div>
      <div class="code">
        <span class="line" v-for="lines in currentLevel.code" :key="lines.line">
          <h3>
            <pre>{{ lines.content }}</pre>
          </h3>
          <div
            class="drop"
            @drop="drop($event, lines.line)"
            @dragover.prevent
            @dragenter.prevent
          ></div>
        </span>
      </div>
    </div>
    <button
      v-if="level > 0"
      @click="
        currentLevel = {};
        level = level - 1;
      "
    >
      Previous Level
    </button>
    <button
      @click="
        currentLevel = {};
        level = level + 1;
      "
    >
      <span v-if="level === 0">Start Game</span>
      <span v-if="level > 0">Next Level</span>
    </button>
  </common-layout>
</template>

<script>
import CommonLayout from "@/layouts/CommonLayout.vue";
export default {
  components: { CommonLayout },
  methods: {
    setCurrentLevel() {
      if (this.level === 1) {
        this.currentLevel = this.catLevel1;
      } else if (this.level === 2) {
        this.currentLevel = this.catLevel2;
      }
    },

    drag(e, answer) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("answerId", answer.id);
    },

    drop(e, lineNumber) {
        console.log(e);
        const answerId = e.dataTransfer.getData("answerId");
        const answer = this.currentLevel.answers.find((answer) => answer.id == answerId);
        answer.line = lineNumber;
    },
  },
  watch: {
    level: function () {
      this.setCurrentLevel();
    },
  },
  computed: {
    answerList() {
      return this.currentLevel.answers.filter((answer) => answer.line === 0);
    },
    displayCode() {
      return this.currentLevel.code.map((line) => {
        const answer = this.currentLevel.answers.find(
          (a) => a.line === line.line
        );
        if (answer) {
          const droppedAnswer = this.currentLevel.answers.find(
            (a) => a.id == answer.id
          );
          return {
            ...line,
            content: line.content.replace(answer.answer, droppedAnswer.answer),
          };
        }
        return line;
      });
    },
  },
  data() {
    return {
      level: 0,
      currentLevel: {},
      catLevel1: {
        id: 1,
        instructions: `Variables are a big part of Sass's reusability and organization in your stylesheets. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Drag the correct variable names and values below to the correct spots to create the color foundations for your cat!`,
        code: [
          { line: 1, content: "$primary-color: ", answer: "#FFD391" },
          { line: 2, content: "$accent-color: ", answer: "#000000" },
          { line: 3, content: "$radius: ", answer: "50%" },
          {
            line: 4,
            content: ".cat-face\n\n\tbackground-color: ",
            answer: "$primary-color",
          },
          {
            line: 5,
            content:
              "\t.cat-eyes .left,\n\t.cat-eyes .right\n\n\t\tbackground-color: ",
            answer: "$accent-color",
          },
          { line: 6, content: "\t\tborder-radius: ", answer: "$radius" },
        ],
        answers: [
          { line: 0, id: 1, answer: "#FFD391" },
          { line: 0, id: 2, answer: "#000000" },
          { line: 0, id: 3, answer: "50%" },
          { line: 0, id: 4, answer: "$primary-color" },
          { line: 0, id: 5, answer: "$accent-color" },
          { line: 0, id: 6, answer: "$radius" },
        ],
      },
      catLevel2: {
        id: 2,
        instructions: `Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice. With that knowledge, drag the selectors below to their correct nested spots to style the right element!\n
            // Note: nested selectors like this are only needed if each parent has specific styling, like in this case, where the cat face is the parent element, and it's children make up the face, all with their own styling element, not shown in this code snippet.`,
        code: [
          { line: 1, content: " ", answer: ".cat-face" },
          { line: 2, content: "\t ", answer: ".cat-mouth" },
          { line: 3, content: "\t\t ", answer: "&:before" },
          {
            line: 4,
            content: "\t\t\tbackground-color: ",
            answer: "$accent-color",
          },
          { line: 5, content: "\t\t\tborder-radius: ", answer: "$radius" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.instructions {
  margin: 10px auto;
  white-space: pre-line;
  min-width: 150px;
  max-width: 60%;
}
.game {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 20px;
  .answers {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: baseline;
    gap: 10px;
    .drag {
      padding: 10px;
      border: 2px solid blueviolet;
      &:hover {
        color: blueviolet;
      }
    }
  }
  .code {
    display: flex;
    flex-direction: column;
    min-width: 150px;
    max-width: 60%;
    border: 5px solid magenta;
    border-radius: 12px;
    padding: 20px;
    .line {
      display: flex;
      flex-direction: row;
      padding: 10px;
      h3 {
        margin-bottom: 0;
        padding: 6px;
      }
      pre {
        display: block;
        font-family: inherit;
        overflow: visible;
        text-align: left;
        margin-bottom: 0;
      }
      .drop {
        padding: 10px;
        min-width: 150px;
        min-height: 48px;
        border: 2px solid purple;
        align-self: flex-end;
      }
    }
  }
}
</style>