RHDemandeFormation.getUserKeyLabel = function(row) {
	var label = "Demande de formation \"";
	if (row)
		label += row[this.getFieldIndex("rhDfrFrmId.rhFrmLibelle")] + "\" (" + row[this.getFieldIndex("rhDfrFrmId.rhFrmCode")] + ") pour " + row[this.getFieldIndex("rhDfrColId.rhColPrenom")] + " " + row[this.getFieldIndex("rhDfrColId.rhColNom")] + " (" + row[this.getFieldIndex("rhDfrColId.rhColMatricule")] + ")";
	else
		label += this.getFieldValue("rhDfrFrmId.rhFrmLibelle") + "\" (" + this.getFieldValue("rhDfrFrmId.rhFrmCode") + ") pour " +  this.getFieldValue("rhDfrColId.rhColPrenom") + " " + this.getFieldValue("rhDfrColId.rhColNom") + " (" + this.getFieldValue("rhDfrColId.rhColMatricule") + ")";
	return label;
};
