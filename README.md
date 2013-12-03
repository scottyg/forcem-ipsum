forcem.js
=========

a content placeholder toolkit


Include `forcem.js` towards the end of the body tag.

	<script src="forcem.js" type="text/javascript"></script>
	<script>
		forcem({
			class: forcem,
			episode: 4, //Allowed 4 - 6
			list: 'characters' //Allowed 'characters', 'planets'
		});
	</script>

## Usage

Set elements class to `forcem`. Use class `p-#` for paragraphs or `li-#` for lists where # is the number of paragraphs or list items you want displayed.

## Examples
### Paragraphs
	<div class="forcem p-5"></div>

### Lists
	<ul class="forcem li-5"></ul>

### Images
Set `w-#` and `h-#` for width and height.

	<img class="forcem w-200 h-100"/>
