# Prefixes.scss

CSS(3) prefixes mixins library for Sass/Scss. Free installation, custom you need css prefixes.

####Download

[prefixes.scss](https://raw.githubusercontent.com/pandao/prefixes.scss/master/dist/prefixes.scss)

####Example

**Scss:**

    @import "prefixes";
    
    .example {
        @include clearfix();
        @include border-radius(4px);
        @include box-shadow(0 1px 5px rgba(0, 0, 0, .5));
    }

**Sass:**

    @import "../prefixes"

    .example
        @include clearfix()
        @include border-radius(4px)
        @include box-shadow(0 1px 5px rgba(0, 0, 0, .5))

**CSS:**

    .example {
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        -ms-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        -o-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5); 
    }
    
    .example:before, .example:after {
        content: " ";
        display: table; 
    }
    
    .example:after {
        clear: both; 
    }
    
####Changes

[Change logs](https://github.com/pandao/prefixes.scss/blob/master/CHANGE.md)

####References

- [CanIUse](http://caniuse.com/ "CanIUse")
- [Should I Prefix](http://shouldiprefix.com/ "Should I Prefix")
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference "MDN CSS Reference")
    - [Mozilla Extensions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Mozilla_Extensions "Mozilla Extensions")
    - [Webkit Extensions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Webkit_Extensions "Webkit Extensions")
- [CtripUED -webkit CSS lib](http://ued.ctrip.com/webkitcss/index.html "CtripUED -webkit CSS lib")
- [Vendor-prefixed CSS Property Overview](http://peter.sh/experiments/vendor-prefixed-css-property-overview/ "Vendor-prefixed CSS Property Overview")

####License

The [MIT](https://github.com/pandao/prefixes.scss/blob/master/LICENSE) license.

Copyright (c) 2015 Pandao
