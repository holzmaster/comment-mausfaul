// ==UserScript==
// @name		ExtendedBenis für Kommentare
// @author		holzmaster
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @include		https://pr0gramm.com*
// @version		1.2.0
// @updateURL	https://raw.githubusercontent.com/pr0nopoly/comment-mausfaul/master/comment-mausfaul.user.js
// @downloadURL	https://raw.githubusercontent.com/pr0nopoly/comment-mausfaul/master/comment-mausfaul.user.js
// @copyright	2014+, holzmaster
// @description	Für Leute, die ihre Maus nicht bewegen wollen, um die Up-/Downvotes eines Kommentars zu sehen.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

(function() {
	$(function() {

		CONFIG.COMMENT_SHOW_SCORE_AGE = 0;

		p.View.Stream.Comments.prototype.template =
		p.View.Stream.Comments.prototype.template
			.replace('{"Punkt".inflect(c.score)}</span>',
					 '{"Punkt".inflect(c.score)} <i>({c.up}/{c.down})</i></span>');

		p.View.User.prototype.template =
		p.View.User.prototype.template
			.split('{"Punkt".inflect(c.score)}</span>').join(
					 '{"Punkt".inflect(c.score)} <i>({c.up}/{c.down})</i></span>');
		if(p.currentView.__proto__.classId === p.View.User.classId)
		{
			// Somehow the user page is buggy, so force template recompilation.
			var t = p.compileTemplate(p.View.User.prototype.template);
			p._compiledTemplates[p.View.User.classId] = t;
			p.currentView.compiledTemplate = t;
		}

		p.View.User.Comments.prototype.template =
		p.View.User.Comments.prototype.template
			.replace('{"Punkt".inflect(c.score)}</span>',
					 '{"Punkt".inflect(c.score)} <i>({c.up}/{c.down})</i></span>');
	});
})();
