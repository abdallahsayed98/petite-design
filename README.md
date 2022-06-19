# What is this?

Get perfect style, adding events and hide elements for the none-designer.

# Installation

`npm i petite-design --save`

## Selector

petite-designer supports 3 selectors types:

* *.className*  - _.className_
* *#idSelector* - _#id_
* *tagSelector* - _<tag>_


## setStyle(selector, options)

```
import { setStyle } from 'petite-design';

setStyle('.exampleName',{
    shadow_type: 'soft',
    padding: true,
    margin: true,
    backgroundColor: 'white'
});
```

### Options

petite-designer supports 4 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)
* *margin* - _boolean_ (Defaults to false)
* *backgroundColor* - _coloreName | hex | rgb | rgba_ (Defaults to white )

## addEvent(selector, event, callback)
```
import { addEvent } from 'petite-design';

addEvent('.exampleName','click',function(){
    console.log("log from click event");
})  
```

### event 

petite-designer __addEvent()__ supports all __dom__ events :

* __'click'__
* __'focus'__
* __'keypress'__
* __'etc...'__

### callback

__addEvent()__ calllback fucntion it's a function that called after event trager


## hide(selector)

__hide()__ is function that used to hide the element(s)

