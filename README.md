forcem.js
=========

a content placeholder toolkit


Include `forcem.js` towards the end of the body tag.

	<script src="forcem.js" type="text/javascript"></script>
	<script>
		forcem({
			episode: 4, //Allowed 4 - 6
			list: 'characters' //Allowed 'characters', 'planets'
		});
	</script>

## Usage

Set elements class to `ipsum`. Use class `p-#` for paragraphs or `l-#` for lists where # is the number of paragraphs or list items you want displayed.

## Examples
### Paragraphs
	<div class="ipsum p-5"></div>

### Lists
	<ul class="ipsum l-5"></ul>

### Images
Set `w-#` and `h-#` for width and height.

	<img class="ipsum w-200 h-100"/>
