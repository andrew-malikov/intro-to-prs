<template lang="pug">
  #app
    .eg-slideshow
      Introduction

      slide
        h3 Системы распознавания образов (PRS)
        p.
          PRS - это автоматическая система, которая направлена на
          классификацию объектов по нескольким категориям или классам

      slide
        h3 Задачи
        ul
          li.
            извлечение признаков из образцов (образов)
          li.
            классификация (или распознавание) на основе признаков

      slide(:steps=7)
        h3 Образец
        ul
          li(v-if='step > 1') пиксель на изображении
          li(v-if='step > 2') 2D или 3D фигура
          li(v-if='step > 3') рукописный символ
          li(v-if='step > 4') походка человека
          li(v-if='step > 5') жест
          li(v-if='step > 6') отпечаток пальца и т.д.

      slide
        h3 Признаки
        p некоторое количественное измерение
      
      slide(:steps=3)
        h3 Стратегии обучения
        ul
          li(v-if='step > 1') с обучением
          li(v-if='step > 2') без обучения

      slide
        h3 Основные методологии в PRS
        ul
          li статистический подход
          li синтаксический подход  
          li сопоставление с шаблоном
          li нейронные сети

      slide
        h3 Статистический подход
        ul
          li основывается на статистике и вычислении вероятностей
          li.
            обычно признаки представлены в виде векторов
          li.
            наиболее интенсивно используется на практике,
            потому что это самый простой в обращении

      slide
        h3 Синтаксический подход (стурктурный)
        ul
          li.
            предложен для того, чтобы представлять иерархическую информацию,
            содержащуюся в каждом образе
          li.
            образ описывается при помощи более простых подобразов

      slide
        h3 Cопоставление с шаблоном
        ul
          li.
            широко используется при обработке изображений
            для локализации и идентификации формы в изображении
          li.
            ищутся части изображения, которые соответствуют образцу

      slide
        h3 Нейронные сети
        ul
          li.
            требуетогромного количества примеров задачи распознавания
          li.
            высокая эффективность и производительность

      slide(:steps=4)
        h3 OpenCV
        ul
          li(v-if='step > 1').
           одна из самых популярных библиотек компьютерного зрения
          li(v-if='step > 2') включает более 1000 функций и алгоритмов
          li(v-if='step > 3') самая большая библиотека по широте тематики

      slide
        h3 Обычное приложение с OpenCV
        img(src="./assets/open-cv-apps.jpg").center

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Eagle from "eagle.js";

import Introduction from "./slides/Introduction.vue";

@Component({
  components: {
    Introduction
  },
  mixins: [Eagle.slideshow]
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  width: 100%;
  margin: 0 0;
}

html {
  height: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #27292b;
  width: 100%;
}

@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

#app {
  .eg-slideshow {
    font-family: "Noto Sans", sans-serif;
    background-color: rgb(236, 236, 236);

    .eg-slide {
      .eg-slide-content {
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }

  .eg-slide-content {
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

img {
  border-color: #27292b28;
  border-width: 0.05em;
  border-style: solid;
  border-radius: 0.05em;
  box-shadow: 0.1em 0.1em 0.5em #27292b7a;
}
</style>
