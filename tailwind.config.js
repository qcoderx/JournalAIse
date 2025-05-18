// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Derived from your logo:
        'brand-background': '#2B2A4C', // Deep Indigo/Purple background of your logo
        'brand-purple': '#8B5CF6',    // Vibrant Purple from "JournalAISE" text (adjust if needed, e.g., to #9370DB if more reddish-purple)
        'brand-lavender': '#C4B5FD',  // Lighter lavender from the brain illustration
        'brand-light': '#F5F3FF',     // Off-white/Very light cream for text & highlights (like tagline)

        // General UI colors using the brand palette
        'primary': 'var(--color-brand-purple)',       // Main actions, highlights
        'primary-hover': '#7C3AED', // A slightly darker shade of brand-purple for hover
        'secondary': 'var(--color-brand-lavender)',   // Secondary elements, accents

        'sidebar-bg': 'var(--color-brand-background)',
        'sidebar-text': 'var(--color-brand-light)',
        'sidebar-nav-active-bg': 'var(--color-brand-purple)',
        'sidebar-nav-active-text': 'var(--color-brand-light)',
        'sidebar-nav-hover-bg': 'rgba(139, 92, 246, 0.3)', // Lighter hover for sidebar items

        'header-bg': '#FFFFFF', // Or 'var(--color-brand-light)' if you prefer an off-white header
        'header-text': '#1F2937', // Dark text for light header

        'app-bg': '#F9FAFB', // A very light gray for the main content background for good contrast
        'text-dark': '#111827', // Main text color on light backgrounds
        'text-muted': '#6B7280', // For less important text

        'card-bg': '#FFFFFF', // Background for cards or distinct sections
        'border-color': '#E5E7EB', // Default border color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Keeping the clean sans-serif font
        // You can add a specific font here if your logo uses one and you have it imported
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-brand-background': theme('colors.brand-background'),
          '--color-brand-purple': theme('colors.brand-purple'),
          '--color-brand-lavender': theme('colors.brand-lavender'),
          '--color-brand-light': theme('colors.brand-light'),
        }
      })
    }
  ],
}
