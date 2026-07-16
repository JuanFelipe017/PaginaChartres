/* ==========================================================================
   CHARTRES — Configuración de Tailwind (Design Tokens)
   Compartido por: index.html, joyeria.html, artesania.html, cafeteria.html
   ========================================================================== */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Primario (verde Chartres)
                "primary": "#003219",
                "on-primary": "#ffffff",
                "primary-container": "#004b28",
                "on-primary-container": "#7abb8d",
                "primary-fixed": "#aef2c1",
                "primary-fixed-dim": "#93d5a6",
                "on-primary-fixed": "#00210f",
                "on-primary-fixed-variant": "#0b522e",
                "inverse-primary": "#93d5a6",

                // Secundario (dorado)
                "secondary": "#775a19",
                "on-secondary": "#ffffff",
                "secondary-container": "#fed488",
                "on-secondary-container": "#785a1a",
                "secondary-fixed": "#ffdea5",
                "secondary-fixed-dim": "#e9c176",
                "on-secondary-fixed": "#261900",
                "on-secondary-fixed-variant": "#5d4201",

                // Terciario
                "tertiary": "#282b2d",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#3e4144",
                "on-tertiary-container": "#abadb0",
                "tertiary-fixed": "#e1e2e6",
                "tertiary-fixed-dim": "#c5c6ca",
                "on-tertiary-fixed": "#191c1e",
                "on-tertiary-fixed-variant": "#44474a",

                // Error
                "error": "#ba1a1a",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "on-error-container": "#93000a",

                // Fondo
                "background": "#fbf9f4",
                "on-background": "#1b1c19",

                // Superficie
                "surface": "#fbf9f4",
                "on-surface": "#1b1c19",
                "surface-variant": "#e4e2dd",
                "on-surface-variant": "#404941",
                "surface-tint": "#2a6a44",
                "surface-bright": "#fbf9f4",
                "surface-dim": "#dbdad5",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f5f3ee",
                "surface-container": "#f0eee9",
                "surface-container-high": "#eae8e3",
                "surface-container-highest": "#e4e2dd",

                // Inversos / contornos
                "inverse-surface": "#30312e",
                "inverse-on-surface": "#f2f1ec",
                "outline": "#707971",
                "outline-variant": "#c0c9bf",
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem",
            },
            spacing: {
                "stack-sm": "0.5rem",
                "stack-md": "1.5rem",
                "stack-lg": "3rem",
                "gutter": "2rem",
                "section-gap": "8rem",
                "margin-mobile": "1.5rem",
                "margin-desktop": "4rem",
                "container-max": "1280px",
            },
            fontFamily: {
                "display-lg": ["Bodoni Moda"],
                "display-lg-mobile": ["Bodoni Moda"],
                "headline-lg": ["Bodoni Moda"],
                "headline-md": ["Bodoni Moda"],
                "body-lg": ["Manrope"],
                "body-md": ["Manrope"],
                "label-sm": ["Manrope"],
            },
            fontSize: {
                "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
                "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
                "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "label-sm": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
            },
        },
    },
};
