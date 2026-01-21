/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />

// Ensure editors see Astro's JSX types as global JSX to avoid TS7026
declare namespace JSX {
  interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements {}
  interface Element extends astroHTML.JSX.Element {}
  interface IntrinsicAttributes extends astroHTML.JSX.IntrinsicAttributes {}
}
