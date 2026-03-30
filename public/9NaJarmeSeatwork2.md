## Step 1 (Static vs Relative)
### Question: What changed compared to the default static positioning?
In static positioning, elements follow the normal document flow. By using position: relative, the sidebar stays in its original spot in the flow, but I can now shift it from that position using top and left offsets. It now overlaps other elements if the offset is large enough.

## Step 2 (Fixed)
### Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
When scrolling, the footer stays pinned to the bottom of the browser window (viewport). It behaves differently because position: fixed removes the element from the normal document flow entirely and anchors it to the window edges, whereas relative positioning anchors the element to its original spot in the document.

## Step 3 (Absolute)
### Question: What is the effect of position: absolute on an element? How is it different from fixed?
position: absolute removes the element from the normal document flow, meaning other elements do not "see" it and collapse the space it left behind. It is positioned relative to its nearest positioned ancestor. The main difference from fixed is that absolute will scroll away with the rest of the page content, while fixed stays anchored to the screen.

## Step 4 (Absolute & z-index)
### Quesrion: Why does the notice appear on top of the content? What happens if you swap the z-index values?
The .notice appears on top because it has a higher z-index (2) compared to the .content (1). z-index determines the stack order along the z-axis (depth). If I swap them, the .content box will cover the .notice box.

## Challenge Answers

To position .notice at the top-right of .content: - Set .content { position: relative; } (to act as the container).

Set .notice { position: absolute; top: 0; right: 0; }.

Changing .content position:

Relative: The box moves relative to its original position; it stays in the flow.

Fixed: The box moves to a position relative to the browser window and stays there regardless of scrolling.

z-index effect: z-index only works on elements with a position value other than static. It effectively lets me control which elements "float" above others on the screen.

## Reflection Questions
### a. Summarize the differences:

Static: Default; no special positioning allowed.

Relative: Positioned relative to its original spot; leaves a gap in the flow.

Absolute: Positioned relative to the nearest positioned ancestor; removed from the flow.

Fixed: Positioned relative to the browser window; stays pinned when scrolling.

### b. Absolute positioning and parent elements:
absolute positioning looks for the first parent element that has a position property set (relative, absolute, or fixed). If it finds one, it positions itself based on that parent's edges. If it finds none, it aligns itself to the <body> (the entire page).

### c. Sticky vs. Fixed:
fixed is always attached to the browser window. sticky acts as a hybrid: it flows normally (like static) until the user scrolls it to a defined point (like top: 0), at which point it "sticks" and behaves like a fixed element.

### d. School Event Design Example:

Fixed: A "Back to Top" button that follows the user as they scroll through the long schedule of the ALAB fair.

Absolute: A "Limited Slots Only" tag placed in the corner of a specific workshop's description card.

Sticky: A header containing the event title and navigation tabs that stays at the top of the screen so users can easily jump between different concert or fair sections.
