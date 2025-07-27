module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '768px', 
      'desktop': '1440px',
    },
    extend: {
      spacing: {
        // Card padding L&R
        'card-padding-mobile': '16px',
        'card-padding-tablet': '20px', 
        'card-padding-desktop': '24px',
        // Gap values
        'gap-mobile': '8px',
        'gap-tablet': '16px',
        'gap-desktop': '32px',
      },
      borderRadius: {
        // Featured card radius
        'featured-mobile': '20px',
        'featured-tablet': '24px',
        'featured-desktop': '40px',
        // General card radius  
        'card-mobile': '20px',
        'card-tablet': '24px',
        'card-desktop': '40px',
      },
      maxWidth: {
        // Featured card max-width
        'featured-mobile': '1000px',
        'featured-tablet': '1000px', 
        'featured-desktop': '1000px',
        // General card max-width
        'card-mobile': '410px',
        'card-tablet': '410px',
        'card-desktop': '456px',
      },
      minWidth: {
        // Featured card min-width
        'featured-mobile': '271px',
        'featured-tablet': '271px',
        'featured-desktop': '654px',
        // General card min-width
        'card-mobile': '229px',
        'card-tablet': '261px',
        'card-desktop': '384px',
      },
      fontSize: {
        // Responsive typography
        'h2-mobile': ['32px', { lineHeight: '115%' }],
        'h2-tablet': ['40px', { lineHeight: '115%' }], 
        'h2-desktop': ['48px', { lineHeight: '115%' }],
        'h4-mobile': ['28px', { lineHeight: 'normal' }],
        'h4-tablet': ['32px', { lineHeight: 'normal' }],
        'h4-desktop': ['36px', { lineHeight: 'normal' }],
        'h5-mobile': ['20px', { lineHeight: 'normal' }],
        'h5-tablet': ['24px', { lineHeight: 'normal' }],
        'h5-desktop': ['24px', { lineHeight: 'normal' }],
        'subtitle1-mobile': ['18px', { lineHeight: 'normal' }],
        'subtitle1-tablet': ['20px', { lineHeight: 'normal' }],
        'subtitle1-desktop': ['20px', { lineHeight: 'normal' }],
      },
      fontFamily: {
        "body-1": "var(--body-1-font-family)",
        h2: "var(--h2-font-family)",
        h4: "var(--h4-font-family)",
        h5: "var(--h5-font-family)",
        "subtitle-1": "var(--subtitle-1-font-family)",
        "subtitle-2": "var(--subtitle-2-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "card-shadow": "var(--card-shadow)" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
