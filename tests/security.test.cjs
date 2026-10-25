const test = require('node:test');
const assert = require('node:assert/strict');
const { safeExternalUrl } = require('../src/safe-external-url.cjs');

test('opens web links while rejecting OS protocols, scripts and embedded credentials', () => {
  assert.equal(safeExternalUrl('https://example.com/page'), 'https://example.com/page');
  assert.equal(safeExternalUrl('http://example.com'), 'http://example.com/');
  for (const url of ['file:///C:/Windows/System32/cmd.exe', 'ms-settings:privacy', 'javascript:alert(1)', 'data:text/html,hello', 'https://user:password@example.com', 'not a URL']) {
    assert.equal(safeExternalUrl(url), null, url);
  }
});
