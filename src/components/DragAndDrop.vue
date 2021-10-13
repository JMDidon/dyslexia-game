<template>
  <div>
    <h1>Draggable Elements</h1>
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
  </div>
</template>
<script>
export default {
  name: "DragAndDrop",
  data() {
    const game1Solution = [
      {
        name: "General word",
        answer: ["maze", "trial", "cream", "peace", "way", "day"]
      },
      {
        name: "Sight word",
        answer: ["niece", "through", "eyes", "laugh", "cough", "doubt"]
      },
      {
        name: "Nonsense word",
        answer: ["flaos", "qarmel", "faw", "lare", "miro", "himmer"]
      }
    ];

    const game2Solution = [
      {
        name: "Word",
        answer: [
          "lace",
          "mice",
          "lore",
          "theme",
          "few",
          "mad",
          "cab",
          "cup",
          "leave",
          "bat"
        ]
      },
      {
        name: "Syllables",
        answer: [
          "glas",
          "dai",
          "mon",
          "pret",
          "fect",
          "glit",
          "ther",
          "ses",
          "sil",
          "gui"
        ]
      }
    ];
    const games = [
      {
        id: 1,
        origin: [
          "maze",
          "niece",
          "flaos",
          "trial",
          "through",
          "qarmel",
          "tream",
          "eyes",
          "faw",
          "peace",
          "laugh",
          "lare",
          "way",
          "cough",
          "miro",
          "day",
          "doubt",
          "himmer"
        ],
        target1: [],
        target2: [],
        target3: []
      },
      {
        id: 2,
        origin: ["apple", "orange", "grape"],
        target1: [],
        target2: []
      }
    ];
    const origin = games[0].origin;
    return { game1Solution, game2Solution, games, origin };
  },
  methods: {

    getCurrentOrigin(gameId) {
      if (gameId && gameId===1) {
        this.origin = games[0].origin
      }else {
        this.origin = games[1].origin
      }
    },
    drag(ev, text) {
      ev.dataTransfer.setData("text", text);
    },
    // spliceArray(text, gameIndex) {
    //   this.origin = games[gameIndex].origin;
    //   const index = origin.findIndex(o => o === text);
    //   origin.splice(index, 1);
    // },
    drop(ev) {
      const text = ev.dataTransfer.getData("text");
      const index = this.origin.findIndex(o => o === text);
      this.origin.splice(index, 1);
      this.target1.push(text);
      // const text = ev.dataTransfer.getData("text");
      // this.spliceArray(text,0);
      // this.target1.push(text);
      debugger
    },
    drop2(ev) {
      const text = ev.dataTransfer.getData("text");
      const index = this.origin.findIndex(o => o === text);
      this.origin.splice(index, 1);
      this.target2.push(text);
    },
    drop3(ev) {
      const text = ev.dataTransfer.getData("text");
      const index = this.origin.findIndex(o => o === text);
      this.origin.splice(index, 1);
      this.target3.push(text);
    }
  }
};
</script>
<style scoped>
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
</style>
