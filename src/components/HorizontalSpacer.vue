<template lang="pug">
    hr
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HorizontalSpacer extends Vue {}
</script>

<style lang="scss" scoped>
hr {
  border-color: #27292b;
  border-width: 0.1em;
  border-style: solid;
  border-radius: 0.05em;
  opacity: 0.05;
  box-shadow: 0.1em 0.1em 0.2em #27292b;
}
</style>

