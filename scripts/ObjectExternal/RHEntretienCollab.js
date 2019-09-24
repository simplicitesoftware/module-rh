RHEntretienCollab.display = function(params) {
	this.setDecoration(false);
	
	var wp = new JQueryWebPage(params.getRoot(), "Entretien Annuel");
	wp.appendAjax();
	wp.appendHTMLEditor();
	wp.appendCSSInclude(HTMLPage.getResourceCSSURL(this, "CSS"));
	wp.appendJSInclude(HTMLPage.getResourceJSURL(this, "JS"));

	wp.setFavicon(HTMLPage.getResourceIconURL(this, "FAVICON"));

	wp.appendLayout2CSS(900, 0, 0, 0, 0, 0, 0);
	wp.appendLayout2TabletCSS(900, 100, 0, 0, "");
	wp.appendLayout2MobileCSS(480, false, false, "");

	var code = params.getParameter("code");
	wp.appendJS("var CODE = \"" + code + "\", YEAR = " + Tool.getCurrentYear() + ", ROOT = \"" + wp.getRoot() + "\", APPLICATION = \"" + Globals.getApplicationName() + "\";");
	
	wp.setReady("RHEntretienCollab.init();");

	wp.append(
		"<div id=\"entete\">" +
			"<img src=\"" + HTMLPage.getResourceImageURL(this, "LOGO") + "\"/>" +
			"<h1>Entretien Annuel</h1>" +
			"<p class=\"info\">Cette page vous permet de consulter (et de valider si besoin) votre entretien.</p>" +
		"</div>" +
		"<div id=\"corps\">" +
			"<h2>Votre profil</h2><hr/>" +
			"<div id=\"collaborateur\"><img src=\"" + HTMLPage.getResourceImageURL(this, "LOADING") + "\"/></div>" +
			"<h2>Votre entretien</h2><hr/>" +
			"<div id=\"entretien\"><img src=\"" + HTMLPage.getResourceImageURL(this, "LOADING") + "\"/></div>" +
		"</div>" +
		"<div id=\"basdepage\">" +
			"<img src=\"" + HTMLPage.getResourceImageURL(this, "POWEREDBY") + "\"/>" +
		"</div>"
	);

	return wp.toString();
};