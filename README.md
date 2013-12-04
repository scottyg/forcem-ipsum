[Setup](#setup) |
[Options](#options) |
[Usage](#usage) |
[Example](#example)

---

<a name="setup"/>
# Setup
## HTML

Include `forcem.js` towards the end of the body tag.

### Basic 

	forcem();
	
### Advanced

	forcem({
		class: 'forcem',
		episode: 4,
		list: 'characters'
	});

## Photoshop
Place `forcem.js` into your Photoshop scripts folder. Restart Photoshop if it is running.

<a name="options"/>
# Options

| Option    | Description                            | Default   |
| --------- | -------------------------------------- | --------- |
| class     | Main class for forcem elements         | 'forcem'  |
| episode   | Star Wars epsidode #, episodes 4 - 6   | 4         |
| list      | List type: 'characters' or 'planets'   | 'planets' |

<a name="usage"/>
# Usage

## HTML
Set elements class to `forcem`. Use class `p-#` for paragraphs or `li-#` for lists where # is the number of paragraphs or list items you want displayed.

### Paragraphs
	<div class="forcem p-5"></div>

### Lists
	<ul class="forcem li-5"></ul>

### Images
Set `w-#` and `h-#` for width and height.

	<img class="forcem w-200 h-100"/>

## Photoshop
- Open document in Photoshop.
- Create New Layer
- Create Text Layer
- Select `File -> Script -> forcem` from the menu

<a name="example"/>
# HTML Example

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