<template lang="pug">
  eg-transition(:enter="enter" :leave="leave")
    .eg-slide(v-if="active")
      .eg-slide-content
        #Introduction
          h3.title Системы распознавания образов
          HorizontalSpacer
          .author
            p Выполнил
            p Маликов А.А
            p Студент 15ФИИТ(ба)ОП
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Eagle from "eagle.js";

import HorizontalSpacer from "../components/HorizontalSpacer.vue";

@Component({
  mixins: [Eagle.slide],
  components: { HorizontalSpacer }
})
export default class Introduction extends Vue {}
</script>

<style scoped lang="scss">
.title {
  text-align: left;
}

.author {
  display: flex;
  flex-direction: column;

  p {
    padding: 0.2em;
    margin: 0%;
  }
}

#Introduction {
  padding: 0.2em;
}
</style>
