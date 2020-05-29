RHCollaborateur.getUserKeyLabel = function(row) {
	if (row)
		return row[this.getFieldIndex("rhColPrenom")] + " " + row[this.getFieldIndex("rhColNom")] + " (" + row[this.getFieldIndex("rhColMatricule")] + ")";
	else
		return this.getFieldValue("rhColPrenom") + " " + this.getFieldValue("rhColNom") + " (" + this.getFieldValue("rhColMatricule") + ")";
};