/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      gap: {
        '20': '80px',
        '30': '100px',
      },
      screens: {
        'sm': '640px',  // Small screens, por exemplo, smartphones
        'md': '768px',  // Medium screens, por exemplo, tablets
        'lg': '1024px', // Large screens, por exemplo, laptops/desktops
        'xl': '1180px', // Extra large screens, por exemplo, monitores maiores
        '2xl': '1536px', // Tamanhos de tela ainda maiores
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        'full': '60px',
      },
      width: {
        '65': '350px',
        '100': '400px',
        'clamp': 'clamp(300px, 50vw, 300px)',
      },
      height: {
        'clamp': 'clamp(450px, 50vh, 800px)',
      },
      margin: {
        '50': '50px',
      },
      colors: {
        'button_color': '#f8a1af', // Define a cor do botão chamada 'button_color'
        'primary': '', // Define uma cor chamada 'primary' com o valor '#6c757d'


        'background': '#171717',
        'background-color': '#212121',
        'paragraph-color': '828282',
        'title-color': 'FFFF',
        'text-color': 'e0e0e0',
      },
    },
    plugins: [],
  }
}
