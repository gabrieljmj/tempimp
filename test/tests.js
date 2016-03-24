'use strict';

QUnit.test('link was created', assert => {
  QUnit.stop();

  importTemplate('template/test_template.html').then(content => {
    assert.ok(document.querySelector('link[href="template/test_template.html"]'));
  }).then(() => {
    QUnit.start();
  });
});

QUnit.test('content was returned', assert => {
  QUnit.stop();

  importTemplate('template/test_template.html').then(content => {
    assert.ok(content.querySelector('div#content'));
    assert.equal(content.querySelector('div#content').innerHTML, 'my_template');
  }).then(() => {
    QUnit.start();
  });
});

QUnit.test('document replaced', assert => {
  QUnit.stop();

  importTemplate('template/test_template.html').then(content => {
    assert.ok(newDoc.querySelector('link[href="template/test_template.html"]'));
  }).then(() => {
    QUnit.start();
  });
});