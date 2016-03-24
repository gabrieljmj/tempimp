'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
  * @license MIT License
 */

var importTemplate = function importTemplate(path) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');

    link.setAttribute('href', path);
    link.setAttribute('rel', 'import');
    link.onload = function (e) {
      resolve(this.import);
    };
    link.onerror = function (e) {
      reject(reject(e));
    };

    document.head.appendChild(link);
  });
};

exports.importTemplate = importTemplate;