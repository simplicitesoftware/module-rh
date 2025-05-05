package com.simplicite.objects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object RHObjectifPasse
 */
public class RHObjectifPasse extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public List<String> preValidate() {
		List<String> msgs = new ArrayList<>();
		ObjectField f = getField("rhOpaNumero");
		if (isNew() || isCopied())
			f.setValue(getGrant().getNextValueForColumnWhere(getTable(), f.getColumn(), "opa_ent_id = " + getFieldValue("rhOpaEntId")));	
		return msgs;
	}
}
