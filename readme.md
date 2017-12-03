# mdast-util-phrasing [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [MDAST][] (markdown) [node][] is a phrasing element.

## Installation

[npm][]:

```bash
npm install mdast-util-phrasing
```

## Usage

```javascript
var phrasing = require('mdast-util-phrasing');

phrasing({
  type: 'paragraph',
  children: [{type: 'text', value: 'Alpha'}]
}); //=> false

phrasing({
  type: 'strong',
  children: [{type: 'text', value: 'Delta'}]
}); //=> true
```

## API

### `phrasing(node)`

Check if the given value is a phrasing element.

###### Parameters

`node` (`*`) — Value to check.

###### Returns

`boolean` — whether `node` passes the test.

## Contribute

See [`contributing.md` in `syntax-tree/mdast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-util-phrasing.svg

[build-page]: https://travis-ci.org/syntax-tree/mdast-util-phrasing

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-phrasing.svg

[coverage-page]: https://codecov.io/github/syntax-tree/mdast-util-phrasing?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[node]: https://github.com/syntax-tree/mdast#ast

[mdast]: https://github.com/syntax-tree/mdast

[contributing]: https://github.com/syntax-tree/mdast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/mdast/blob/master/code-of-conduct.md
