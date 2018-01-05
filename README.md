# ProcessWire Accessibility Tools
A small, but hopefully growing toolkit for creating accessible ProcessWire sites. Right now it consists of the following little helpers:

* [tota11y visualization toolkit by Khan Academy](https://github.com/Khan/tota11y)
* A toggle button to see view site in grayscale. The w3c recommends checking your page without colours to see if your design still works (accompanied by a colours contrast check, which is part of tota11y)
* A link to test your webpage with WAVE, webaim's Web Accessibility eValuation Tool. By the nature of this tool, the website under test must be available online, local hosts won't work.

![tota11y menu opened](https://marcus.io/files/pwat/1.png)
![Grayscale active](https://marcus.io/files/pwat/3.png)

---
## Installation

Once you have downloaded PWAT, go to your module Install page and click "Check for new modules". Find "ProcessWire Accessibility Tools" and click "Install". During installation, PWAT creates a new role 'pwat_user'. To use the Accessibility Tools, you have to grant user this role. 

Following, you can start configuring the module.

![PWAT config page](https://marcus.io/files/pwat/5.png)

## Usage

PWAT starts with only the tota11y script activated. On the configuration page you can decide

* whether PWAT is visible on admin pages
* if tota11y is active
* if the grayscale toggle is active
* if the link to WAVE will be visible

## Credits

* [The amazing tota11y visualization tool by Khan Academy](http://khan.github.io/tota11y/)
* Inspiration: [Paul J. Adam's bookmarklets](https://github.com/pauljadam)
* Inspiration: [WordPress wa11y Plugin](https://de.wordpress.org/plugins/wa11y/)