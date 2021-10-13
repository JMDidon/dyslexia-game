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
    <h1>Draggable Elements</h1>
    <div
      class="draggable"
      :draggable="true"
      @dragstart="drag($event, o)"
      v-for="(o,index) of origin"
      :key="index"
      @click.stop
    >
      

    </div>
    <div class="basket_container">
      <div class="basket_column">
        <h2>Target1</h2>
        <div id="target" @dragover.prevent @drop="drop">
          <div class="draggable" v-for="t of target1" :key="t">
            {{ t }}
          </div>
        </div>
      </div>
      <div class="basket_column">
        <h2>Target2</h2>
        <div id="target2" @dragover.prevent @drop="drop2">
          <div class="draggable" v-for="t of target2" :key="t">
            {{ t }}
          </div>
        </div>
      </div>
      <div class="basket_column">
        <h2>Target3</h2>
        <div id="target3" @dragover.prevent @drop="drop3">
          <div class="draggable" v-for="t of target3" :key="t">
            {{ t }}
          </div>
        </div>
      </div>
    </div>
    <div>{{ this.result }} / 9</div>
    <csm-button @csmClick="goToGameList">I'm done!</csm-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import router from "@/router";

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
    }
  },
  data() {
    const game1Solution = [
      {
        name: "General word",
        answer: [
          "maze",
          "trial",
          "cream"
          // "peace", "way", "day"
        ]
      },
      {
        name: "Sight word",
        answer: [
          "niece",
          "through",
          "eyes"
          //  "laugh", "cough", "doubt"
        ]
      },
      {
        name: "Nonsense word",
        answer: [
          "flaos",
          "qarmel",
          "faw"
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
        "through",
        "qarmel",
        "cream",
        "eyes",
        "faw"
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
  background: url("./../assets/background/word_recognition.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.draggable {
  margin-right: 5px;
}
#target,
#target2,
#target3 {
  border: 1px solid black;
  width: 100%;
  height: 100px;
  padding: 5px;
}

.basket_container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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

.draggable span {
    margin: 20px;
}
</style>
