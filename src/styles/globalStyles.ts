import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --white:            #ffffff;
    --navy-blue:        hsl(235, 35%, 18%);
    --very-dark-blue:   #161932;
    --light-blue:       hsl(229, 52%, 96%);
    --gray:             #d7e0ff;
    --red:              hsl(0, 91%, 71%);
    --cyan:             hsl(182, 91%, 71%);
    --pink:             hsl(284, 89%, 74%); 
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100%;
    background-color: var(--navy-blue);
    display: grid;
    place-items: center;
}

body:has(input#roboto:checked) {
    font-family: "Roboto Slab", serif;
}

body:has(input#kumbh:checked) {
    font-family: "Kumbh Sans", sans-serif;
}

body:has(input#space:checked) {
    font-family: "Space Mono", monospace;
}

.cyan {
    background-color: var(--cyan);
}

.red {
    background-color: var(--red);
}

.pink {
    background-color: var(--pink);
}

.kumbh {
    font-family: "Kumbh Sans", sans-serif;
}

.roboto {
    font-family: "Roboto Slab", serif;
}

.space {
    font-family: "Space Mono", monospace;
}

.bold {
    font-weight: 700;
}

.regular {
    font-weight: 400;
}

`;

export default GlobalStyles;
