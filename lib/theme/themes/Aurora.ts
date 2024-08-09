import type { FishtVueConfiguration } from "fishtvue/config"
import defaultPrimitive from "fishtvue/theme/primitive"
import defaultSemantic from "fishtvue/theme/semantic"
import fixWindowStyle from "fishtvue/fixwindow/themes/aurora"
import badgeStyle from "fishtvue/badge/themes/aurora"

export default <FishtVueConfiguration["theme"]>{
  name: "Aurora",
  primitive: defaultPrimitive,
  semantic: defaultSemantic,
  components: {
    FixWindow: fixWindowStyle,
    Badge: badgeStyle
  }
}
