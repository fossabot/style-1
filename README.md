# Style

[![Travis Build](https://travis-ci.org/phamhongphuc/style.svg?branch=master)](https://travis-ci.org/phamhongphuc/style/builds 'Most recent build') [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/phamhongphuc/style.svg)](https://github.com/phamhongphuc/style/issues 'Average time to resolve an issue') [![Percentage of issues still open](http://isitmaintained.com/badge/open/phamhongphuc/style.svg)](https://github.com/phamhongphuc/style/issues 'Percentage of issues still open')

> Vue.js component load style in runtime

## Description

In vue component,

```js
import style from 'style';

export default {
    name: 'Col',
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '.col[size="#{$size}"]': ['min-width: #{$size}px'],
        },
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40),
        });
    },
};
```

### Install Package

*   Install Packge via Github

```bash
npm install phamhongphuc/style
```

😎 Happy Coding 😎
