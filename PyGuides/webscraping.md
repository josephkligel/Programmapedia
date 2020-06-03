# Webscraping with Python
("): same as previous

## -------------------------Install and Setup--------------------------------
-install bs4, requests, lxml

-from bs4 import BeautfulSoup
-import requests; import lxml
-url = requests.get('google.com')
-soup = BeautifulSoup(url.text, <parser>)

## -------------------------------Usage------------------------
Different parsers used for webscraping
### parsers:
	-html.parser
	-lxml

### finding elements:
	-soup.find(<tag>, {'<attribute>': 'attname'})
		-attribute name has no quotes and uses equals instead of colons
	-soup.find_all(("), ("))
	-soup.find('table', {'class': 'wikisortable'})
	-soup.find_all('tr')

### selecting elements:
	-soup.select(<selectorTag>)
	-soup.selectAll(<selectorTags>)
