📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Diagramation Template

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)


This component is an interactive Grid that will change an order and will receive child components, their positions can be changed from its administrator.


<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677008930/diagra_yhmcj4.png">

## Configuration 

1. Import the Diagramation Template app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.special-diagramation": "0.x"
  }
 ```
 
 2. Add the special-diagramation block to the store-theme. for example:
```json
 {
   "flex-layout.row#custom__grid--template": {
    "title": "Custom Grid Template",
    "children": [
      "custom-grid"
    ]
  },
  "custom-grid": {
    "children": [
      "image#custom__grid--1",
      "image#custom__grid--2",
      "image#custom__grid--3",
      "image#custom__grid--4",
      "image#custom__grid--5"
    ]
  },

  "image#custom__grid--1": {
    "props": {
      "src": "https://cosonyb2c.vtexassets.com/arquivos/ids/356025/TV65x80J-PS5ST.jpg?v=1763341617"
    }
  },
  "image#custom__grid--2": {
    "props": {
      "src": "https://cosonyb2c.vtexassets.com/arquivos/ids/355121/710425579387_001.jpg?v=1763371405"
    }
  },
  "image#custom__grid--3": {
    "props": {
      "src": "https://cosonyb2c.vtexassets.com/arquivos/ids/355080/14633744545_001.jpg?v=1763371404"
    }
  },
  "image#custom__grid--4": {
    "props": {
      "src": "https://cosonyb2c.vtexassets.com/arquivos/ids/353991/710425578397_001.jpg?v=1763371115"
    }
  },
  "image#custom__grid--5": {
    "props": {
      "src": "https://cosonyb2c.vtexassets.com/arquivos/ids/353080/PA_CIRC_1stParty_PS4_FRONT_RP_071421-2.jpg?v=1763371114"
    }
  }
}
   ```

|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `custom-grid` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store theme block to render a default custom grid block.   |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|` grid__itemBig `|
|` grid__itemSmall `|
|` `grid__${gridType}` `|


<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)

