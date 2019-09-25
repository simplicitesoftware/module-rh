RHEntretien.preCreate = function() {
	var c = Tool.randomString(50);
	this.getField("rhEntURLCode").setValue(c);
	var u = HTMLPage.getPublicExternalObjectURL("RHEntretienCollab", "code=" + c);
	this.getField("rhEntURL").setValue(u);
};

RHEntretien.publication = function() {
	importPackage(Packages.com.lowagie.text);

	var g = this.getGrant();
	var bos = new java.io.ByteArrayOutputStream();
	var pdf = PDFTool.open(bos);
	
	try {
		pdf.add(PDFTool.getImageFromResource(this, "LOGO"));
		pdf.add(new Paragraph("Entretien Annuel: " +
			this.getField("rhEntColId.rhColCivilite").getDisplayValue() +
			" " + this.getField("rhEntColId.rhColNom").getValue() +
			" " + this.getField("rhEntColId.rhColPrenom").getValue(), PDFTool.TITLE1));
	
		var f = this.getField("rhEntEtat");
		pdf.add(new Paragraph(f.getDisplay() + ": " + f.getDisplayValue(), PDFTool.TITLE2));
		f = this.getField("rhEntDate");
		pdf.add(new Paragraph(f.getDisplay() + ": " + g.toFormattedDate(f.getValue())));
		// TODO : à completer...
	} catch (e) {
		pdf.add(new Paragraph(e.message));
	}
		
	PDFTool.close(pdf);
	return bos.toByteArray();
};

RHEntretien.isPrintTemplateEnable = function(row, printtemplate) {
	var s = row !== null ? row[this.getStatusIndex()] : this.getStatus();
	if (printtemplate == "RHEntretien-PDF")
		return s != "BR";
};