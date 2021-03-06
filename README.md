# Design

## Section One

I used flex-box here with three flex-childs to determine row/column at different sizes. Main sizes I focused heavily on were visuals 320-600px for phones, and up to 768px for ipads. Other than that 1200px for desktop. I assumed this section was rather static as it is not something that would be altered too much from the CMS (compared to the cards).

## Section Two

I used Flex box and took advantage of its wrap property assuming this would grow from the CMS it is being generated from and grow more than 3.

## CSS

SCSS was my choice of pre-processor as I'm familiar with it. I created base variables and added to them over time so if any branding or typogrophy changed later it was easy to do in one place.

For the modal, I chose to use opacity changing as the way it showed. I added an open class on click and then a JS statement to close it when the text or image was not clicked. The other way I could of tackled it was to initially use a display: none on the modal but I believe that would have meant I would need to change that style directly in the JS, rather than adding a class. I preferred the class method as it looked cleaner especially as number of images it applied to grew in size. I could have changed the design slightly to use an "X" to close it with a span, but decided against that as well.

In regards to interactivity, I opted for a slight opacity and cursor change, indicating to the user that it can be clicked. There is a small transition for it to open to make it look more fluid. The transition is similar for the hover effect of the "read more".

## Javascript

I used a similar method to console click anchor elements as well as adding a class to the modal by query selecting all to create an array and then looping through it to add an event listener with onClick. I believe this was the simplest way and won't have any issues as the elements grow dynamically compared to a sub-par way of adding an individual ID and calling each one. I used a data-original attribute on elements to easily get access to the element I was after for console clicking (i.e. giving it an actual name rather than something like "read more was clicked")

## SEO / Symantic HTML

I used sections where required, added in a meta title, description, and author. The meta viewport was set to assist responsive designs through width-device. The meta descriptions may not be the best as I don't know the website that well but should be enough to indicate intention. All images have alt tags and images were renamed to what they looked like.
