<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://docs.simplicite.io//logos/logo250.png)
* * *

`RH` module definition
======================

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=simplicite-modules-RH&metric=alert_status)](https://sonarcloud.io/dashboard?id=simplicite-modules-RH)

### Introduction

**Human resources** module for managing:

- Employees
- interviews
- Competencies
- Trainings

**Note**: This module is only available in French

### Import

To import this module:

- Create a module named `RH`
- Set the settings as:

```json
{
	"type": "git",
	"origin": {
		"uri": "https://github.com/simplicitesoftware/module-rh.git"
	}
}
```

- Click on the _Import module_ button.

### Load data

Some sample data is provided as a module's dataset.

Open this dataset and click on the _Apply_ button after having imported the module and made a full clear cache.



`RHCampagne` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhCpgAnnee`                                                 | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `rhCpgDateDebut`                                             | date                                     | yes      | yes       |          | -                                                                                |
| `rhCpgDateFin`                                               | date                                     | yes      | yes       |          | -                                                                                |
| `rhCpgDescription`                                           | html(50000)                              |          | yes       |          | -                                                                                |
| `rhCpgNotice`                                                | document                                 |          | yes       |          | -                                                                                |

`RHCollaborateur` business object definition
--------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhColMatricule`                                             | regexp(20)                               | yes*     | yes       |          | -                                                                                |
| `rhColCivilite`                                              | enum(10) using `RH_CIVILITE` list        | yes      | yes       |          | -                                                                                |
| `rhColNom`                                                   | char(100)                                | yes      | yes       |          | -                                                                                |
| `rhColPrenom`                                                | char(100)                                | yes      | yes       |          | -                                                                                |
| `rhColUsrId` link to **`User`**                              | id                                       |          | yes       |          | -                                                                                |
| _Ref. `rhColUsrId.usr_login`_                                | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `rhColPhoto`                                                 | image                                    |          | yes       |          | -                                                                                |
| `rhColDateNaissance`                                         | date                                     | yes      | yes       |          | -                                                                                |
| `rhColEmail`                                                 | email(50)                                |          | yes       |          | -                                                                                |
| `rhColTelephone`                                             | phone(20)                                |          | yes       |          | -                                                                                |
| `rhColMobile`                                                | phone(20)                                |          | yes       |          | -                                                                                |
| `rhColFax`                                                   | phone(20)                                |          | yes       |          | -                                                                                |
| `rhColAdresse`                                               | char(100)                                |          | yes       |          | -                                                                                |
| `rhColComplement`                                            | char(100)                                |          | yes       |          | -                                                                                |
| `rhColCodePostal`                                            | regexp(10)                               |          | yes       |          | -                                                                                |
| `rhColVille`                                                 | char(50)                                 |          | yes       |          | -                                                                                |
| `rhColCoords`                                                | geocoords                                |          | yes       |          | -                                                                                |
| `rhColStatut`                                                | enum(3) using `RH_COL_STATUT` list       | yes      | yes       |          | -                                                                                |
| `rhColDateDebut`                                             | date                                     | yes      | yes       |          | -                                                                                |
| `rhColDateFin`                                               | date                                     |          | yes       |          | -                                                                                |
| `rhColSrvId` link to **`RHService`**                         | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvLibelle`_                             | _char(50)_                               |          |           |          | -                                                                                |
| `rhColDateDebutSrv`                                          | date                                     | yes      | yes       |          | -                                                                                |
| `rhColTitre`                                                 | char(100)                                |          | yes       |          | -                                                                                |

### Lists

* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_COL_STATUT`
    - `CDI` Contrat à Durée Indéterminée
    - `CDD` Contrat à Durée Déterminée
    - `STG` Stage
    - `APP` Apprenti

`RHCollaborateurCompetence` business object definition
------------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhColCmpColId` link to **`RHCollaborateur`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhColCmpColId.rhColMatricule`_                        | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhColCmpColId.rhColCivilite`_                         | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhColCmpColId.rhColNom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhColCmpColId.rhColPrenom`_                           | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhColCmpColId.rhColSrvId`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvLibelle`_                             | _char(50)_                               |          |           |          | -                                                                                |
| _Ref. `rhColCmpColId.rhColTitre`_                            | _char(100)_                              |          |           |          | -                                                                                |
| `rhColCmpCmpId` link to **`RHCompetence`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhColCmpCmpId.rhCmpNom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhColCmpCmpId.rhCmpType`_                             | _enum(3) using `RH_CMP_TYPE` list_       |          |           |          | -                                                                                |
| `rhColCmpNiveau`                                             | int(11)                                  | yes      | yes       |          | -                                                                                |
| `rhColCmpCommentaires`                                       | notepad(50000)                           |          | yes       |          | -                                                                                |

### Lists

* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_CMP_TYPE`
    - `TEC` Technique
    - `FON` Fonctionelle
    - `ENC` Encadrement
    - `LNG` Langue
    - `AUT` Autre

`RHCollaborateurHistoric` business object definition
----------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `row_ref_id` link to **`RHCollaborateur`**                   | id                                       | yes*     |           |          | -                                                                                |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | -                                                                                |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | -                                                                                |
| `rhColSrvId` link to **`RHService`**                         | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| `rhColDateDebutSrv`                                          | date                                     | yes      | yes       |          | -                                                                                |
| `rhColTitre`                                                 | char(100)                                |          | yes       |          | -                                                                                |

`RHCompetence` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhCmpNom`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `rhCmpType`                                                  | enum(3) using `RH_CMP_TYPE` list         | yes      | yes       |          | -                                                                                |
| `rhCmpDescription`                                           | html(50000)                              |          | yes       |          | -                                                                                |

### Lists

* `RH_CMP_TYPE`
    - `TEC` Technique
    - `FON` Fonctionelle
    - `ENC` Encadrement
    - `LNG` Langue
    - `AUT` Autre

`RHDemandeFormation` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhDfrColId` link to **`RHCollaborateur`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhDfrColId.rhColMatricule`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhDfrColId.rhColCivilite`_                            | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhDfrColId.rhColNom`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhDfrColId.rhColPrenom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhDfrColId.rhColSrvId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvLibelle`_                             | _char(50)_                               |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhDfrColId.rhColTitre`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `rhDfrFrmId` link to **`RHFormation`**                       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhDfrFrmId.rhFrmCode`_                                | _regexp(30)_                             |          |           |          | -                                                                                |
| _Ref. `rhDfrFrmId.rhFrmType`_                                | _enum(3) using `RH_FRM_TYPE` list_       |          |           |          | -                                                                                |
| _Ref. `rhDfrFrmId.rhFrmLibelle`_                             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhDfrFrmId.rhFrmPeriode`_                             | _multi(20) using `RH_TRIMESTRE` list_    |          |           |          | -                                                                                |
| `rhDfrEtat`                                                  | enum(1) using `RH_DFR_ETAT` list         | yes      | yes       |          | -                                                                                |
| `rhDfrMotivation`                                            | html(50000)                              |          | yes       |          | -                                                                                |
| `rhDfrPeriodeSouhaitee`                                      | enum(2) using `RH_TRIMESTRE` list        |          | yes       |          | -                                                                                |
| `rhDfrDIF`                                                   | boolean                                  |          | yes       |          | -                                                                                |

### Lists

* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_FRM_TYPE`
    - `AUV` Audiovisuel
    - `MKT` Marketing
    - `BUR` Bureatutique
    - `INF` Informatique
    - `WEB` Internet
    - `GES` Gestion
    - `CMP` Comptabilité
    - `REH` Ressources Humaines
    - `DRT` Droit
    - `AUT` Autre
* `RH_TRIMESTRE`
    - `T1` Trimestre 1
    - `T2` Trimestre 2
    - `T3` Trimestre 3
    - `T4` Trimestre 4
* `RH_DFR_ETAT`
    - `D` Demandée
    - `A` Acceptée
    - `R` Refusée

`RHDemandeFormationHistoric` business object definition
-------------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `row_ref_id` link to **`RHDemandeFormation`**                | id                                       | yes*     |           |          | -                                                                                |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | -                                                                                |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | -                                                                                |
| `rhDfrEtat`                                                  | enum(1) using `RH_DFR_ETAT` list         | yes      | yes       |          | -                                                                                |

### Lists

* `RH_DFR_ETAT`
    - `D` Demandée
    - `A` Acceptée
    - `R` Refusée

`RHEntretien` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhEntCpgId` link to **`RHCampagne`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhEntCpgId.rhCpgAnnee`_                               | _int(11)_                                |          |           |          | -                                                                                |
| _Ref. `rhEntCpgId.rhCpgDateDebut`_                           | _date_                                   |          |           |          | -                                                                                |
| _Ref. `rhEntCpgId.rhCpgDateFin`_                             | _date_                                   |          |           |          | -                                                                                |
| `rhEntDate`                                                  | datetime                                 | yes      | yes       |          | -                                                                                |
| `rhEntDuree`                                                 | int(11)                                  | yes      | yes       |          | -                                                                                |
| `rhEntEtat`                                                  | enum(2) using `RH_ENT_ETAT` list         | yes      | yes       |          | -                                                                                |
| `rhEntURLCode`                                               | char(50)                                 |          |           |          | -                                                                                |
| `rhEntURL`                                                   | url(255)                                 |          |           |          | -                                                                                |
| `rhEntColId` link to **`RHCollaborateur`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhEntColId.rhColMatricule`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColCivilite`_                            | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColNom`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColPrenom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColSrvId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvLibelle`_                             | _char(50)_                               |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColTitre`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `rhEntEvlId` link to **`RHCollaborateur`**                   | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `rhEntEvlId.rhColMatricule`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhEntEvlId.rhColCivilite`_                            | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhEntEvlId.rhColNom`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhEntEvlId.rhColPrenom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhEntEvlId.rhColUsrId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhColUsrId.usr_login`_                                | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `rhEntBilanEvaluateur`                                       | html(50000)                              |          | yes       |          | -                                                                                |
| `rhEntBilanCollaborateur`                                    | html(50000)                              |          |           |          | -                                                                                |
| `rhEntEvaluation`                                            | enum(3) using `RH_ENT_EVALUATION` list   |          | yes       |          | -                                                                                |
| `rhEntSuivi`                                                 | boolean                                  |          | yes       |          | -                                                                                |

### Lists

* `RH_ENT_ETAT`
    - `BR` Brouillon
    - `CP` Complet
    - `VC` Validé par le collaborateur
    - `VE` Validé par l'évaluateur
* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_ENT_EVALUATION`
    - `APP` A++
    - `AP` A+
    - `A` A
    - `AM` A-
    - `BP` B+
    - `B` B
    - `BM` B-
    - `C` C
    - `D` D

`RHEntretienHistoric` business object definition
------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `row_ref_id` link to **`RHEntretien`**                       | id                                       | yes*     |           |          | -                                                                                |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | -                                                                                |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | -                                                                                |
| `rhEntEtat`                                                  | enum(2) using `RH_ENT_ETAT` list         | yes      | yes       |          | -                                                                                |

### Lists

* `RH_ENT_ETAT`
    - `BR` Brouillon
    - `CP` Complet
    - `VC` Validé par le collaborateur
    - `VE` Validé par l'évaluateur

`RHFormation` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhFrmCode`                                                  | regexp(30)                               | yes*     | yes       |          | -                                                                                |
| `rhFrmType`                                                  | enum(3) using `RH_FRM_TYPE` list         | yes      | yes       |          | -                                                                                |
| `rhFrmLibelle`                                               | char(100)                                | yes      | yes       |          | -                                                                                |
| `rhFrmDisponible`                                            | boolean                                  | yes      | yes       |          | -                                                                                |
| `rhFrmDescription`                                           | html(50000)                              |          | yes       |          | -                                                                                |
| `rhFrmProgramme`                                             | document                                 |          | yes       |          | -                                                                                |
| `rhFrmPeriode`                                               | multi(20) using `RH_TRIMESTRE` list      |          | yes       |          | -                                                                                |
| `rhFrmCout`                                                  | float(11, 2)                             |          | yes       |          | -                                                                                |

### Lists

* `RH_FRM_TYPE`
    - `AUV` Audiovisuel
    - `MKT` Marketing
    - `BUR` Bureatutique
    - `INF` Informatique
    - `WEB` Internet
    - `GES` Gestion
    - `CMP` Comptabilité
    - `REH` Ressources Humaines
    - `DRT` Droit
    - `AUT` Autre
* `RH_TRIMESTRE`
    - `T1` Trimestre 1
    - `T2` Trimestre 2
    - `T3` Trimestre 3
    - `T4` Trimestre 4

`RHFormationSuivie` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhFrsColId` link to **`RHCollaborateur`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhFrsColId.rhColMatricule`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhFrsColId.rhColCivilite`_                            | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhFrsColId.rhColNom`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhFrsColId.rhColPrenom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhFrsColId.rhColSrvId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhColSrvId.rhSrvLibelle`_                             | _char(50)_                               |          |           |          | -                                                                                |
| _Ref. `rhFrsColId.rhColTitre`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `rhFrsFrmId` link to **`RHFormation`**                       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhFrsFrmId.rhFrmCode`_                                | _regexp(30)_                             |          |           |          | -                                                                                |
| _Ref. `rhFrsFrmId.rhFrmType`_                                | _enum(3) using `RH_FRM_TYPE` list_       |          |           |          | -                                                                                |
| _Ref. `rhFrsFrmId.rhFrmLibelle`_                             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhFrsFrmId.rhFrmPeriode`_                             | _multi(20) using `RH_TRIMESTRE` list_    |          |           |          | -                                                                                |
| `rhFrsEvaluation`                                            | enum(3) using `RH_FRS_EVALUATION` list   | yes      | yes       |          | -                                                                                |
| `rhFsrDate`                                                  | date                                     | yes      | yes       |          | -                                                                                |
| `rhFrsCommentaires`                                          | html(50000)                              |          | yes       |          | -                                                                                |

### Lists

* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_FRM_TYPE`
    - `AUV` Audiovisuel
    - `MKT` Marketing
    - `BUR` Bureatutique
    - `INF` Informatique
    - `WEB` Internet
    - `GES` Gestion
    - `CMP` Comptabilité
    - `REH` Ressources Humaines
    - `DRT` Droit
    - `AUT` Autre
* `RH_TRIMESTRE`
    - `T1` Trimestre 1
    - `T2` Trimestre 2
    - `T3` Trimestre 3
    - `T4` Trimestre 4
* `RH_FRS_EVALUATION`
    - `1` Très utile
    - `2` Moyennement utile
    - `3` Faiblement utile

`RHObjectifFutur` business object definition
--------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhOfuEntId` link to **`RHEntretien`**                       | id                                       | yes*     |           |          | -                                                                                |
| _Ref. `rhOfuEntId.rhEntCpgId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhEntCpgId.rhCpgAnnee`_                               | _int(11)_                                |          |           |          | -                                                                                |
| _Ref. `rhOfuEntId.rhEntEtat`_                                | _enum(2) using `RH_ENT_ETAT` list_       |          |           |          | -                                                                                |
| _Ref. `rhOfuEntId.rhEntColId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColMatricule`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColCivilite`_                            | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColNom`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColPrenom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| `rhOfuNumero`                                                | int(11)                                  | yes*     |           |          | -                                                                                |
| `rhOfuType`                                                  | enum(30) using `RH_OPA_OFU_TYPE` list    | yes      | yes       |          | -                                                                                |
| `rhOfuObjectif`                                              | html(50000)                              |          | yes       |          | -                                                                                |

### Lists

* `RH_ENT_ETAT`
    - `BR` Brouillon
    - `CP` Complet
    - `VC` Validé par le collaborateur
    - `VE` Validé par l'évaluateur
* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_OPA_OFU_TYPE`
    - `SFA` Savoir faire
    - `SET` Savoir être
    - `AUT` Autre

`RHObjectifPasse` business object definition
--------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhOpaEntId` link to **`RHEntretien`**                       | id                                       | yes*     |           |          | -                                                                                |
| _Ref. `rhOpaEntId.rhEntCpgId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhEntCpgId.rhCpgAnnee`_                               | _int(11)_                                |          |           |          | -                                                                                |
| _Ref. `rhOpaEntId.rhEntEtat`_                                | _enum(2) using `RH_ENT_ETAT` list_       |          |           |          | -                                                                                |
| _Ref. `rhOpaEntId.rhEntColId`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColMatricule`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColCivilite`_                            | _enum(10) using `RH_CIVILITE` list_      |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColNom`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rhEntColId.rhColPrenom`_                              | _char(100)_                              |          |           |          | -                                                                                |
| `rhOpaNumero`                                                | int(11)                                  | yes*     |           |          | -                                                                                |
| `rhOpaType`                                                  | enum(30) using `RH_OPA_OFU_TYPE` list    | yes      | yes       |          | -                                                                                |
| `rhOpaObjectif`                                              | html(50000)                              |          | yes       |          | -                                                                                |
| `rhOpaNiveauAtteinte`                                        | enum(1) using `RH_OPA_NIVEAUATTEINTE` list |          | yes       |          | -                                                                                |
| `rhOpaCommentaires`                                          | html(50000)                              |          | yes       |          | -                                                                                |

### Lists

* `RH_ENT_ETAT`
    - `BR` Brouillon
    - `CP` Complet
    - `VC` Validé par le collaborateur
    - `VE` Validé par l'évaluateur
* `RH_CIVILITE`
    - `MLLE` Mademoiselle
    - `MME` Madame
    - `M` Monsieur
* `RH_OPA_OFU_TYPE`
    - `SFA` Savoir faire
    - `SET` Savoir être
    - `AUT` Autre
* `RH_OPA_NIVEAUATTEINTE`
    - `1` Excellent
    - `2` Bon
    - `3` Moyen
    - `4` Insuffisant

`RHObjectifService` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhOsrCpgId` link to **`RHCampagne`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhOsrCpgId.rhCpgAnnee`_                               | _int(11)_                                |          |           |          | -                                                                                |
| _Ref. `rhOsrCpgId.rhCpgDateDebut`_                           | _date_                                   |          |           |          | -                                                                                |
| _Ref. `rhOsrCpgId.rhCpgDateFin`_                             | _date_                                   |          |           |          | -                                                                                |
| `rhOsrSrvId` link to **`RHService`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rhOsrSrvId.rhSrvCode`_                                | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `rhOsrSrvId.rhSrvLibelle`_                             | _char(50)_                               |          |           |          | -                                                                                |
| `rhOsrNumero`                                                | int(11)                                  | yes*     |           |          | -                                                                                |
| `rhOsrType`                                                  | enum(3) using `RH_OSR_TYPE` list         | yes      | yes       |          | -                                                                                |
| `rhOsrObjectif`                                              | html(50000)                              |          | yes       |          | -                                                                                |
| `rhOsrPieceJointe`                                           | document                                 |          | yes       |          | -                                                                                |

### Lists

* `RH_OSR_TYPE`
    - `QLT` Qualitatif
    - `QTT` Quantitatif
    - `AUT` Autre

`RHService` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `rhSrvCode`                                                  | regexp(20)                               | yes*     | yes       |          | -                                                                                |
| `rhSrvLibelle`                                               | char(50)                                 | yes      | yes       |          | -                                                                                |
| `rhSrvLogo`                                                  | image                                    |          | yes       |          | -                                                                                |
| `rhSrvDescription`                                           | html(50000)                              |          | yes       |          | -                                                                                |

`RHEntretienCollab` external object definition
----------------------------------------------




