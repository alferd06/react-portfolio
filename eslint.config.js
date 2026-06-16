import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "border-subtle": "#262626",
                "secondary-container": "#4a4b53",
                "on-primary-fixed-variant": "#005227",
                "tertiary-fixed-dim": "#ffb784",
                "surface-bright": "#3a3939",
                "on-tertiary-fixed": "#301400",
                "secondary-fixed-dim": "#c6c5cf",
                "surface-container-highest": "#353534",
                "outline-variant": "#3d4a3e",
                "primary-container": "#4ade80",
                "inverse-primary": "#006d36",
                "on-background": "#e5e2e1",
                "surface-tint": "#4de082",
                "on-tertiary": "#4f2500",
                "surface": "#141414",
                "error": "#ffb4ab",
                "on-secondary-container": "#bcbbc5",
                "on-tertiary-fixed-variant": "#6c3a0f",
                "surface-container-lowest": "#0e0e0e",
                "inverse-on-surface": "#313030",
                "on-error": "#690005",
                "text-primary": "#F5F5F5",
                "surface-container-high": "#2a2a2a",
                "on-secondary": "#2f3038",
                "tertiary": "#ffd9c1",
                "on-primary": "#003919",
                "primary": "#6bfb9a",
                "outline": "#869486",
                "on-primary-container": "#005e2d",
                "inverse-surface": "#e5e2e1",
                "on-primary-fixed": "#00210c",
                "secondary-fixed": "#e3e1ec",
                "secondary": "#c6c5cf",
                "error-container": "#93000a",
                "on-error-container": "#ffdad6",
                "text-muted": "#737373",
                "on-secondary-fixed": "#1a1b22",
                "on-tertiary-container": "#794418",
                "surface-variant": "#353534",
                "surface-dim": "#131313",
                "background": "#0C0C0C",
                "tertiary-container": "#ffb47f",
                "primary-fixed": "#6dfe9c",
                "on-surface": "#e5e2e1",
                "surface-container": "#201f1f",
                "on-secondary-fixed-variant": "#46464e",
                "on-surface-variant": "#bccabb",
                "tertiary-fixed": "#ffdcc6",
                "surface-container-low": "#1c1b1b",
                "primary-fixed-dim": "#4de082"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                "max-width": "900px",
                "section-v-padding": "100px",
                "gutter": "24px",
                "stack-md": "16px",
                "stack-lg": "32px",
                "stack-sm": "8px"
            },
            fontFamily: {
                "body-main": ["Geist", "sans-serif"],
                "display-hero": ["Geist", "sans-serif"],
                "label-caps": ["Geist", "sans-serif"],
                "display-hero-mobile": ["Geist", "sans-serif"],
                "headline-section": ["Geist", "sans-serif"],
                "label-mono": ["JetBrains Mono", "monospace"]
            },
            fontSize: {
                "body-main": ["16px", { lineHeight: "1.75", letterSpacing: "0em", fontWeight: "400" }],
                "display-hero": ["60px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" }],
                "label-caps": ["11px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
                "display-hero-mobile": ["42px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
                "headline-section": ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" }],
                "label-mono": ["12px", { lineHeight: "1.5", letterSpacing: "0.02em", fontWeight: "400" }]
            }
        },
    },
    plugins: [],
}
