import { ThemeProvider } from "@emotion/react"
import { theme } from "../src/shared/theme"

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
