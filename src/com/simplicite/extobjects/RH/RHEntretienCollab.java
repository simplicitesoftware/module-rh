package com.simplicite.extobjects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;
import com.simplicite.webapp.web.JQueryWebPage;
/**
 * Basic external object RHEntretienCollab
 */
public class RHEntretienCollab extends com.simplicite.util.ExternalObject {
	private static final long serialVersionUID = 1L;

	// Note: instead of this basic external object, a specialized subclass should be used

	/**
	 * Display method
	 * @param params Request parameters
	 */
	@Override
	public Object display(Parameters params) {
		try {
			setDecoration(false);
	
			JQueryWebPage wp = new JQueryWebPage(params.getRoot(), "Entretien Annuel");
			wp.setLanguage("fr");
			wp.appendAjax();
			wp.appendHTMLEditor();
			wp.appendCSSInclude(HTMLTool.getResourceCSSURL(this, "STYLES"));
			wp.appendJSInclude(HTMLTool.getResourceJSURL(this, "SCRIPT"));
		
			wp.setFavicon(HTMLTool.getResourceIconURL(this, "FAVICON"));
		
			var code = params.getParameter("code");
			wp.appendJS("var CODE = \"" + code + "\", YEAR = " + Tool.getCurrentYear() + ", ROOT = \"" + wp.getRoot() + "\", APPLICATION = \"" + Globals.getApplicationName() + "\";");
			
			wp.setReady("RHEntretienCollab.init();");
		
			wp.append(
				"<div id=\"entete\">" +
					"<img src=\"" + HTMLTool.getResourceImageURL(this, "LOGO") + "\"/>" +
					"<h1>Entretien Annuel</h1>" +
					"<p class=\"info\">Cette page vous permet de consulter (et de valider si besoin) votre entretien.</p>" +
				"</div>" +
				"<div id=\"corps\">" +
					"<h2>Votre profil</h2><hr/>" +
					"<div id=\"collaborateur\"><img src=\"" + HTMLTool.getResourceImageURL(this, "LOADING") + "\"/></div>" +
					"<h2>Votre entretien</h2><hr/>" +
					"<div id=\"entretien\"><img src=\"" + HTMLTool.getResourceImageURL(this, "LOADING") + "\"/></div>" +
				"</div>" +
				"<div id=\"basdepage\">" +
					"<img src=\"" + HTMLTool.getResourceImageURL(this, "POWEREDBY") + "\"/>" +
				"</div>"
	);

	return wp.toString();
		}
		catch (Exception e) {
			AppLog.error(null, e, getGrant());
			return e.getMessage();
		}
	}
}
