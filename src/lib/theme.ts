import type { DeepMutable } from "./types";

export const PRIMITIVE_COLORS = {
  brand: {
    100: {
      hex: "#CCE8E7",
      hsla: "hsla(178, 38%, 85%, 100%)",
    },
    200: {
      hex: "#99D2CF",
      hsla: "hsla(177, 39%, 71%, 100%)",
    },
    300: {
      hex: "#66BBB7",
      hsla: "hsla(177, 38%, 57%, 100%)",
    },
    400: {
      hex: "#33A59F",
      hsla: "hsla(177, 53%, 42%, 100%)",
    },
    450: {
      hex: "#4CD5CF",
      hsla: "hsla(177, 62%, 57%, 100%)",
    },
    500: {
      hex: "#008E87",
      hsla: "hsla(177, 100%, 28%, 100%)",
    },
    600: {
      hex: "#007260",
      hsla: "hsla(177, 100%, 22%, 100%)",
    },
    700: {
      hex: "#005551",
      hsla: "hsla(177, 100%, 17%, 100%)",
    },
    800: {
      hex: "#003936",
      hsla: "hsla(177, 100%, 11%, 100%)",
    },
    900: {
      hex: "#001C1B",
      hsla: "hsla(177, 100%, 5%, 100%)",
    },
  },
  neutral: {
    50: {
      hex: "#F7F7F8",
      hsla: "hsla(240, 11%, 97%, 100%)",
    },
    100: {
      hex: "#EBEBED",
      hsla: "hsla(240, 11%, 92%, 100%)",
    },
    150: {
      hex: "#DDDCE4",
      hsla: "hsla(240, 10%, 88%, 100%)",
    },
    200: {
      hex: "#CFCFD8",
      hsla: "hsla(240, 11%, 83%, 100%)",
    },
    250: {
      hex: "#C1C1CD",
      hsla: "hsla(240, 11%, 78%, 100%)",
    },
    300: {
      hex: "#A4A4B6",
      hsla: "hsla(240, 11%, 68%, 100%)",
    },
    350: {
      hex: "#9696A6",
      hsla: "hsla(240, 11%, 63%, 100%)",
    },
    400: {
      hex: "#8888A0",
      hsla: "hsla(240, 11%, 58%, 100%)",
    },
    450: {
      hex: "#7A7A94",
      hsla: "hsla(240, 11%, 53%, 100%)",
    },
    500: {
      hex: "#606088",
      hsla: "hsla(240, 11%, 48%, 100%)",
    },
    550: {
      hex: "#62627A",
      hsla: "hsla(240, 11%, 43%, 100%)",
    },
    600: {
      hex: "#55566C",
      hsla: "hsla(240, 11%, 38%, 100%)",
    },
    650: {
      hex: "#484859",
      hsla: "hsla(240, 11%, 33%, 100%)",
    },
    700: {
      hex: "#40404E",
      hsla: "hsla(240, 10%, 28%, 100%)",
    },
    750: {
      hex: "#2E2E47",
      hsla: "hsla(240, 21%, 23%, 100%)",
    },
    800: {
      hex: "#242438",
      hsla: "hsla(240, 22%, 18%, 100%)",
    },
    850: {
      hex: "#1A1A28",
      hsla: "hsla(240, 21%, 13%, 100%)",
    },
    900: {
      hex: "#101019",
      hsla: "hsla(240, 22%, 8%, 100%)",
    },
    950: {
      hex: "#080609",
      hsla: "hsla(240, 21%, 3%, 100%)",
    },
  },
  green: {
    100: {
      hex: "#CCE8D5",
      hsla: "hsla(138, 44%, 85%, 100%)",
    },
    200: {
      hex: "#99D6AD",
      hsla: "hsla(140, 43%, 72%, 100%)",
    },
    300: {
      hex: "#66C285",
      hsla: "hsla(140, 43%, 58%, 100%)",
    },
    400: {
      hex: "#33AD5C",
      hsla: "hsla(140, 54%, 44%, 100%)",
    },
    500: {
      hex: "#009933",
      hsla: "hsla(140, 100%, 30%, 100%)",
    },
    600: {
      hex: "#007A29",
      hsla: "hsla(140, 100%, 24%, 100%)",
    },
    700: {
      hex: "#005C1F",
      hsla: "hsla(140, 100%, 18%, 100%)",
    },
    800: {
      hex: "#003D14",
      hsla: "hsla(140, 100%, 12%, 100%)",
    },
    900: {
      hex: "#001F0A",
      hsla: "hsla(138, 100%, 6%, 100%)",
    },
  },
  blue: {
    100: {
      hex: "#D6D9F9",
      hsla: "hsla(237, 74%, 91%, 100%)",
    },
    200: {
      hex: "#ADRIFT",
      hsla: "hsla(237, 76%, 82%, 100%)",
    },
    300: {
      hex: "#8489FE",
      hsla: "hsla(237, 76%, 73%, 100%)",
    },
    400: {
      hex: "#5B62E9",
      hsla: "hsla(237, 76%, 64%, 100%)",
    },
    500: {
      hex: "#323BE3",
      hsla: "hsla(237, 76%, 54%, 100%)",
    },
    600: {
      hex: "#282FB6",
      hsla: "hsla(237, 64%, 44%, 100%)",
    },
    700: {
      hex: "#1E2398",
      hsla: "hsla(237, 64%, 33%, 100%)",
    },
    800: {
      hex: "#141B5B",
      hsla: "hsla(237, 64%, 22%, 100%)",
    },
    900: {
      hex: "#0A0C2D",
      hsla: "hsla(237, 64%, 11%, 100%)",
    },
  },
  purple: {
    100: {
      hex: "#E5D8F7",
      hsla: "hsla(267, 66%, 91%, 100%)",
    },
    200: {
      hex: "#CCB1F0",
      hsla: "hsla(266, 68%, 82%, 100%)",
    },
    300: {
      hex: "#B388E8",
      hsla: "hsla(266, 67%, 73%, 100%)",
    },
    400: {
      hex: "#996AE1",
      hsla: "hsla(265, 68%, 64%, 100%)",
    },
    500: {
      hex: "#803009",
      hsla: "hsla(265, 67%, 55%, 100%)",
    },
    600: {
      hex: "#6631AE",
      hsla: "hsla(265, 56%, 44%, 100%)",
    },
    700: {
      hex: "#402562",
      hsla: "hsla(266, 56%, 33%, 100%)",
    },
    800: {
      hex: "#331657",
      hsla: "hsla(266, 57%, 22%, 100%)",
    },
    900: {
      hex: "#1A0C2B",
      hsla: "hsla(267, 56%, 11%, 100%)",
    },
  },
  pink: {
    100: {
      hex: "#F7D8EE",
      hsla: "hsla(317, 66%, 91%, 100%)",
    },
    200: {
      hex: "#F0B1DD",
      hsla: "hsla(318, 68%, 82%, 100%)",
    },
    300: {
      hex: "#E888CC",
      hsla: "hsla(318, 67%, 73%, 100%)",
    },
    400: {
      hex: "#E164BB",
      hsla: "hsla(318, 68%, 64%, 100%)",
    },
    500: {
      hex: "#D935AA",
      hsla: "hsla(318, 67%, 55%, 100%)",
    },
    600: {
      hex: "#AE318B",
      hsla: "hsla(318, 56%, 44%, 100%)",
    },
    700: {
      hex: "#822568",
      hsla: "hsla(318, 56%, 33%, 100%)",
    },
    800: {
      hex: "#571844",
      hsla: "hsla(318, 57%, 22%, 100%)",
    },
    900: {
      hex: "#2B0C22",
      hsla: "hsla(317, 56%, 11%, 100%)",
    },
  },
  red: {
    100: {
      hex: "#F6D6D5",
      hsla: "hsla(2, 65%, 90%, 100%)",
    },
    200: {
      hex: "#EDACAB",
      hsla: "hsla(1, 65%, 80%, 100%)",
    },
    300: {
      hex: "#E48381",
      hsla: "hsla(1, 65%, 70%, 100%)",
    },
    400: {
      hex: "#DB5957",
      hsla: "hsla(1, 65%, 60%, 100%)",
    },
    500: {
      hex: "#D23020",
      hsla: "hsla(1, 65%, 50%, 100%)",
    },
    600: {
      hex: "#A82624",
      hsla: "hsla(1, 65%, 40%, 100%)",
    },
    700: {
      hex: "#7E1D1B",
      hsla: "hsla(1, 65%, 30%, 100%)",
    },
    800: {
      hex: "#541312",
      hsla: "hsla(1, 65%, 20%, 100%)",
    },
    900: {
      hex: "#2A0A09",
      hsla: "hsla(2, 65%, 10%, 100%)",
    },
  },
  orange: {
    100: {
      hex: "#F7E4DD",
      hsla: "hsla(16, 62%, 92%, 100%)",
    },
    200: {
      hex: "#F0C8BB",
      hsla: "hsla(15, 64%, 84%, 100%)",
    },
    300: {
      hex: "#E8AD9A",
      hsla: "hsla(15, 63%, 76%, 100%)",
    },
    400: {
      hex: "#E19178",
      hsla: "hsla(14, 64%, 68%, 100%)",
    },
    500: {
      hex: "#D97656",
      hsla: "hsla(15, 63%, 59%, 100%)",
    },
    600: {
      hex: "#AE5E46",
      hsla: "hsla(14, 43%, 48%, 100%)",
    },
    700: {
      hex: "#824734",
      hsla: "hsla(15, 43%, 36%, 100%)",
    },
    800: {
      hex: "#572F22",
      hsla: "hsla(15, 44%, 24%, 100%)",
    },
    900: {
      hex: "#2B1811",
      hsla: "hsla(16, 43%, 12%, 100%)",
    },
  },
} as const;

export const SEMANTIC_COLOR_VARIABLES = {
  // Content colors
  content: {
    "content-primary": {
      light: PRIMITIVE_COLORS.neutral[900].hex,
      dark: PRIMITIVE_COLORS.neutral[50].hex,
    },
    "content-secondary": {
      light: PRIMITIVE_COLORS.neutral[800].hex,
      dark: PRIMITIVE_COLORS.neutral[100].hex,
    },
    "content-tertiary": {
      light: PRIMITIVE_COLORS.neutral[600].hex,
      dark: PRIMITIVE_COLORS.neutral[300].hex,
    },
    "content-primary-inverse": {
      light: PRIMITIVE_COLORS.neutral[50].hex,
      dark: PRIMITIVE_COLORS.neutral[900].hex,
    },
    "content-secondary-inverse": {
      light: PRIMITIVE_COLORS.neutral[100].hex,
      dark: PRIMITIVE_COLORS.neutral[800].hex,
    },
    "content-tertiary-inverse": {
      light: PRIMITIVE_COLORS.neutral[300].hex,
      dark: PRIMITIVE_COLORS.neutral[600].hex,
    },
    "content-disabled": {
      light: PRIMITIVE_COLORS.neutral[300].hex,
      dark: PRIMITIVE_COLORS.neutral[700].hex,
    },
    "content-brand": {
      light: PRIMITIVE_COLORS.brand[500].hex,
      dark: PRIMITIVE_COLORS.brand[400].hex,
    },
    "content-brand-hover": {
      light: PRIMITIVE_COLORS.brand[700].hex,
      dark: PRIMITIVE_COLORS.brand[300].hex,
    },
    "content-link": {
      light: PRIMITIVE_COLORS.blue[500].hex,
      dark: PRIMITIVE_COLORS.blue[400].hex,
    },
    "content-link-hover": {
      light: PRIMITIVE_COLORS.blue[600].hex,
      dark: PRIMITIVE_COLORS.blue[300].hex,
    },
    "content-link-pressed": {
      light: PRIMITIVE_COLORS.blue[700].hex,
      dark: PRIMITIVE_COLORS.blue[200].hex,
    },
    "content-notice": {
      light: PRIMITIVE_COLORS.orange[500].hex,
      dark: PRIMITIVE_COLORS.orange[400].hex,
    },
    "content-notice-bold": {
      light: PRIMITIVE_COLORS.orange[700].hex,
      dark: PRIMITIVE_COLORS.orange[300].hex,
    },
    "content-negative": {
      light: PRIMITIVE_COLORS.red[500].hex,
      dark: PRIMITIVE_COLORS.red[400].hex,
    },
    "content-negative-bold": {
      light: PRIMITIVE_COLORS.red[600].hex,
      dark: PRIMITIVE_COLORS.red[300].hex,
    },
    "content-positive": {
      light: PRIMITIVE_COLORS.green[500].hex,
      dark: PRIMITIVE_COLORS.green[400].hex,
    },
    "content-positive-bold": {
      light: PRIMITIVE_COLORS.green[700].hex,
      dark: PRIMITIVE_COLORS.green[300].hex,
    },
  },

  // Background colors
  background: {
    "background-primary": {
      light: PRIMITIVE_COLORS.neutral[50].hex,
      dark: PRIMITIVE_COLORS.neutral[950].hex,
    },
    "background-hover": {
      light: PRIMITIVE_COLORS.neutral[100].hex,
      dark: PRIMITIVE_COLORS.neutral[850].hex,
    },
    "background-pressed": {
      light: PRIMITIVE_COLORS.neutral[150].hex,
      dark: PRIMITIVE_COLORS.neutral[750].hex,
    },
    "background-selected": {
      light: PRIMITIVE_COLORS.brand[100].hex,
      dark: PRIMITIVE_COLORS.brand[800].hex,
    },
    "background-disabled": {
      light: PRIMITIVE_COLORS.neutral[100].hex,
      dark: PRIMITIVE_COLORS.neutral[800].hex,
    },
    "background-inverse": {
      light: PRIMITIVE_COLORS.neutral[900].hex,
      dark: PRIMITIVE_COLORS.neutral[50].hex,
    },
    "background-inverse-hover": {
      light: PRIMITIVE_COLORS.neutral[800].hex,
      dark: PRIMITIVE_COLORS.neutral[100].hex,
    },
    "background-inverse-pressed": {
      light: PRIMITIVE_COLORS.neutral[700].hex,
      dark: PRIMITIVE_COLORS.neutral[150].hex,
    },
    "background-brand": {
      light: PRIMITIVE_COLORS.brand[500].hex,
      dark: PRIMITIVE_COLORS.brand[450].hex,
    },
    "background-brand-subtle": {
      light: `${PRIMITIVE_COLORS.brand[100].hex}33`,
      dark: `${PRIMITIVE_COLORS.brand[800].hex}33`,
    },
    "background-brand-hover": {
      light: PRIMITIVE_COLORS.brand[600].hex,
      dark: PRIMITIVE_COLORS.brand[300].hex,
    },
    "background-brand-pressed": {
      light: PRIMITIVE_COLORS.brand[700].hex,
      dark: PRIMITIVE_COLORS.brand[200].hex,
    },
    "background-brand-surface": {
      light: PRIMITIVE_COLORS.brand[500].hex,
      dark: PRIMITIVE_COLORS.brand[450].hex,
    },
    "background-secondary-subtle-hover": {
      light: PRIMITIVE_COLORS.brand[100].hex,
      dark: PRIMITIVE_COLORS.brand[800].hex,
    },
    "background-secondary-subtle-pressed": {
      light: PRIMITIVE_COLORS.brand[200].hex,
      dark: PRIMITIVE_COLORS.brand[700].hex,
    },
    "background-info": {
      light: PRIMITIVE_COLORS.blue[500].hex,
      dark: PRIMITIVE_COLORS.blue[400].hex,
    },
    "background-info-subtle": {
      light: PRIMITIVE_COLORS.blue[100].hex,
      dark: PRIMITIVE_COLORS.blue[800].hex,
    },
    "background-notice": {
      light: PRIMITIVE_COLORS.orange[500].hex,
      dark: PRIMITIVE_COLORS.orange[400].hex,
    },
    "background-notice-subtle": {
      light: PRIMITIVE_COLORS.orange[100].hex,
      dark: PRIMITIVE_COLORS.orange[800].hex,
    },
    "background-negative": {
      light: PRIMITIVE_COLORS.red[500].hex,
      dark: PRIMITIVE_COLORS.red[400].hex,
    },
    "background-negative-hover": {
      light: PRIMITIVE_COLORS.red[600].hex,
      dark: PRIMITIVE_COLORS.red[300].hex,
    },
    "background-negative-pressed": {
      light: PRIMITIVE_COLORS.red[700].hex,
      dark: PRIMITIVE_COLORS.red[200].hex,
    },
    "background-negative-subtle": {
      light: PRIMITIVE_COLORS.red[100].hex,
      dark: PRIMITIVE_COLORS.red[900].hex,
    },
    "background-positive": {
      light: PRIMITIVE_COLORS.green[500].hex,
      dark: PRIMITIVE_COLORS.green[400].hex,
    },
    "background-positive-subtle": {
      light: PRIMITIVE_COLORS.green[100].hex,
      dark: PRIMITIVE_COLORS.green[800].hex,
    },
  },
  // Border colors
  border: {
    "border-primary": {
      light: PRIMITIVE_COLORS.neutral[600].hex,
      dark: PRIMITIVE_COLORS.neutral[400].hex,
    },
    "border-secondary": {
      light: PRIMITIVE_COLORS.neutral[400].hex,
      dark: PRIMITIVE_COLORS.neutral[600].hex,
    },
    "border-tertiary": {
      light: PRIMITIVE_COLORS.neutral[200].hex,
      dark: PRIMITIVE_COLORS.neutral[800].hex,
    },
    "border-disabled": {
      light: PRIMITIVE_COLORS.neutral[200].hex,
      dark: PRIMITIVE_COLORS.neutral[700].hex,
    },
    "border-brand": {
      light: PRIMITIVE_COLORS.brand[500].hex,
      dark: PRIMITIVE_COLORS.brand[400].hex,
    },
    "border-subtle": {
      light: PRIMITIVE_COLORS.neutral[100].hex,
      dark: PRIMITIVE_COLORS.neutral[800].hex,
    },
    "border-inverse": {
      light: PRIMITIVE_COLORS.neutral[50].hex,
      dark: PRIMITIVE_COLORS.neutral[900].hex,
    },
    "border-focus": {
      light: PRIMITIVE_COLORS.brand[300].hex,
      dark: PRIMITIVE_COLORS.brand[200].hex,
    },
    "border-info": {
      light: PRIMITIVE_COLORS.blue[500].hex,
      dark: PRIMITIVE_COLORS.blue[400].hex,
    },
    "border-notice": {
      light: PRIMITIVE_COLORS.orange[500].hex,
      dark: PRIMITIVE_COLORS.orange[400].hex,
    },
    "border-negative": {
      light: PRIMITIVE_COLORS.red[500].hex,
      dark: PRIMITIVE_COLORS.red[400].hex,
    },
    "border-negative-focus": {
      light: PRIMITIVE_COLORS.red[300].hex,
      dark: PRIMITIVE_COLORS.red[900].hex,
    },
    "border-positive": {
      light: PRIMITIVE_COLORS.green[500].hex,
      dark: PRIMITIVE_COLORS.green[400].hex,
    },
  },
  // Surface colors
  surface: {
    "surface-l0": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[900].hex,
    },
    "surface-l1": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[850].hex,
    },
    "surface-l2": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[800].hex,
    },
    "surface-l3": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[750].hex,
    },
    "surface-l4": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[700].hex,
    },
    "surface-l5": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[650].hex,
    },
    "surface-l6": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 100%)" } as const).hex, // Prime White
      dark: PRIMITIVE_COLORS.neutral[600].hex,
    },
  },

  // Overlay colors
  overlay: {
    "overlay-50": {
      light: ({ hex: "#000000", hsla: "hsla(0, 0%, 0%, 50%)" } as const).hex, // Prime Black @50%
      dark: ({ hex: "#000000", hsla: "hsla(0, 0%, 0%, 50%)" } as const).hex, // Prime Black @50%
    },
    "overlay-50-inverse": {
      light: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 50%)" } as const).hex, // Prime White @50%
      dark: ({ hex: "#FFFFFF", hsla: "hsla(0, 0%, 100%, 50%)" } as const).hex, // Prime White @50%
    },
  },

  // Logo colors
  logo: {
    primary: {
      light: PRIMITIVE_COLORS.brand[450].hex, // #008EA9
      dark: PRIMITIVE_COLORS.brand[450].hex,
    },
    secondary: {
      light: PRIMITIVE_COLORS.neutral[750].hex,
      dark: { hex: "#FEFFFE", hsla: "hsl(120, 100%, 100%)" }.hex, // #FEFFFE
    },
  },
} as const;

export const TYPOGRAPHY = {
  // Font families
  fontFamily: {
    heading: "Montserrat, sans-serif",
    body: "Roboto, sans-serif",
  } as const,

  // Headings
  heading: {
    "72/medium": {
      fontFamily: "Montserrat",
      fontSize: "72px",
      lineHeight: "80.9px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "72/bold": {
      fontFamily: "Montserrat",
      fontSize: "72px",
      lineHeight: "80.9px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "64/medium": {
      fontFamily: "Montserrat",
      fontSize: "64px",
      lineHeight: "72.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "64/bold": {
      fontFamily: "Montserrat",
      fontSize: "64px",
      lineHeight: "72.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "56/medium": {
      fontFamily: "Montserrat",
      fontSize: "56px",
      lineHeight: "63.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "56/bold": {
      fontFamily: "Montserrat",
      fontSize: "56px",
      lineHeight: "64.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "48/medium": {
      fontFamily: "Montserrat",
      fontSize: "48px",
      lineHeight: "56.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "48/bold": {
      fontFamily: "Montserrat",
      fontSize: "48px",
      lineHeight: "56.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "40/medium": {
      fontFamily: "Montserrat",
      fontSize: "40px",
      lineHeight: "48.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "40/bold": {
      fontFamily: "Montserrat",
      fontSize: "40px",
      lineHeight: "48.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "32/medium": {
      fontFamily: "Montserrat",
      fontSize: "32px",
      lineHeight: "40.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "32/bold": {
      fontFamily: "Montserrat",
      fontSize: "32px",
      lineHeight: "40.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "24/medium": {
      fontFamily: "Montserrat",
      fontSize: "24px",
      lineHeight: "32.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "24/bold": {
      fontFamily: "Montserrat",
      fontSize: "24px",
      lineHeight: "32.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "20/medium": {
      fontFamily: "Montserrat",
      fontSize: "20px",
      lineHeight: "28.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "20/bold": {
      fontFamily: "Montserrat",
      fontSize: "20px",
      lineHeight: "28.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "16/medium": {
      fontFamily: "Montserrat",
      fontSize: "16px",
      lineHeight: "24.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "16/bold": {
      fontFamily: "Montserrat",
      fontSize: "16px",
      lineHeight: "24.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
    "14/medium": {
      fontFamily: "Montserrat",
      fontSize: "14px",
      lineHeight: "20.06px",
      fontWeight: 500,
      letterSpacing: "-1.00%",
    } as const,
    "14/bold": {
      fontFamily: "Montserrat",
      fontSize: "14px",
      lineHeight: "20.06px",
      fontWeight: 700,
      letterSpacing: "-1.00%",
    } as const,
  },

  // Paragraphs
  paragraph: {
    "24/400": {
      fontFamily: "Roboto",
      fontSize: "24px",
      lineHeight: "32.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    } as const,
    "24/600": {
      fontFamily: "Roboto",
      fontSize: "24px",
      lineHeight: "32.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    } as const,
    "20/400": {
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "28.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    } as const,
    "20/600": {
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "28.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    } as const, 
    "16/400": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "24.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    } as const,
    "16/600": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "24.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    } as const,
    "14/400": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "20.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    } as const,
    "14/600": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "20.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    } as const,
    "12/400": {
      fontFamily: "Roboto",
      fontSize: "12px",
      lineHeight: "16.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    } as const,
    "12/600": {
      fontFamily: "Roboto",
      fontSize: "12px",
      lineHeight: "16.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    } as const,
    "10/400": {
      fontFamily: "Roboto",
      fontSize: "10px",
      lineHeight: "14.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    } as const,
    "10/600": {
      fontFamily: "Roboto",
      fontSize: "10px",
      lineHeight: "14.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    } as const,
  },

  // Labels
  label: {
    "20/regular": {
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "24.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    },
    "20/semibold": {
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "24.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    },
    "16/regular": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "20.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    },
    "16/semibold": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "20.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    },
    "14/regular": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "16.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    },
    "14/semibold": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "16.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    },
    "12/regular": {
      fontFamily: "Roboto",
      fontSize: "12px",
      lineHeight: "16.06px",
      fontWeight: 400,
      letterSpacing: "-1.00%",
    },
    "12/semibold": {
      fontFamily: "Roboto",
      fontSize: "12px",
      lineHeight: "16.06px",
      fontWeight: 600,
      letterSpacing: "-1.00%",
    },
  },
} 

export const SPACING = {
  "04": "0.25rem", // 4px
  "06": "0.375rem", // 6px
  "08": "0.5rem", // 8px
  "10": "0.625rem", // 10px
  "12": "0.75rem", // 12px
  "14": "0.875rem", // 14px
  "16": "1rem", // 16px
  "20": "1.25rem", // 20px
  "24": "1.5rem", // 24px
  "28": "1.75rem", // 28px
  "32": "2rem", // 32px
  "40": "2.5rem", // 40px
  "48": "3rem", // 48px
  "56": "3.5rem", // 56px
  "60": "3.75rem", // 60px
  "64": "4rem", // 64px
  "72": "4.5rem", // 72px
  "80": "5rem", // 80px
  "88": "5.5rem", // 88px
  "96": "6rem", // 96px
  "104": "6.5rem", // 104px
  "120": "7.5rem", // 120px
  "128": "8rem", // 128px
  "144": "9rem", // 144px
  "160": "10rem", // 160px
  "192": "12rem", // 192px
  "256": "16rem", // 256px
  "320": "20rem", // 320px
  "384": "24rem", // 384px
  "448": "28rem", // 448px
  "512": "32rem", // 512px
  "640": "40rem", // 640px
  "768": "48rem", // 768px
  "896": "56rem", // 896px
  "1024": "64rem", // 1024px
  "1280": "80rem", // 1280px
  "1536": "96rem", // 1536px
} as const;

export const LAYOUT = {
  // Container configurations
  container: {
    desktop: {
      maxWidth: "1440px", // Max container width
      margin: "8rem", // 128px left/right margins
      gutter: "1.5rem", // 24px gutter
      contentWidth: "1184px", // 1440 - (128 * 2) = content area
    },
    tablet: {
      maxWidth: "768px", // Standard tablet width
      margin: "3rem", // 48px left/right margins
      gutter: "1.25rem", // 20px gutter
      contentWidth: "672px", // 768 - (48 * 2) = content area
    },
    mobile: {
      maxWidth: "100%", // Full width on mobile
      margin: "1rem", // 16px left/right margins
      gutter: "1rem", // 16px gutter
      contentWidth: "calc(100% - 2rem)", // Full width minus margins
    },
  },

  // Breakpoints
  breakpoints: {
    mobile: "0px",
    tablet: "768px",
    desktop: "1024px",
    desktopLarge: "1440px",
  },

  // Grid system
  grid: {
    desktop: {
      columns: 12,
      gutter: "1.5rem", // 24px
      margin: "8rem", // 128px
    },
    tablet: {
      columns: 8,
      gutter: "1.25rem", // 20px
      margin: "3rem", // 48px
    },
    mobile: {
      columns: 4,
      gutter: "1rem", // 16px
      margin: "1rem", // 16px
    },
  },

  // Common layout utilities
  section: {
    paddingY: {
      desktop: "5rem", // 80px vertical padding
      tablet: "4rem", // 64px vertical padding
      mobile: "3rem", // 48px vertical padding
    },
  },
} as const;

// Theme utility functions
export type ThemeMode = "light" | "dark";

// Deep key types for semantic colors
type DeepKeys<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: T[K] extends Record<string, unknown>
        ? T[K] extends { light: string; dark: string }
          ? K
          : `${K & string}.${DeepKeys<T[K]> & string}`
        : K;
    }[keyof T]
  : never;

export type SemanticColorPath = DeepKeys<typeof SEMANTIC_COLOR_VARIABLES>;

// Helper type to get all color keys flattened
type FlattenColorKeys<T, Prefix extends string = ""> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: T[K] extends { light: string; dark: string }
        ? Prefix extends ""
          ? K
          : `${Prefix}.${K & string}`
        : T[K] extends Record<string, unknown>
        ? FlattenColorKeys<T[K], Prefix extends "" ? K & string : `${Prefix}.${K & string}`>
        : never;
    }[keyof T]
  : never;

export type AllSemanticColorPaths = FlattenColorKeys<typeof SEMANTIC_COLOR_VARIABLES>;

/**
 * Get a semantic color value based on the current theme mode
 * @param colorPath - The color path (e.g., "content.content-primary")
 * @param mode - The theme mode ("light" or "dark")
 * @returns The hex color value
 */
export function getSemanticColor(
  colorPath: AllSemanticColorPaths,
  mode: ThemeMode
): string {
  const pathParts = colorPath.split(".");
  let current: unknown = SEMANTIC_COLOR_VARIABLES;

  for (const part of pathParts) {
    if (current && typeof current === "object" && current !== null && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      console.warn(`Color path "${colorPath}" not found in theme`);
      return "#000000"; // fallback color
    }
  }

  if (current && typeof current === "object" && current !== null && mode in current) {
    return (current as Record<string, string>)[mode];
  }

  console.warn(`Color "${colorPath}" does not have mode "${mode}"`);
  return "#000000"; // fallback color
}

/**
 * Create a theme-aware color getter function
 * @param mode - The current theme mode
 * @returns A function that takes a color path and returns the themed color
 */
export function createColorGetter(mode: ThemeMode) {
  return (colorPath: AllSemanticColorPaths): string => getSemanticColor(colorPath, mode);
}

/**
 * Get all colors for a specific category and mode
 * @param category - The color category (e.g., "content", "background", "border")
 * @param mode - The theme mode ("light" or "dark")
 * @returns An object with all colors in that category for the specified mode
 */
export function getColorCategory(
  category: keyof typeof SEMANTIC_COLOR_VARIABLES,
  mode: ThemeMode
): Record<string, string> {
  const categoryColors = SEMANTIC_COLOR_VARIABLES[category];
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(categoryColors)) {
    if (typeof value === "object" && mode in value) {
      result[key] = value[mode];
    }
  }

  return result;
}

/**
 * Get a flattened object of all semantic colors for a specific mode
 * @param mode - The theme mode ("light" or "dark")
 * @returns A flattened object with all semantic colors
 */
export function getAllSemanticColors(mode: ThemeMode): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [categoryKey, categoryValue] of Object.entries(SEMANTIC_COLOR_VARIABLES)) {
    for (const [colorKey, colorValue] of Object.entries(categoryValue)) {
      if (typeof colorValue === "object" && mode in colorValue) {
        result[`${categoryKey}-${colorKey}`] = colorValue[mode];
        // Also add without category prefix for easier access
        result[colorKey] = colorValue[mode];
      }
    }
  }

  return result;
}

// Pre-built theme objects for easier consumption
export const LightTheme = {
  colors: getAllSemanticColors("light"),
  primitiveColors: PRIMITIVE_COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  layout: LAYOUT,
};

export const DarkTheme = {
  colors: getAllSemanticColors("dark"),
  primitiveColors: PRIMITIVE_COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  layout: LAYOUT,
};

export const AppTheme = {
  colors: SEMANTIC_COLOR_VARIABLES,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  layout: LAYOUT,
  primitivesColors: PRIMITIVE_COLORS,
  utils: {
    getSemanticColor,
    createColorGetter,
    getColorCategory,
    getAllSemanticColors,
  },
};

export type AppThemeType =DeepMutable< typeof AppTheme>;

export default AppTheme;
