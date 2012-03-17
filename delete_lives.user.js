// ==UserScript==
// @name           delete lives
// @namespace      weblogism.com
// @description    Delete the lives box on lemonde.fr
// @include        http://www.lemonde.fr/
// ==/UserScript==




var lives = document.getElementsByClassName('conteneur_lives');
for (var el in lives) {
  lives[el].style.display = 'none';
}
