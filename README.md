# [Tooltip](https://cosmo-design.github.io/tooltip/)

[![npm version](https://img.shields.io/npm/v/@cosmo-design/tooltip?logo=npm)](https://github.com/cosmo-design/tooltip) 
[![npm version](https://img.shields.io/bundlephobia/minzip/@cosmo-design/tooltip)](https://github.com/cosmo-design/tooltip)

@cosmo-design/tooltip is a powerful and flexible tooltip pure JS library based on [@cosmo-design/popper](https://github.com/cosmo-design/popper).

[Playground](https://cosmo-design.github.io/tooltip/)

[![@cosmo-design/tooltip](./demo/p.png)](https://cosmo-design.github.io/tooltip/)

[中文文档](./README_zh.md)

## Install

```
npm i -S @cosmo-design/tooltip
```

or via CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@cosmo-design/tooltip@latest/dist/index.min.css">
<script src="https://unpkg.com/@cosmo-design/tooltip@latest/dist/index.min.js"></script>
<script>
  console.log(tooltip)
</script>
```

## Usage

```js
import Tooltip from '@cosmo-design/tooltip'
import '@cosmo-design/tooltip/lib/index.css'
// or import '@cosmo-design/tooltip/lib/index.scss'
// or import '@cosmo-design/tooltip/dist/index.min.css'

const container = document.querySelector('.container'); // default: document.body
const trigger = document.querySelector('.trigger'); 
// or virtual element. type: { getBoundingClientRect: () =>  { left: number, top: number, width: number, height: number } }

const tooltip = new Tooltip({
  container,
  trigger, // required
  content: 'It can be a string or a DOM element.', // It will not be displayed when it is an empty string.
})

setTimeout(() => {
  tooltip.updateConfig({ // You can update any parameter using the updateConfig method.
    content: 'xxx'
  })
}, 5000)

// if you don't need it anymore
tooltip.destroy()
```

You can refer to the documentation of [@cosmo-design/popper](https://github.com/cosmo-design/popper/blob/main/README.md) for a complete tutorial.

### CSS Style

The class names and CSS variables of Tooltip begin with `cdt`.

```css
--cdt-color: #fff; // font color
--cdt-bg: #1f2329; // background color
--cdt-padding: 8px 12px; // padding
--cdt-radius: 8px; // radius
--cdt-arrow: 12px; // The width and height of the arrow element
--cdt-shadow: 0; // box shadow
```

You can customize the style by modifying CSS variables.

```css
html[data-theme='dark'] .cdt, html.dark .cdt {
  --cdt-bg: #373739;
}
```

### CSS Animation

Please refer to the [@cosmo-design/popper CSS animation parameters](https://github.com/cosmo-design/popper/tree/main#css-animation) for more information.

Tooltip has added `cdt_ani` as the default CSS animation name, and you can customize the CSS animation by configuring the `cssName` parameter.

```js
const tooltip = new Tooltip({
  cssName: 'fade'
})
```

You can write the following CSS styles:

```css
.fade-enter-from, .fade-exit-to {
  transform: scale(.7);
  opacity: 0;
}
.fade-enter-active, .fade-exit-active {
  transition: transform .1s ease, opacity .1s ease;
}
```

### Arrow

You can configure a custom arrow element using the arrow parameter. By default, a `div` element with a class name of `cdt_arrow` will be added as the arrow element.

```js
const arrow = document.createElement('div')
arrow.classList.add('arrow')

const popper = new Tooltip({
  arrow: true, // default
  // arrow: false Do not display the arrow element.
  // arrow: document.createElement('div') Customize the arrow element.
})
```

## API

Please refer to the [@cosmo-design/popper API documentation](https://github.com/cosmo-design/popper/blob/main/README.md) for the complete API.

### Config

| Name | Type | Description |
| -- | -- | -- |
| `content` | `string \| Node` | Content to be displayed |
| `arrow` | `boolean \| Node` | Arrow element |
