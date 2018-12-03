import { PluginObject, Component } from "vue";
import { Vue } from "vue-property-decorator";
import { VueClass } from "vue-class-component/lib/declarations";

interface Eagle extends PluginObject<Vue> {
  slideshow: VueClass<Vue>;
  slide: VueClass<Vue>;
}

declare var Eagle: Eagle;

export default Eagle;
