# Review 1/7/22 - CSS Intro

**CSS**, Cascading Style Sheets, is used for styling web pages (HTML documents).

_Cascading_ refers to the inheritence of css declarations by descendent elements.

_Specificity_ refers to determination of which styles are applied based on how specific a ruleset is written.

## Box Model

How elements are displayed on a screen, including space for _content_, _padding_, _border_, and _margin_. Elements are rendered as "boxes", with four sides that determine sizing and spacing for elements.

```txt
margin
    border
        padding
            content
```

## Types

1. Inline

```html
<p style="color: red; margin: 10px; background-color: black;">Some text</p>
```

2. Embeded/Internal

In your `.html`:

```css
<head>
    <style>
        selector {
        property: value; /* together make a css declaration */
        }
    </style>
</head>
```

3. External

In an external `.css` file:

```css
selector {
  property: value; /* together make a css declaration */
}
```

## Anatomy of a Ruleset

```css
selector {
  property: value; /* together make a css declaration */
}
```

## Selectors

### Simple Selectors

Ordered from most specific to least:

1. Id (`#id`)
2. Class (`.class`)
3. Element (`tagname`)
4. Universal (`*`)

### Grouped Selectors

Can combine (group) selectors. Seperate with a comma (ex: `h1, .text, #id { ... }`)

### Descendent and Child Selectors

1. Descendent selector `nav li { ... }`
2. Child selector `nav > ul { ... }`

### Properties

- color
- background-color
- font-size
- font-family
- font-weight
- margin
- padding
- border
- border-radius
- width
- min-width
- max-width
- height
- min-height
- max-height
- text-decoration
- display
- position
- top
- right
- bottom
- left

## HTML Clarification

Is an HTML element and/or HTML tag the same thing?

- No

What makes up a HTML element?

- tags
- attributes
- inner content; either text or other child elements
