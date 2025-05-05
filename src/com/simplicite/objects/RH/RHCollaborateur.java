package com.simplicite.objects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object RHCollaborateur
 */
public class RHCollaborateur extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	
	@Override
	public String getUserKeyLabel(String[] row) {
		if (!Tool.isEmpty(row))
			return row[getFieldIndex("rhColPrenom")] + " " + row[getFieldIndex("rhColNom")] + " (" + row[getFieldIndex("rhColMatricule")] + ")";
		else
			return getFieldValue("rhColPrenom") + " " + getFieldValue("rhColNom") + " (" + getFieldValue("rhColMatricule") + ")";

	}
}
