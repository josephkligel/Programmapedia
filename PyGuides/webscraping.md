# Webscraping with Python
("): same as previous

## Install and Setup
-install bs4, requests, lxml

-from bs4 import BeautfulSoup
-import requests; import lxml
-url = requests.get('google.com')
-soup = BeautifulSoup(url.text, <parser>)

## -------------------------------Parsers------------------------
Different parsers used for webscraping
### html.parser:
	soup = BeautifulSoup(url.text, 'html.parser')
#### Methods:
	-soup.find(<tag>, {'<attribute>': 'attname'}), soup.find_all(("), ("))
#### Examples:
	-soup.find('table', {'class': 'wikisortable'})
	-soup.find_all('tr')

### lxml:
	soup = BeatifulSoup(url.text, 'lxml')
#### Methods
	-("),(")
	-soup.select(<selectorTag>), soup.selectAll(<selectorTags>)
#### Examples
	-soud.find_all('table', class_='wikisortable'): attribute name has no quotes and uses equals instead of colons



