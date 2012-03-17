// ==UserScript==
// @name           delete lives
// @namespace      weblogism.com
// @description    Delete the lives box on lemonde.fr
// @include        http://www.lemonde.fr/
// ==/UserScript==

function removeClass(className) {
  var elements = document.getElementsByClassName(className);
  for (var el in elements) {
    elements[el].parentNode.removeChild(elements[el]);
  }
}

function removeId(idElement) {
  var element = document.getElementById(idElement);
  element.parentNode.removeChild(element);
}

removeId('bandeau_bas');
removeClass('plus_partages');

