'use strict';
var test = require('tape');
var spacetime = require('../src');

test('to-from utc format', t => {

  [
    '1998-05-01T8:00:00:000Z', '1998-05-30T22:00:00:000Z',
    '2017-01-01T8:00:00:000Z', '2017-01-30T22:00:00:000Z',
    '2016-02-02T8:00:00:000Z', '2016-02-02T9:00:00:100Z',
    '2016-11-02T8:01:22:023Z', '2016-11-04T9:00:59:122Z',
    '2015-01-02T20:01:22:023Z', '2016-03-28T9:01:00:999Z',
  ].forEach((str) => {
    var s = spacetime(str, 'Asia/Taipei');
    var out = s.format().iso.local;
    t.equal(str, out, 'equal - ' + str);
  });

  t.end();
});