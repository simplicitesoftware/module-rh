RHObjectifFutur.preValidate = function() {
	var f = this.getField("rhOfuNumero");
	if (f.isEmpty())
		f.setValue(this.getGrant().getNextValueForColumnWhere(this.getTable(), f.getColumn(), "ofu_ent_id = " + this.getFieldValue("rhOfuEntId")));
};