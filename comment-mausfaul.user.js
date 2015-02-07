// ==UserScript==
// @name		ExtendedBenis für Mausfaule
// @author		holzmaster
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @version		1.1.0
// @updateURL	https://raw.githubusercontent.com/pr0nopoly/comment-mausfaul/master/comment-mausfaul.user.js
// @downloadURL	https://raw.githubusercontent.com/pr0nopoly/comment-mausfaul/master/comment-mausfaul.user.js
// @copyright	2014+, holzmaster
// @description	Für Leute, die ihre Maus nicht bewegen wollen, um die Up-/Downvotes eines Kommentars zu sehen.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

(function() {
	$(function() {
		p.View.Stream.Comments.prototype.template =
		p.View.Stream.Comments.prototype.template
			.replace('{"Punkt".inflect(c.score)}</span>',
					 '{"Punkt".inflect(c.score)} <i>({c.up}/{c.down})</i></span>');

		p.View.User.prototype.template =
		p.View.User.prototype.template
			.replace('{"Punkt".inflect(c.score)}</span>',
					 '{"Punkt".inflect(c.score)} <i>({c.up}/{c.down})</i></span>');

		p.View.User.Comments.prototype.template =
		p.View.User.Comments.prototype.template
			.replace('{"Punkt".inflect(c.score)}</span>',
					 '{"Punkt".inflect(c.score)} <i>({c.up}/{c.down})</i></span>');
	});
})();
