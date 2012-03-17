// ==UserScript==
// @name           delete lives
// @namespace      weblogism.com
// @description    Delete the lives box on lemonde.fr
// @include        http://www.lemonde.fr/
// ==/UserScript==

function removeClass(className) {
  var elements = document.getElementsByClassName(className);
  for (var el in elements) {
    elements[el].style.display = 'none';
  }
}

removeClass('conteneur_lives');
removeClass('plus_partages');

