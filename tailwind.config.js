/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        // Glass Inc premium design system (docs/design-system.md)
        glass: {
          ink: "#0A0A0B",
          "ink-soft": "#111113",
          "ink-border": "#1E1E22",
          "ink-border-2": "#2E2E38",
          canvas: "#F8F8FA",
          "canvas-border": "#E4E4E8",
          "text-1": "#0A0A0B",
          "text-2": "#5C5C66",
          "text-3": "#8A8A96",
          "text-dark": "#F0F0F4",
          "text-muted": "#8A8F98",
          accent: "#2563EB",
          "accent-hover": "#1D4ED8",
          "accent-subtle": "#EFF6FF",
          "accent-on-dark": "#60A5FA",
          success: "#16A34A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
