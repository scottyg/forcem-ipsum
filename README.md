forcem.js
=========

a content placeholder toolkit

Include `forcem.js` towards the end of the body tag.

The basic set up defaults to `.forcem`using episode 4 and planets in lists

	forcem();
	
Heres and example of an advanced set up

	forcem({
		class: forcem,
		episode: 4, //Allowed 4 - 6
		list: 'characters' //Allowed 'characters', 'planets'
	});
	
## Usage

Set elements class to `forcem`. Use class `p-#` for paragraphs or `li-#` for lists where # is the number of paragraphs or list items you want displayed.

### Paragraphs
	<div class="forcem p-5"></div>

### Lists
	<ul class="forcem li-5"></ul>

### Images
Set `w-#` and `h-#` for width and height.

	<img class="forcem w-200 h-100"/>

## Example
A full example

	<html>
	<head>
		<title>forcem.js</title>
	</head>
	<body>
		<div class="forcem p-6"></div>
		<ul class="forcem li-4"></ul>
		<img class="forcem w-200 h-100"/>
		<script src="forcem.js" type="text/javascript"></script>
		<script>
			forcem({
				class: 'forcem',
				episode: 4,
				list: 'planets'
			});
		</script>
	</body>
	</html>