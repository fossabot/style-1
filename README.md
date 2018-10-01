# Style

[![Travis Build](https://travis-ci.org/phamhongphuc/style.svg?branch=master)](https://travis-ci.org/phamhongphuc/style/builds 'Most recent build') [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/phamhongphuc/style.svg)](https://github.com/phamhongphuc/style/issues 'Average time to resolve an issue') [![Percentage of issues still open](http://isitmaintained.com/badge/open/phamhongphuc/style.svg)](https://github.com/phamhongphuc/style/issues 'Percentage of issues still open')
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fphamhongphuc%2Fstyle.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fphamhongphuc%2Fstyle?ref=badge_shield)

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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fphamhongphuc%2Fstyle.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fphamhongphuc%2Fstyle?ref=badge_large)