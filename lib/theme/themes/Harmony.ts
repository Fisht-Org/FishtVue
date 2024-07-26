import type { FishtVueConfiguration } from "fishtvue/config"
import defaultPrimitive from "fishtvue/theme/primitive"
import defaultSemantic from "fishtvue/theme/semantic"
import fixWindowStyle from "fishtvue/fixwindow/themes/harmony"

export default <FishtVueConfiguration["theme"]>{
  primitive: defaultPrimitive,
  semantic: defaultSemantic,
  components: {
    FixWindow: fixWindowStyle
  }
}
