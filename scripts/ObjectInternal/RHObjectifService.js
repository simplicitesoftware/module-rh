RHObjectifService.preValidate = function() {
	var f = this.getField("rhOsrNumero");
	if (f.isEmpty())
		f.setValue(this.getGrant().getNextValueForColumnWhere(this.getTable(), f.getColumn(), "osr_cpg_id = " + this.getFieldValue("rhOsrCpgId") + " and osr_srv_id = " + this.getFieldValue("rhOsrSrvId")));
};