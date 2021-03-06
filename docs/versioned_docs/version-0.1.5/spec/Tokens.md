---
id: tokens
title: Tokens
slug: /spec/tokens
---

This doc contains all the approved tokens.

<div class="hs-status-tag implemented">
    <span class="hs-status-tag__label">Status: <b>IMPLEMENTED</b></span>
</div>

```scss
$h1: tools.to-rem(36px);
$h2: tools.to-rem(29px);
$h3: tools.to-rem(23px);
$h4: tools.to-rem(18px);
$body: tools.to-rem(16px);
$icon: tools.to-rem(24px);
$button: tools.to-rem(16px);
$small: tools.to-rem(14px);

$hs-tokens: (
    // ===== COLOR ===== //
    'surface': (
        '200': #f1f1f1,
        '300': #d7d7d7,
        '400': #c4c4c4,
        '600': #9a9a9a,
        'ink': #000000,
    ),
    'neutral': (
        '200': #383838,
        '300': #272727,
        '400': #171717,
        '600': #000000,
        'ink': #ffffff,
    ),
    // Disabled is a special token set and does not follow the design specs' 600-200 color naming scheme.
    'disabled': (
        'default': rgba(0, 0, 0, .12), // ALT: #bababa
        'ink': rgba(0, 0, 0, .37) // ALT: #646464
    ),
    'scarlet': support.color-split(#ff3815),
    'scarlet-ink': #fff,
    'plox': support.color-split(#d500e6),
    'plox-ink': #fff,
    'native-blue': support.color-split(#5b8bf5),
    'native-blue-ink': #fff,
    'bright-cyan': support.color-split(#00d0fd),
    'bright-cyan-ink': #000,
    'success': support.color-split(#30a83d),
    'success-ink': #fff,
    'warning': support.color-split(#fdad00),
    'warning-ink': #000,
    'danger': support.color-split(#c92020),
    'danger-ink': #fff,
    // ===== SHAPE ===== //
    'radius': (
        'none': 0,
        'xs': 0.3rem,
        'sm': 0.5rem,
        'md': 0.7rem,
        'lg': 1rem,
        'xl': 1.7rem,
        'pill': 700px // for pill shaped components
    ),
    'padding': (
        'none': 0,
        'xs': 0.5rem,
        'sm': 0.7rem,
        'md': 1rem,
        'lg': 1.3rem,
        'xl': 1.7rem,
        'pill': 1.3rem,
    ),
    'margin': (
        'none': 0,
        'xs': 0.5rem,
        'sm': 1rem,
        'md': 0.7rem,
        'lg': 0.9rem,
        'xl': 1.2rem,
        'pill': 0.9rem,
    ),
    'space': (
        'none': 0,
        'xs': 0.5rem,
        'sm': 1rem,
        'md': 0.7rem,
        'lg': 0.9rem,
        'xl': 1.2rem,
        'pill': 0.9rem,
    ),
    // ===== TYPOGRAPHY ===== //
    'family': (
        'global': ('Whyte', sans-serif),
        'header': ('WhyteInktrap', sans-serif),
        'body': ('Whyte', sans-serif),
        'action': ('IBM Plex Mono', monospace),
        'code': ('IBM Plex Mono', monospace)
    ),
    'size': (
        // General type tokens
        'h1': $h1,
        'h2': $h2,
        'h3': $h3,
        'h4': $h4,
        'body': $body,
        // Special type tokens
        'icon': $icon,
        'action': $button,
        'small': $small,
    ),
    'weight': (
        'h1': 700,
        'h2': 700,
        'h3': 700,
        'h4': 700,
        'body': 400,
        // == //
        'icon': 400,
        'action': 700,
        'small': 400,
    ),
    'line-height': (
        'h1': $h1 + tools.to-rem(13px),
        'h2': $h2 + tools.to-rem(10px),
        'h3': $h3 + tools.to-rem(8px),
        'h4': $h4 + tools.to-rem(6px),
        'body': $body + tools.to-rem(5px),
        // == //
        'icon': $icon + tools.to-rem(5px),
        'action': $button + tools.to-rem(5px),
        'small': $small + tools.to-rem(4px),
    )
);
```