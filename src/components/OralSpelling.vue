<template>
  <section class="container">
    <div class="display">
      <div class="display">
        <div class="spelling-box">
          <h1> L'orthographe</h1>
          <p> Ici, je vais dire quelques mots.</p>
          <p class="words2">Pouvez-vous m'aider à les épeler ?</p>

          <div class="spelling">
            <img
              @click="playInstruction"
              src="@/assets/icons/Hear instructions.png"
              alt=""
              srcset=""
            />
          </div>
          <img
            class="avatar"
            v-if="companion"
            :src="companion.path"
            :alt="companion.name"
          />
        </div>
        <div class="inputs-container">
          <div class="inputs">
            <div @click="play" class="listen">
              <h2>Écoutez</h2>
              <img src="@/assets/icons/Sound icon.svg" alt="Sound" srcset="" />
            </div>
            <div @click="record" class="speak">
              <h2>Parlez</h2>
              <img
                src="@/assets/icons/noun_micro_3396391 1.svg"
                alt="micro"
                srcset=""
              />
            </div>
          </div>
          <button :disabled="!recordingState" class="next" @click="nextWord">Mot suivant</button>
        </div>
      </div>
    </div>

    <button class="pill next-button" @click="goToGameList">J'ai finis!</button>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechSynthesis } from "../composables/useSpeechSynthesis";
import { useSpeechRecognition } from "../composables/useSpeechRecon";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";
import SpellingExercise from "@/assets/voices/SpellingExercise.mp3";
import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";
import store from "../store";
export default defineComponent({
  props: {},
  setup() {
    const {  play : playAudio } = usePlayAudio();
    const startRecon = ref(false);
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);
    const values = ref([
      "boite",
      "crayon",
      "femme",
      "maison",
      "porte",
      "table",
    ]);
    const count = ref(0);
    const result = ref([]);
    const score = ref(0);
    const recordingState = ref(false);
    const gameState = useGameState.getInstance();
    const goToGameList = () => {
      gameState.updateGame(4); //FIXME: hard coded to 5, because we had 7 games.
      router.push({ path: "/gamelist" });
    }

    const currentWord = computed(() => values.value[count.value]);

    const { playOnWord } = useSpeechSynthesis();
    const { isRecording, transcript, confidence } = useSpeechRecognition(startRecon);
    const play = () => {
      playOnWord(currentWord.value);
    };
    const compare = () => {
    };
    const record = () => {
      recordingState.value = true;
      startRecon.value = true;
      compare();
    };
    const nextWord = () => {
      recordingState.value = false;
      count.value = ++count.value;
    };
    const playInstruction = () => {
      playAudio(SpellingExercise);
    };

    watch(isRecording, (currentRecording) => {
      startRecon.value = currentRecording;
    });
    watch(transcript, (currentTranscript) => {
      if (
        currentTranscript.toLowerCase() &&
        currentTranscript.includes(currentWord.value.toLowerCase())
      ) {
        result.value.push({
          word: currentWord.value,
          speech: transcript.value,
        });
        
        score.value = score.value + (10 / values.value) /100;
        store.setGameResult("ORAL_SPELLING",score.value);
      }
    });
    return {
      play,
      companion,
      record,
      transcript,
      nextWord,
      confidence,
      goToGameList,
      playInstruction,
      recordingState
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("@/assets/backgrounds/imgOK_river-nature") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100%;
}

.avatar {
  width: 200px;
  position: absolute;
  left: -1em;
  top: 80%;
}
.spelling-box {
  height: 328px;
  width: 350px;
  margin: 30px;
  border-radius: 15px;
  background-color: #f9edee;
  position: relative;
  padding: 40px;
}
.spelling-box .words2 {
  margin-top: 50px;
}
.spelling {
  margin-top: 35px;
  margin-left: 143px;
  cursor: pointer;
}
.inputs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.inputs {
  display: flex;
}
.listen,
.speak {
  width: 200px;
  border-radius: 100px;
  background-color: white;
  height: 200px;
  margin: 20px;
  cursor: pointer;
}
.listen h2,
.speak h2 {
  margin-top: 25px;
}
.next {
  width: 200px;
  height: 90px;
  border-radius: 45px;
  border-color: none;
  background-color: #f9edee;
  font-weight: 800;
  font-size: 20px;
  border-style: unset;
}
.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
}
.display {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
}
.next:disabled{
  cursor:not-allowed;
}
</style>
