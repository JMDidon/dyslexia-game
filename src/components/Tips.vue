<template>

  <!-- THIS PAGE IS DISABLED -->

  <section>
   <div class="container">
     <div>IMAGE</div>
     <div>
       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci dignissimos fugit, nobis magnam quae illo ducimus iste numquam voluptatem. Tenetur neque eos facilis cupiditate, ex iste blanditiis deleniti doloribus.</div>
        <button @click="goToGameList">Jouons</button>
     </div>
   </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import router from "@/router";
export default defineComponent({
  props: {},
  setup() {
    const goToGameList = () =>
      router.push({ path: "/gamelist" });
    return {
      goToGameList
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  width: 100%;

}
.container > div {
  width: 50%;
}
</style>
