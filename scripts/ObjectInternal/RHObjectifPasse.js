RHObjectifPasse.preValidate = function() {
	var f = this.getField("rhOpaNumero");
	if (f.isEmpty())
		f.setValue(this.getGrant().getNextValueForColumnWhere(this.getTable(), f.getColumn(), "opa_ent_id = " + this.getFieldValue("rhOpaEntId")));
};