<template>
  <div class="game1">
    <csm-button
      icon="arrow-left"
      iconPosition="left"
      text
      @csmClick="goToGameList"
      class="back-button"
      >Back</csm-button
    >
    <csm-pill @csmClick="goToGameList" class="next-button">I'm done!</csm-pill>
    <img src="./../assets/Animal1.svg" alt="Animal" />
    <div class="instruction">
      <div class="panel">
        <div class="instructionsPanel">
          <h1 class="h2">Word recognition</h1>
          <h2 class="h2">Waouh, look!</h2>
          <p>There are wells!</p>
          <button type="button" @click="playInstruction()">
            <!-- speaker icon goes here -->
            <img src="./../assets/Hear instructions.png" alt="" />
            <span class="listen"
              ><span class="sr-only">Listen to the</span>Instructions</span
            >
          </button>
        </div>
        <div class="game"></div>
      </div>
    </div>
    <div class="draggable-container">
      <div
        class="draggable"
        :draggable="true"
        @dragstart="drag($event, o)"
        v-for="o of origin"
        :key="o"
        @click.stop
      >
        {{ o }}
      </div>
    </div>

    <div class="basket_container">
      <div id="target" class="basket_column">
        <div @dragover.prevent @drop="drop">
          <img src="./../assets/well.png" alt="well" />
          <!-- <div class="draggable" v-for="t of target1" :key="t">
            {{ t }}
          </div> -->
          <csm-pill>General words</csm-pill>
        </div>
      </div>
      <div id="target2" class="basket_column">
        <div @dragover.prevent @drop="drop2">
          <img src="./../assets/well.png" alt="well" />
          <!-- <div class="draggable" v-for="t of target2" :key="t">
            {{ t }}
          </div> -->
          <csm-pill>Irregular words</csm-pill>
        </div>
      </div>
      <div id="target3" class="basket_column">
        <div @dragover.prevent @drop="drop3">
          <img src="./../assets/well.png" alt="well" />
          <!-- <div class="draggable" v-for="t of target3" :key="t">
            {{ t }}
          </div> -->
          <csm-pill>Words with no meaning</csm-pill>
        </div>
      </div>
    </div>
    <!-- <div>{{ this.result }} / 9</div> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import well from "./../assets/Well.mp3";

const setup = props => {
  const goToGameList = () => router.push({ path: "/gamelist" });
  const result = ref(null);
  return {
    result,
    goToGameList
  };
};
export default defineComponent({
  name: "Game1",
  props: {},
  computed: {},
  methods: {
    checkResult(first, second) {
      const count = first.reduce((acc, val) => {
        if (second.includes(val)) {
          return ++acc;
        }
        return acc;
      }, 0);
      return count;
    },

    drag(ev, text) {
      ev.dataTransfer.setData("text", text);
    },
    spliceArray(text) {
      const index = this.origin.findIndex(o => o === text);
      this.origin.splice(index, 1);
      if (this.origin.length === 0) {
        const count1 = this.checkResult(
          this.game1Solution[0].answer,
          this.target1
        );
        const count2 = this.checkResult(
          this.game1Solution[1].answer,
          this.target2
        );
        const count3 = this.checkResult(
          this.game1Solution[2].answer,
          this.target3
        );
        this.result = count1 + count2 + count3;
        console.log("$result", this.result);
      }
    },
    drop(ev) {
      const text = ev.dataTransfer.getData("text");
      this.spliceArray(text);
      this.target1.push(text);
    },
    drop2(ev) {
      const text = ev.dataTransfer.getData("text");
      this.spliceArray(text);
      this.target2.push(text);
    },
    drop3(ev) {
      const text = ev.dataTransfer.getData("text");
      this.spliceArray(text);
      this.target3.push(text);
    },
    playInstruction() {
      const audio = new Audio(well);
      audio.play();
    }
  },
  data() {
    const game1Solution = [
      {
        name: "General word",
        answer: [
          "maze",
          "trial"
          //   "cream"
          // "peace", "way", "day"
        ]
      },
      {
        name: "Sight word",
        answer: [
          "niece",
          "through"
          //   "eyes"
          //  "laugh", "cough", "doubt"
        ]
      },
      {
        name: "Nonsense word",
        answer: [
          "flaos"
          //   "qarmel",
          //   "faw"
          // "lare", "miro", "himmer"
        ]
      }
    ];

    return {
      origin: [
        "maze",
        "niece",
        "flaos",
        "trial",
        "through"
        // "qarmel",
        // "cream",
        // "eyes",
        // "faw"
        // "peace",
        // "laugh",
        // "lare",
        // "way",
        // "cough",
        // "miro",
        // "day",
        // "doubt",
        // "himmer"
      ],
      target1: [],
      target2: [],
      target3: [],
      game1Solution
    };
  },
  setup
});
</script>
<style scoped>
.game1 {
  background: url("./../assets/background/word_recognition.png") no-repeat
    center center fixed;
  background-color: antiquewhite;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.instruction {
  /* display: flex;
 justify-content: center; */
  left: 40px;
  position: absolute;
  top: 200px;
  width: 361px;
  height: 382px;
  background: #f9eded;
  border-radius: 8px;
}

.instruction button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.panel {
  display: flex;
  justify-content: center;
}
.instructionsPanel {
}

.draggable-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  top: 15%;
  left: 35%;
  flex-wrap: wrap;
  height: 160px;
}
.draggable {
  margin-right: 30px;
  width: 161px;
  height: 51px;
  border-radius: 8px;
  background: #f9eded;
  display: flex;
  align-items: center;
  justify-content: center;
}
#target,
#target2,
#target3 {
  width: 100%;
  height: 100px;
  padding: 5px;
  width: 240px;
  height: 240px;
}

#target {
  margin-right: 40px;
}
#target2 {
  margin: 0 40px 50px 0;
}
#target3 {
  margin: 0 40px 80px 0;
}

img {
  width: 250px;
}

.basket_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 170px;
  left: 30%;
}

.basket_column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  position: absolute;
  top: 80px;
  left: 26px;
  cursor: pointer;
}

.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
}

.draggable span {
  margin: 20px;
}

csm-pill {
  height: 50px;
  min-width: 200px;
}
</style>
