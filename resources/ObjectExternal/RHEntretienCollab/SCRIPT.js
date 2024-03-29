var RHEntretienCollab = (function($) {
	var $s;
	var ent, opa, ofu;

	function init() {
		$s = new Simplicite.Ajax(ROOT, "uipublic");
		$s.setDebugHandlerActive(true);
		$s.login(function() {
			console.log("Connexion OK");
			console.log("Code = " + CODE);
			ent = $s.getBusinessObject("RHEntretien");
			opa = $s.getBusinessObject("RHObjectifPasse");
			ofu = $s.getBusinessObject("RHObjectifFutur");
			var a = $("#collaborateur").empty();
			var e = $("#entretien").empty();
			ent.getMetaData(function() {
				var ci = ent.getField("rhEntColId__rhColCivilite");
				ent.search(function() {
					if (ent.list.length != 1)
						e.append("<span style=\"color: red;\">L'entretien n'a pas été trouvé, veuillez contacter votre évaluateur.</span>");
					else {
						var item = ent.list[0];
						console.log("ID entretien = " + item.row_id);
						a.append($("<p/>").append("<b>" + ent.getValueForCode(ci, item.rhEntColId__rhColCivilite) + " " + item.rhEntColId__rhColPrenom + " " + item.rhEntColId__rhColNom + "</b> (" + item.rhEntColId__rhColMatricule + ")"));
						a.append($("<p/>").append(item.rhEntColId__rhColSrvId__rhSrvLibelle + " (matricule : " + item.rhEntColId__rhColSrvId__rhSrvCode + ")"));
						a.append($("<p/>").append("<i>" + item.rhEntColId__rhColTitre + "</i>"));
						e.append($("<h3/>").append("Vos objectifs passés"));
						e.append($("<div/>", { id: "objpasse" }));
						opa.getMetaData(function() {
							opa.search(function() {
								var na = opa.getField("rhOpaNiveauAtteinte");
								var l = opa.list;
								var op = $("#objpasse");
								var t = $("<table/>").addClass("list");
								op.append(t);
								for (var i = 0; i < l.length; i++) {
									t.append($("<tr/>")
										.append($("<th/>", { style: "width: 10%;" }).append(l[i].rhOpaNumero))
										.append($("<td/>").append("<strong>" + l[i].rhOpaObjectif + "</strong>").append("<br/>").append(l[i].rhOpaCommentaires))
										.append($("<td/>", { style: "width: 20%;" }).append(opa.getValueForCode(na,  l[i].rhOpaNiveauAtteinte)))
									);
								}
							}, { rhOpaEntId: item.row_id });
						});
						e.append($("<h3/>").append("Vos objectifs futurs"));
						e.append($("<div/>", { id: "objfutur" }));
						ofu.getMetaData(function() {
							ofu.search(function() {
								var l = ofu.list;
								var of = $("#objfutur");
								var t = $("<table/>").addClass("list");
								of.append(t);
								for (var i = 0; i < l.length; i++) {
									t.append($("<tr/>")
										.append($("<th/>", { style: "width: 10%;" }).append(l[i].rhOfuNumero))
										.append($("<td/>").append(l[i].rhOfuObjectif))
									);
								}
							}, { rhOfuEntId: item.row_id });
						});
						e.append($("<h3/>").append("Conclusion de l'évaluateur"));
						e.append($("<p/>").addClass("text").append(item.rhEntBilanEvaluateur).append("&nbsp;"));
						e.append($("<h3/>").append("Votre conclusion"));
						if (item.rhEntEtat == "CP") {
							var d = $("<div/>", { id: "conclusion" });
							e.append(d);
							d.append($("<textarea/>", { id: "bilan", style: "width: 100%; height: 100px;" }).val(item.rhEntBilanCollaborateur)).append("<br/>");
							tinymce.init({ selector: '#bilan', language: 'fr', toolbar: 'bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent', menubar: false, statusbar: false, branding: false, paste_data_images: true, paste_as_text: true, browser_spellcheck: true });
							d.append($("<div/>", { id: "valider" }).append($("<button/>").text("Valider").click(function() {
								item.rhEntEtat = "VC";
								item.rhEntBilanCollaborateur = tinymce.get("bilan").getContent();
								ent.update(function() {
									$("#conclusion").empty().append($("<p/>").addClass("text").append(item.rhEntBilanCollaborateur).append("&nbsp;"));
									$("#valider").empty();
								}, item);
							})));
						} else {
							e.append($("<p/>").addClass("text").append(item.rhEntBilanCollaborateur).append("&nbsp;"));
						}
					}
				}, { rhEntURLCode: CODE });
			});
		}, function() {
			console.log("Erreur");
		});
	}
	
	return { init: init };
})(jQuery);