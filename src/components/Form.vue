<template>
  <section class="main-container">
    <div>
      <img v-if="companion" :src="companion.path" :alt="companion.name" />
    </div>
    <div class="form-container" >
      <h1>Hello! I'm Nazca!</h1>
      <form action="">
        <fieldset class="form">
            <legend><h3>What is your {{ title }}?</h3>
              <p>(example: 7 years and 3 months)</p>
            </legend>
          <div class="input-container" v-if="!showAge">
            <label for="name">Name</label>
            <csm-input type="text" @csmInput="inputName"></csm-input>
          </div>
          <div class="inputs-container" v-if="showAge">
            <div class="input-container" >
              <label for="years" class="form-label">Years</label>
              <csm-input type="number" name="years" @csmInput="inputYears" ></csm-input>
            </div>
            <div class="input-container">
              <label for="months" class="form-label">Months</label>
              <csm-input type="number" name="months" @csmInput="inputMonths" ></csm-input>
            </div>
          </div>
        </fieldset>
      </form>
      <div class="next-container">
          <csm-button @csmClick="toggleShowAge" primary>Next</csm-button>
      </div>
    </div>

    <audio src="@/assets/music/MainMenu.mp4" autoplay="true"></audio>
  </section>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import store from "../store"
import { useCompanion } from "../composables/useCompanion";

export default defineComponent({
  props: {},
  setup() {
    const companionHook = useCompanion.getInstance();
    let companionFromHook = companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);

    const showAge = ref(false);
    const title = computed(() => (showAge.value ? "age" : "name"));
    const allowGoNext = computed(()=> showAge.value && store.user.value.name && store.user.value.years && store.user.value.months);
    const inputName = (event) => {
      store.setName(event.detail.value);
    };

    const inputYears = (event) => {
      store.setYears(event.detail.value)
    };
    const inputMonths = (event) => {
        store.setMonths(event.detail.value)
    };
    const toggleShowAge = () => {
      if (allowGoNext.value) {
        router.push({ path: "/gamelist" });
      }
      showAge.value = !showAge.value;
    };

    return {
      showAge,
      toggleShowAge,
      title,
      inputName,
      inputYears,
      inputMonths,
      companion,
      companionHook,
    };
  },
});
</script>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--nazca-rect-padding);
  background-color: var(--nazca-rect-color);
  border-radius: var(--nazca-rect-radius);
  margin-right: 3em;
}

img {
    max-width: 350px;
}
section {
    display: flex;
    width: 100%;
}
section > div {
    width: 50%;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inputs-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.form-label {
  width: 10em;
}
csm-input {
  margin: 5px;
}
.input-container {
    display: flex;
    align-items: center;
}
.next-container {
    display: flex;
    justify-content: flex-end;
}
</style>
