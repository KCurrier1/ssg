<template>
  <!-- Layout for nav -->
  <common-layout>
    <!-- Displays level information while the game is not over -->
    <div class="main-container" v-if="!gameCompleted">
      <!-- Only attempts to render level info after game is started
      and the first level is populated -->
      <div class="game" v-if="level > 0">
        <!-- Contains level title, counter, and previous button after
        the user completes more than 1 level -->
        <div class="with-previous">
          <div class="level-info">
            <h1 class="level-title" draggable="false">
              {{ currentLevel.title }}
            </h1>
            <h2 class="level-counter" draggable="false">
              Level {{ level }} of {{ totalLevels }}
            </h2>
          </div>
          <button
            v-if="level > 1"
            class="btn btn-secondary"
            @click="
              currentLevel = {};
              level = level - 1;
              levelCompleted = false;
              needReset = true;
            "
            draggable="false"
          >
            <img class="previous" src="@/assets/arrow-left.png" />
          </button>
        </div>
        <!-- Renders level instructions -->
        <div class="instructions">{{ currentLevel.instructions }}</div>
        <!-- Renders the answer list for the current level -->
        <div class="answers">
          <div
            v-for="(answer, index) in currentLevel.answers"
            :key="index"
            class="answer"
            :class="{ 'answer-disabled': answer.used }"
            :draggable="!answer.used"
            @dragstart="onDragStart(answer)"
          >
            {{ answer.text }}
          </div>
        </div>
        <div class="code">
          <div class="code-lines">
            <!-- Renders all lines of code saved in the currentLevel data -->
            <span
              class="line"
              v-for="lines in currentLevel.code"
              :key="lines.line"
            >
              <h5 draggable="false">
                <!-- <pre> allows the escape characters to activate in the strings -->
                <pre draggable="false">{{ lines.content }}</pre>
              </h5>
            </span>
          </div>
          <div class="drop-boxes">
            <!--Renders an AnswerBoxComponent for every answer 
            Triggers an onDrop function when an answer is dropped into the box -->
            <answer-box
              v-for="(box, index) in currentLevel.dropBoxes"
              :key="index"
              :answer="box.answer"
              :index="index"
              :answers="answers"
              :class="{ wrong: needReset }"
              @dragstart="onDragStart(answer)"
              @drop="onDrop"
              draggable="box.used"
            />
          </div>
        </div>
      </div>
      <!-- Holds the bear component -->
      <div class="right-container" v-if="level > 0">
        <button v-if="needReset" @click="reset()" class="btn btn-danger">
          Try Again?
        </button>
        <img src="@/assets/Bear.png" alt="Bear" draggable="false" />
      </div>
      <!-- Shows the level completed screen when all answers are placed correctly
      Also acts as level navigation -->
      <div class="completed" v-if="levelCompleted">
        <h1>Congratulations! You completed the level! Try the next one?</h1>
        <button
          v-if="level < totalLevels"
          @click="
            currentLevel = {};
            level = level + 1;
            levelCompleted = false;
          "
          class="btn btn-secondary" style="color: white"
        >
          Next Level
        </button>
      </div>
    </div>
    <!-- Win screen renders once all levels in the stage are completed correctly
    links back to stage selection screen -->
    <div class="completed" v-if="gameCompleted">
      <h1>Congratulations! You completed the game. Try a new stage?</h1>
      <router-link to="/allstages" class="btn btn-primary"
        >Stage Select</router-link
      >
    </div>
    <!-- only rendered before the game starts -->
    <div class="start" v-if="level === 0">
      <img src="@/assets/Bear.png" alt="Bear" draggable="false" />
      <h3>Tip: Place an answer in the wrong spot? Try dragging a different one over it to replace it! Or keep going and retry the level! :)</h3>
      <button
        @click="
          currentLevel = {};
          level = level + 1;
        "
        class="btn btn-primary"
      >
        Start Game
      </button>
    </div>
  </common-layout>
</template>

<script>
import AnswerBox from "@/components/AnswerBoxComponent.vue";
import CommonLayout from "@/layouts/CommonLayout.vue";

export default {
  components: { AnswerBox, CommonLayout },
  data() {
    return {
      level: 0, //counter for current level
      totalLevels: 4, //total levels for this stage
      currentLevel: {}, //updates with the data for current level
      dragAnswer: null, //updates when user begins dragging an answer
      needReset: false,
      levelCompleted: false, //updates via the checkCompletion method
      gameCompleted: false, //updates via the checkCompletion method
      bearLevel1: {
        title: "Variables",
        instructions: `Variables are a big part of Sass's reusability and organization in your stylesheets. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Drag the correct variable names and values below to the correct spots to create the color foundations for your bear!`,
        code: [
          {
            content:
              "$primary-color: ____________ (#1)\n$secondary-color: #D0BA96\n$accent-color: ____________ (#2)",
          },
          {
            content: ".bear-face\n\n\tbackground-color: ________________ (#3)",
          },
          {
            content:
              "\t.bear-eyes .left, .bear-eyes .right\n\n\t\tbackground-color: _______________ (#4)",
          },
          {
            content:
              "\t.bear-mouth-circle\n\n\t\tbackground-color: ____________ (#5)",
          },
        ],
        answers: [
          { text: "#5A3D0D", used: false },
          { text: "#000000", used: false },
          { text: "$primary-color", used: false },
          { text: "$accent-color", used: false },
          { text: "$secondary-color", used: false },
        ],
        dropBoxes: [
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
        ],
      },
      bearLevel2: {
        title: "Selectors",
        instructions: `Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice. With that knowledge, drag the selectors below to their correct nested spots to style the right element!\n`,
        code: [
          { content: "____________ (#1)" },
          { content: "\t____________ (#2)" },
          { content: "\t\t____________ (#3)" },
          {
            content:
              "\t\t\tbackground-color: _______________ (#4)\n\n\t\t\twidth: 10px\n\n\t\t\tborder-radius: ___________ (#5)",
          },
        ],
        answers: [
          { text: ".bear-face", used: false },
          { text: ".bear-mouth-circle", used: false },
          { text: ".bear-nose", used: false },
          { text: "$accent-color", used: false },
          { text: "$radius", used: false },
        ],
        dropBoxes: [
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
        ],
      },
      bearLevel3: {
        title: "Mixins",
        instructions: `Mixins are a powerful way to reuse CSS rules. They allow you to define a set of CSS rules once, and then reuse them multiple times throughout your code. Drag the correct mixin names and values below to the correct spots to create the bear's ears.`,
        code: [
          {
            content:
              "@mixin bear-ear($color)\n\n\tbackground-color: ____________ (#1)\n\n\twidth: ____________ (#2)\n\n\theight: ____________ (#3)\n\n\tposition: absolute",
          },
          {
            content:
              ".bear-ear-left \n\n\t@include _______________ (#4)($primary-color)",
          },
          {
            content: "___________ (#5)\n\n\t @include bear-ear($primary-color)",
          },
        ],
        answers: [
          { text: "$color", used: false },
          { text: "100px", used: false },
          { text: "50px", used: false },
          { text: "bear-ear", used: false },
          { text: ".bear-ear-right", used: false },
        ],
        dropBoxes: [
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
        ],
      },
      bearLevel4: {
        title: "Inheritance",
        instructions:
          "Sass allows you to create reusable styles using `@extend` using inheritance. `@extend` allows you to take all of the styles from one selector and apply them to another. This inheritance allows you to define a base style and then extend it with additional styles. Use `@extend` and inheritance to style the bear's paws.",

        code: [
          {
            content:
              ".base-paws\n\n\tbackground-color: $secondary-color\n\tborder: 5px solid ____________ (#1)\n\twidth: 50px\n\theight: 50px",
          },
          {
            content:
              ".bear-paw-left\n\n\t____________ (#2) .base-paw\n\ttransform: rotate(-45deg)",
          },
          {
            content:
              "____________ (#3)\n\n\t@extend .base-paw\n\ttransform: rotate(45deg)",
          },
        ],

        answers: [
          { text: "$primary-color", used: false },
          { text: "@extend", used: false },
          { text: ".bear-paw-right", used: false },
        ],

        dropBoxes: [{ answer: null }, { answer: null }, { answer: null }],
      },
    };
  },
  // This makes vue re-render the level everytime the counter changes
  watch: {
    level: function () {
      this.setCurrentLevel();
    },
  },
  methods: {
    // sets the current level data based on the level counter
    setCurrentLevel() {
      if (this.level === 1) {
        this.currentLevel = this.bearLevel1;
      } else if (this.level === 2) {
        this.currentLevel = this.bearLevel2;
      } else if (this.level === 3) {
        this.currentLevel = this.bearLevel3;
      } else if (this.level === 4) {
        this.currentLevel = this.bearLevel4;
      }
    },
    //updates the dragAnswer with the answer data currently being moved
    onDragStart(answer) {
      this.dragAnswer = answer;
    },
    // Handles the answer boxes
    onDrop(index) {
      // sets the box the answer was dropped in
      const box = this.currentLevel.dropBoxes[index];
      // if the box already had an answer in it
      if (box.answer !== null) {
        // temp save the answer that was in it
        const prevAnswer = box.answer;
        // find the previous answer in the answer list
        const prevAnswerIndex = this.currentLevel.answers.findIndex(
          (a) => a.text === prevAnswer.text
        );
        // mark it as unused
        prevAnswer.used = false;
        box.used = false;
        // update the answer list
        if (prevAnswerIndex >= 0) {
          this.currentLevel.answers[prevAnswerIndex] = prevAnswer;
        } else {
          this.currentLevel.answers.push(prevAnswer);
        }
      }
      // place the dropped answer into the box
      box.answer = this.dragAnswer;
      // mark the answer as used
      this.dragAnswer.used = true;
      box.used = true;
      // clear the dragAnswer variable in prep for the next one
      this.dragAnswer = null;
      // check if level is complete
      this.checkCompletion();
    },
    checkCompletion() {
      // checks all answer boxes to make sure they are holding the correct answer
      const levelCompleted = this.currentLevel.dropBoxes.every(
        (box, index) =>
          box.answer &&
          box.answer.text === this.currentLevel.answers[index].text
      );
      if (levelCompleted == false) {
        if (
          this.currentLevel.dropBoxes.every((box) => box.answer.text !== null)
        ) {
          this.needReset = true;
        }
      }
      // sets the level to completed or leaves incompleted based on the previous check
      this.levelCompleted = levelCompleted;
      // if the level is complete, check if it was the last level
      if (levelCompleted) {
        if (this.level == this.totalLevels) {
          // if it was the last level, end the game
          this.gameCompleted = true;
        }
      }
    },
    reset() {
      this.currentLevel.dropBoxes.forEach((box, index) => {
        box.answer[index] = null;
        box.answer = null;
        this.currentLevel.answers[index].used = false;
      });
      this.needReset = false;
    },
  },
};
</script>

<style lang="scss" scoped>
//start screen
.start {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 450px;
  align-content: center;
  flex-wrap: wrap;
}

// holds all level elements
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 10px 0 0;
  @media (max-width: 775px) {
    gap: 20px;
  }
}
// holds bear component
.right-container {
  display: flex;
  flex: 0.4;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  @media (max-width: 775px) {
    margin-right: 0px;
  }
}
img {
  width: 400px;
  border-radius: 25px;
  margin: 10px;
}
// holds all game elements
.game {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: left;
  gap: 10px;
  margin-left: 50px;
  flex: 0.6;
  @media (max-width: 775px) {
    margin-left: 0px;
  }
}
// holds title, counter, and previous level button
.with-previous {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  .previous {
    width: 15px;
    height: 15px;
  }
  .level-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex: 1;
  }
}
// holds the code lines and answer boxes
.code {
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 10px;
  min-width: 150px;
  background-color: #a66bbf;
  color: #f2f2f2;
  border-radius: 12px;
  padding: 10px;
  .code-lines,
  .drop-boxes {
    flex-direction: column;
  }
  .line {
    display: flex;
    flex-direction: row;
    padding: 10px;
    h5 {
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
  }
  // answer boxes list
  .drop-boxes {
    display: flex;
    padding: 10px;
    min-width: 150px;
    min-height: 100%;
    align-self: flex-end;
    justify-content: space-evenly;
    gap: 20px;
  }
}
// holds answer list
.answers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  .answer {
    background-color: #2b4075;
    color: #f2f2f2;
    padding: 10px;
    border-radius: 12px;
  }
  // set after answer is used
  .answer-disabled {
    background-color: #d4d4d4;
  }
}

.wrong {
  background-color: #dc3545;
}

@keyframes tilt-n-move-shaking {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(2px, 2px) rotate(2deg);
  }
  50% {
    transform: translate(0, 0) rotate(0eg);
  }
  75% {
    transform: translate(-2px, 2px) rotate(-2deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

.btn-danger {
  animation: tilt-n-move-shaking 0.5s 100;
  padding: 10px;
  min-width: 200px;
}

// This is the overlay for when the level and/or game is completed
// It covers the entire page where no other elements are clickable to ensure
// the users follow the expected navigation
.completed {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #2b4075, $alpha: 0.8);
  padding: 150px 30px;
  color: #f2f2f2;
}
</style>