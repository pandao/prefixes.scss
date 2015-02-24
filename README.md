# Prefixes.scss
CSS(3) prefixes mixins for Sass/Scss.

####Download

[prefixes.scss](https://raw.githubusercontent.com/pandao/prefixes.scss/master/prefixes.scss)

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

####License

The [MIT](https://github.com/pandao/prefixes.scss/blob/master/LICENSE) license.

Copyright (c) 2015 Pandao
