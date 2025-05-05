package com.simplicite.objects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object RHObjectifService
 */
public class RHObjectifService extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public List<String> preValidate() {
		List<String> msgs = new ArrayList<>();
		ObjectField f = getField("rhOsrNumero");
		if (isNew() || isCopied())
			f.setValue(getGrant().getNextValueForColumnWhere(getTable(), f.getColumn(), "osr_cpg_id = " + getFieldValue("rhOsrCpgId")));	
		return msgs;
	}
}
