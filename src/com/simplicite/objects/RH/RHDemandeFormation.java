package com.simplicite.objects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;

/**
 * Business object RHDemandeFormation
 */
public class RHDemandeFormation extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public String getUserKeyLabel(String[] row) {
		String label = "Demande de formation \"";
		if (!Tool.isEmpty(row))
			label += row[getFieldIndex("rhDfrFrmId.rhFrmLibelle")] + "\" (" + row[getFieldIndex("rhDfrFrmId.rhFrmCode")] + ") pour " + row[getFieldIndex("rhDfrColId.rhColPrenom")] + " " + row[getFieldIndex("rhDfrColId.rhColNom")] + " (" + row[getFieldIndex("rhDfrColId.rhColMatricule")] + ")";
		else 
			label += getFieldValue("rhDfrFrmId.rhFrmLibelle") + "\" (" + getFieldValue("rhDfrFrmId.rhFrmCode") + ") pour " +  getFieldValue("rhDfrColId.rhColPrenom") + " " + getFieldValue("rhDfrColId.rhColNom") + " (" + getFieldValue("rhDfrColId.rhColMatricule") + ")";
		return label;

	}
}
