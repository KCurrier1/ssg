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
        <div class="level-info">
          <h1 class="level-title">{{ currentLevel.title }}</h1>
          <h2 class="level-counter">Level {{ level }} of {{ totalLevels }}</h2>
          <button
            v-if="level > 1"
            class="btn btn-secondary"
            @click="
              currentLevel = {};
              levelCompleted = false;
              level = level - 1;
            "
          >
            <img class="previous" src="@/assets/arrow-left.png" />
          </button>
        </div>
        <!-- Renders level instructions -->
        <div class="instructions">{{ currentLevel.instructions }}</div>
        <div class="code">
          <div class="code-lines">
            <!-- Renders all lines of code saved in the currentLevel data -->
            <span
              class="line"
              v-for="lines in currentLevel.code"
              :key="lines.line"
            >
              <h5>
                <!-- <pre> allows the escape characters to activate in the strings -->
                <pre>{{ lines.content }}</pre>
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
              @drop="onDrop"
            />
          </div>
        </div>
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
      </div>
      <!-- Holds the dog component - more tbd -->
      <div class="right-container" v-if="level > 0">
        <div class="dog-drawing-holder"><dog-component /></div>
      </div>
      <!-- Shows the level completed screen when all answers are placed correctly
      Also acts as level navigation -->
      <div class="completed" v-if="levelCompleted">
        <h1>Congratulations! You completed the level! Try the next one?</h1>
        <button
          v-if="level < totalLevels"
          @click="
            currentLevel = {};
            levelCompleted = false;
            level = level + 1;
          "
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
    <button
      v-if="level === 0"
      @click="
        currentLevel = {};
        level = level + 1;
      "
    >
      Start Game
    </button>
  </common-layout>
</template>

<script>
import AnswerBox from "@/components/AnswerBoxComponent.vue";
import CommonLayout from "@/layouts/CommonLayout.vue";
import DogComponent from "@/components/DogComponent.vue";

export default {
  components: { AnswerBox, CommonLayout, DogComponent },
  data() {
    return {
      level: 0, //counter for current level
      totalLevels: 2, //total levels for this stage
      currentLevel: {}, //updates with the data for current level
      dragAnswer: null, //updates when user begins dragging an answer
      levelCompleted: false, //updates via the checkCompletion method
      gameCompleted: false, //updates via the checkCompletion method
      dogLevel1: {
        title: "Variables",
        instructions: `Variables are a big part of Sass's reusability and organization in your stylesheets. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Drag the correct variable names and values below to the correct spots to create the color foundations for your dog!`,
        code: [
          { content: "$primary-color: ____________ (#1)" },
          { content: "$accent-color: ____________ (#2)" },
          { content: "$radius: _______ (#3)" },
          { content: ".dog-face\n\n\tbackground-color: ________________ (#4)" },
          {
            content:
              "\t.dog-eyes .left,\n\t.dog-eyes .right\n\n\t\tbackground-color: _______________ (#5)",
          },
          { content: "\t\tborder-radius: ____________ (#6)" },
        ],
        answers: [
          { text: "#FFD391", used: false },
          { text: "#000000", used: false },
          { text: "50%", used: false },
          { text: "$primary-color", used: false },
          { text: "$accent-color", used: false },
          { text: "$radius", used: false },
        ],
        dropBoxes: [
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
          { answer: null },
        ],
      },
      dogLevel2: {
        title: "Selectors",
        instructions: `Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice. With that knowledge, drag the selectors below to their correct nested spots to style the right element!\n
            // Note: nested selectors like this are only needed if each parent has specific styling, like in this case, where the dog face is the parent element, and it's children make up the face, all with their own styling element, not shown in this code snippet.`,
        code: [
          { content: "____________ (#1)" },
          { content: "\t____________ (#2)" },
          { content: "\t\t____________ (#3)" },
          { content: "\t\t\tbackground-color: _______________ (#4)" },
          { content: "\t\t\tborder-radius: ___________ (#5)" },
        ],
        answers: [
          { text: ".dog-face", used: false },
          { text: ".dog-mouth", used: false },
          { text: "&:before", used: false },
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
        this.currentLevel = this.dogLevel1;
      } else if (this.level === 2) {
        this.currentLevel = this.dogLevel2;
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
  },
};
</script>

<style lang="scss" scoped>
// holds all level elements
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  padding: 10px 0 0;
}
// holds dog component
.right-container {
  display: flex;
  flex-direction: column;
  align-content: right;
  flex: 0.4;
  margin-right: 50px;
  .dog-drawing-holder {
    width: 20px;
    height: 15px;
    position: relative;
    top: 10%;
    left: -50%;
    z-index: 1;
    @media (max-width: 775px) {
      top: -10% !important;
      left: -190% !important;
    }
  }
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
}
// holds title, counter, and previous level button
.level-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .previous {
    width: 15px;
    height: 15px;
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
    min-height: 48px;
    align-self: flex-end;
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

// This is the overlay for when the level and/or game is completed
// It covers the entire page where no other elements are clickable to ensure 
// the users follow the expected navigation
.completed {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 150vh;
  background-color: rgba($color: #2b4075, $alpha: 0.8);
  padding: 150px 30px;
  color: #f2f2f2;
}
</style>