<template lang="pug">
  #app
    .eg-slideshow
      Introduction

      slide
        h3 Pattern recognition system (PRS)
        p.
          A pattern recognition system (PRS) is an automatic system
          that aims at classifying the input pattern into a specific class

      slide
        h3 Tasks
        ul
          li.
            the analysis (or description) that extracts
            the characteristics from the pattern being studied
          li.
            the classification (or recognition) that enables
            us to recognise an object (or a pattern) by using  
            some characteristics derived from the first task

      slide
        h3 The classification scheme
        p.
          Based on the availability of the training set that is a set 
          of  patterns  already  having  been  classified
      
      slide
        h3 Learning strategies
        ul
          li supervised learning
          li unsupervised learning
        
        // TODO: refactor the notes of speaker
        // TODO: the size of notes is too long
        p(v-if="parentWindow").
          A learning strategy is said to be unsupervised
          if for the system is not given an a priori information about classes;
          it establishes the classes itself based on the regularities of the features.
        p(v-if="parentWindow").
          Features are those measurements which are extracted
          from a pattern to represent it in the features space.
          In other words, pattern analysis enables us
          to use some features to describe and represent it  
          instead of using the pattern itself.
          Also called characteristics, attributes or signatures
          the recognition efficiency and reliability
          are dependent on their choice

      slide
        h3 Major methodologies in PRS
        ul
          li statistical approach
          li syntactic approach  
          li template matching
          li neural networks

      slide
        h3 Statistical approach
        ul
          li based on statistics and probabilities
          li.
            features  are  converted  to  numbers
            which  are  placed  into  a  vector
            to  represent  the  pattern
          li.
            is most intensively used in practice
            because it is the simplest to handle
        
        p(v-if="parentWindow").
          In this approach, patterns to be classified are represented
          by a set of features defining a specific multidimensional vector
          : by doing so, each pattern is represented by a point
          in the multidimensional features space.
          To compare patterns, this approach uses measures by  
          observing distances between points in this statistical space.
          For more details and deeper considerations on this approach,
          one can refer to (Jain, 2000) that presents a review of  
          statistical pattern recognition approaches

      slide
        h3 Syntactic approach (aka structural PRSs)
        ul
          li based on the relation between features
          li patterns are represented by structures
          li.
            patterns are described in hierarchical structure
            composed of sub-structures composed themselves of smaller sub-structur
 
        p(v-if="parentWindow").
          Patterns which can take into account more complex 
          relations between features than numerical   
          feature vectors used in statistical PRS

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
</style>
