<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;

  box-sizing: inherit;
}

html {
  font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
}

body {
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}

ul {
  list-style: none;
}
</style>
