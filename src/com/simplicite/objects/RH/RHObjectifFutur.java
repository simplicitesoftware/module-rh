package com.simplicite.objects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object RHObjectifFutur
 */
public class RHObjectifFutur extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public List<String> preValidate() {
		List<String> msgs = new ArrayList<>();
		ObjectField f = getField("rhOfuNumero");
		if (isNew() || isCopied())
			f.setValue(getGrant().getNextValueForColumnWhere(getTable(), f.getColumn(), "ofu_ent_id = " + getFieldValue("rhOfuEntId")));
		return msgs;
	}
	
}
