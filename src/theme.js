/*
 * To override any of this theme’s tokens in your site, create a new file in
 * your site at `src/maciejtrojniarz.github.io/theme.js` and export an object from
 * it. Tokens are nested under the file name.
 *
 * For example, to override the primary color, your `theme.js` would look
 * something like this:
 *
 *    export default {
 *      colors: {
 *        primary: `#6556B3`,
 *        primaryAlpha: `#6556B3cc`,
 *      }
 *    };
 *
 * All tokens are optional. When a token is not present in `theme.js`, the
 * default value from the `tokens/*.js` files will be used.
 *
 * For a full list of tokens, see the `src/tokens/` directory in this theme.
 */
const white = "#e5e5e5"
const teal = "#0097A7"

export default {
  colors: {
    primary: teal,
    primaryAlpha: teal,
    background: "#111",
    backgroundArticle: "#1f1f1f",
    textLight: white,
    text: white,
  }
}
