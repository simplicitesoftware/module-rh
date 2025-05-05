package com.simplicite.objects.RH;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*; 
import com.simplicite.util.tools.*;
import java.io.ByteArrayOutputStream;
import org.apache.pdfbox.pdmodel.*;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts.FontName;
import org.apache.pdfbox.pdmodel.font.PDFont;
import java.io.IOException;
/**
 * Business object RHEntretien
 */
public class RHEntretien extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	@Override
	public String getUserKeyLabel(String[] row) {
		String label = "Entretien ";
		if (!Tool.isEmpty(row))
		label += row[getFieldIndex("rhEntCpgId.rhCpgAnnee")] + " de " + row[getFieldIndex("rhEntColId.rhColPrenom")] + " " + row[getFieldIndex("rhEntColId.rhColNom")] + " (" + row[getFieldIndex("rhEntColId.rhColMatricule")] + ")";
	else
		label += getFieldValue("rhEntCpgId.rhCpgAnnee") + " de " +  getFieldValue("rhEntColId.rhColPrenom") + " " + getFieldValue("rhEntColId.rhColNom") + " (" + getFieldValue("rhEntColId.rhColMatricule") + ")";

		return label;
	}
	
	@Override
	public String preCreate() {
		String c = Tool.randomString(50);
		getField("rhEntURLCode").setValue(c);
		String u = HTMLTool.getPublicExternalObjectURL("RHEntretienCollab", "code=" + c);
		getField("rhEntURL").setValue(u);
		return null;
	}
	
	public byte[] publication() {
		Grant g = getGrant();
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
	
		try (PDDocument doc = new PDDocument()) {
			PDPage page = new PDPage();
			doc.addPage(page);

			try (PDPageContentStream cs = new PDPageContentStream(doc, page)) {
				cs.beginText();
				PDFont boldFont = new PDType1Font(FontName.HELVETICA_BOLD);
            	PDFont normalFont = new PDType1Font(FontName.HELVETICA);
				cs.setFont(boldFont, 14);
				cs.setLeading(14.5f);
				cs.newLineAtOffset(50, 750);
				// Texte principal
				cs.showText("Entretien Annuel");
				
				cs.newLine();
				cs.setFont(normalFont, 12);
				cs.showText("Nom: " + getFieldValue("rhEntColId.rhColNom"));
				cs.newLine();
				cs.showText("Prénom: " + getFieldValue("rhEntColId.rhColPrenom"));
				cs.newLine();
				cs.showText("État: " + getField("rhEntEtat").getDisplayValue());
				cs.newLine();
				cs.showText("Date: " + g.toFormattedDate(getFieldValue("rhEntDate")));
		
				cs.endText();
			}
	
			doc.save(bos);
			doc.close();
		} catch (IOException e) {
			AppLog.error(getClass(), "publication", "Erreur de génération PDF", e, getGrant());
		}
	
		return bos.toByteArray();
	}
	
	@Override
	public boolean isPrintTemplateEnable(String[] row, String printTemplateName) {
		String s = !Tool.isEmpty(row) ? row[getStatusIndex()] : getStatus();
		//return "RHEntretien-PDF".equals(printTemplateName) && !"BR".equals(s);
		return true;
	}
}
