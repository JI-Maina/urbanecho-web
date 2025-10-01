// styled.d.ts
import "styled-components";
import type { AppThemeType } from "./lib/theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppThemeType {}
}
