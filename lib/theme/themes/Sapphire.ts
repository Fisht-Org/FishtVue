import type { FishtVueConfiguration } from "fishtvue/config"
import defaultPrimitive from "fishtvue/theme/primitive"
import defaultSemantic from "fishtvue/theme/semantic"
import fixWindowStyle from "fishtvue/fixwindow/themes/sapphire"

export default <FishtVueConfiguration["theme"]>{
  name: "Sapphire",
  primitive: defaultPrimitive,
  semantic: defaultSemantic,
  components: {
    FixWindow: fixWindowStyle
  }
}
