tempimp
=======
HTML template importer.

## Install
Via npm:
```console
$ npm install --save tempimp
```

## Usage
```template/nav.html ```

```html
<li class="nav-item"><a href="/home">Home</a></li>
<li class="nav-item"><a href="/search">Search</a></li>
<li class="nav-item"><a href="/whatever">Whatever</a></li>
```

```public/js/main.js ```

```js
import {importTemplate} from './import-template';

window.onload = function () {
  importTemplate('template/nav.html', {doc: document}).then(content => {
    const items = content.querySelectorAll('li.nav-item');

    [].forEach.call(items, item => {
      document.querySelector('nav > ul#nav-items').appendChild(item);
    });
  });  
};
```

```index.html ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MmM</title>

    <script src="public/dist/js/tempimp.js"></script>
</head>
<body>
    <nav>
        <ul id="nav-items">
        </ul>
    </nav>
</body>
</html>
```