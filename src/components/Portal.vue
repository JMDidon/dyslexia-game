<template>
  <section class="main-container">
    <aside class="sidebar">
      <article :class="{ content: true, hide: stepIndex === 2 }">
        <p>{{ activeStep.text }}</p>
        <h4>{{ activeStep.bold }}</h4>
        <button class="action" primary @click="incrementStep()">
          {{ activeStep.action }}
        </button>
      </article>
      <img :class="companionClass" :src="companion.path" />
    </aside>

    <div class="jewels-container">
      <div
        :class="getJewelClass(index)"
        v-for="(jewel, index) in new Array(4).fill(undefined)"
        :key="index"
      >
        <img
          :class="{ jewel: true, hidden: stepIndex < 1, yeet: stepIndex === 2 }"
          src="@/assets/jewel.svg"
          alt="A jewel that looks like a shiny diamond!"
        />
      </div>
    </div>

    <audio src="@/assets/music/Credits.mp4" autoplay="true"></audio>
  </section>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  computed,
} from "@vue/composition-api";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";

function setup() {
  const companion = ref(useCompanion.getInstance().companion);
  const steps = ref([
    { text: "Tu as les 4 diamants ! Excellent travail !", bold: "Maintenant, allons au portail !", action: "Allons - y" },
    { text: "",  bold: "Nous avons réussi ! C’était une sacrée aventure !", action: "Place les diamants" },
    { text: "", bold: "", action: "" },
  ]);
  const activeStep = ref(steps.value[0]);
  const stepIndex = ref(0);
  const companionClass = computed(() => {
    let clazz = "companion";
    if (stepIndex.value === 1) {
      clazz += " step-1";
    }
    if (stepIndex.value === 2) {
      clazz += " step-2";
    }
    return clazz;
  });
  const jewelClass = computed(getJewelClass);

  function getJewelClass(index) {
    return index % 7 === 0
      ? { "jewel-full-columns": true }
      : index % 7 < 3
      ? { "jewel-half-columns": true }
      : { "jewel-single-column": true };
  }

  return {
    activeStep,
    companion,
    steps,
    stepIndex,
    incrementStep: () => {
      stepIndex.value = stepIndex.value + 1;
      activeStep.value = steps.value[stepIndex.value];

      if (stepIndex.value === 2) {
        setTimeout(() => {
          router.push({ path: "/end-game" });
        }, 5000);
      }
    },
    getJewelClass: (index) => {
      return index % 7 === 0
        ? { "jewel-full-columns": true }
        : index % 7 < 3
        ? { "jewel-half-columns": true }
        : { "jewel-single-column": true };
    },
    companionClass,
  };
}

export default defineComponent({
  props: {},
  setup,
});
</script>

<style scoped>
.main-container {
  display: flex;
  padding: 4em 2em 4em 6em;
  background-image: url('~@/assets/backgrounds/OK_MontagneEnneige.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.action{
  display: flex;
  justify-content: flex-end;
  border: 2px solid #000000;
  height: 26px;
  width: auto;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #b7d0f5;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
}

.sidebar {
  position: relative;
  width: 25%;
  text-align: left;
}

.content {
  width: 100%;
  height: 50%;
  padding: var(--nazka-rect-padding);
  background-color: var(--nazka-rect-color);
  border-radius: var(--nazka-rect-radius);
  transition: opacity 0.2s ease-in-out;
}

.content.hide {
  opacity: 0;
}

.content.hide > * {
  display: none;
}

.companion {
  position: absolute;
  bottom: 10em;
  left: -2em;
  width: 75%;
  user-select: none;
  transition: transform 0.33s ease-in-out, opacity 1s ease-in-out;
  pointer-events: none;
}

.companion.step-1 {
  transform: translateX(45vw);
}

.companion.step-2 {
  transform: translate(55vw, -10vh);
  opacity: 0;
  transition-duration: 1.5s, 3s;
  transition-delay: 1s, 2s;
}

.jewels-container {
  position: absolute;
  bottom: 10%;
  left: 33%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 25%);
  gap: 0 0.66em;
}

.jewel {
  width: 52px;
  height: 52px;
  transition: opacity 0.66s ease-in-out, transform 0.66s ease-in-out;
}

.jewel.hidden {
  opacity: 0;
  transform: scale(1.2);
}

.jewel.yeet {
  position: relative;
  opacity: 0;
  transform: translate(25vw, -20vw) rotate(60deg);
  transition-delay: 0.2s, 0s;
}

.jewel-full-columns {
  position: relative;
  grid-column: span 4;
}

.jewel-half-columns {
  position: relative;
  grid-column: span 2;
}

.jewel-single-column {
  position: relative;
  grid-column: span 4;
}
</style>
