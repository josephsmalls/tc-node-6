# Review 1/10/22 - CSS Flexbox and Grid

## Flexbox

`display: flex`
`flex-direction: [row|column|column-reverse|row-reverse]`, defines the main axis direction
`justify-content: [flex-start, center, flex-end, space-between, space-around, space-evenly]`, determines the positions of flex items on the main axis
`align-items: [flex-start, center, flex-end, stretch, baseline]`, determines the positions of flex items on the cross axis
`align-self: [flex-start, center, flex-end, stretch, baseline]`, determines the position of a flex item on the cross axis
`flex-wrap: [wrap, no-wrap]` determines if flex items should be wrapped to a new line depending on the width of the container
`flex-shrink` rate of shrink for a flex item
`flex-grow` rate of growth for a flex item
`flex-basis` default size of a flex item
`flex` combination of flex-grow, flex-shrink, flex-basis

## Grid

Row/column layout with grid items/spaces

`display: grid`
`grid-template-columns`
`grid-template-rows`
`grid-area`

## CSS Functions

`repeat(times to repeat, value)` repeats a value n number of times
`minmax(minimum value, maximum value)` returns a value based on prescribed min and max values

## Relative Units

`fr` fractional unit
`%` percentage
`em` fraction of inherited font-size
`rem` fraction of inherited _root_ font-size
`vh` percentage of viewport height
`vw` percentage of viewport width
`vmin` percentage of the shorter viewport side
`vmax` percentage of the longer viewport side

## Fun Fact

The _Holy Grail_ layout is the most famous web layout.
