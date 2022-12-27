--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
  Default: 400
  Medium: 500
  Semi-bold: 600
  Bold: 700

- Line heights
  Default:
  Small:
  Medium:
  Paragraph default:
  Large:

- Letter spacing

--- 02 COLORS

- Primary: #ffe8cc
- Tints:
- Shades:
- Accents:
- Greys:

--- 05 SHADOWS

--- 06 BORDER-RADIUS

Default:
Medium:

--- 07 WHITESPACE

- Spacing system (px)
  2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

/////////////////

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

html {
/_ font-size: 10px; _/

/_ 10px / 16px = 0.625 = 62.5% _/
/_ Percentage of user's browser font-size setting _/
font-size: 62.5%;

overflow-x: hidden;

scroll-behavior: smooth;
}

body {
font-family: "Rubik", sans-serif;

line-height: 1;

font-weight: 400;

color: #555;

/_ Only works if there is nothing absolutely positioned in relation to body _/
overflow-x: hidden;
}

/_////////////////////////////////////////////////////////////////////_/
