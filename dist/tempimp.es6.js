/**
  * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
  * @license MIT License
 */

const importTemplate = function (path) {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');

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

export {importTemplate};