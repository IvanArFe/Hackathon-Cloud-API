# Hackathon-Cloud-API
# Nom del Prototip
El nostre projecte, "InfoVivendaTGN", es una aplicació que tracta d'ajudar a la gent que té
pensat mudar-se al nucli de Tarragona o als voltants. Està dissenyada per tot tipus de públic
i la idea principal és informar sobre els preus de la vivenda en els diferents municipis del Tarragonès.

## Equip
### Josep Lluís Marin Trabalón

[![Email](https://img.shields.io/badge/Email-<adreca-correu3>-blue)](mailto:joseplluis.marin@estudiants.urv.cat)
[![GitHub](https://img.shields.io/badge/GitHub-<nom-usuari-github3>-black?logo=github)](https://github.com/josepLlMt20)

### Angelina Ruiz Jimenez

[![Email](https://img.shields.io/badge/Email-<adreca-correu3>-blue)](mailto:angelina.ruiz@estudiants.urv.cat)
[![GitHub](https://img.shields.io/badge/GitHub-<nom-usuari-github3>-black?logo=github)](https://github.com/angeruiizz)

### Ivan Arenal Fernandez

[![Email](https://img.shields.io/badge/Email-<adreca-correu3>-blue)](mailto:ivan.arenal@estudiants.urv.cat)
[![GitHub](https://img.shields.io/badge/GitHub-<nom-usuari-github3>-black?logo=github)](https://github.com/IvanArFe)

## Problema abordat
L'inconvenient que hem detectat es l'augment recent dels preus del lloguer, sobre tot a prop del nucli del municipi o on hi ha zones escolars a prop.
Aquest és un problema bastant greu avui en dia, ja que, no tothom te un sou com per poder permetre's la constant pujada dels lloguers, conjuntament amb altres pujades.

## La nostra solució
Com s'ha comentat prèviament, hem dissenyat un aplicatiu que pot ser desplegat al núvol mitjançant diferents microserveis. Aquesta app, informa a l'usuari sobre les zones amb més promig de població, conjuntament amb el preu mitjà de lloguer en el municipi determinat.
A més a més, es poden aplicar més filtres, per exemple, per saber el nombre de places d'aparcament, en cas de no disposar de parking propi, o, fins i tot el nombre de parades d'autobús conjuntament amb la seva ubicació.
Amb aquesta implementació, volem ajudar a l'usuari a que segons els seus criteris i/o preferències, pugui escollir un municipi o un altre per mudar-se, o en cas de ser alumne per llogar un pis d'estudiants.

## Tecnologies utilitzades
- Llenguatges de programació: s'ha empleat Python per gestionar el tema del tractament de dades i fer la persistència sobre una base de dades MongoDB. A més, s'ha utilitzat també per entrenar un model de predicció que, en base a unes dades d'entrada realitza una estimació sobre el preu de renda dels diferents municipis a 5 anys vista. També s'ha fet servir Node.JS per implementar l'API que permet la comunicació entre la base de dades i la web. Finalment per realitzar les vistes de la web s'ha implementat mitjançant CSS, JavaScript i pug.
- Frameworks i llibreries: Com s'ha comentat abans, s'ha empleat Node.JS per realitzar l'API. Per la banda de llibreries, s'han empleat algunes com pandas, xgboost que també és el model que hem implementat, sklearn també per entrenar el model i extreure el MAE. Per la banda de la web, s'han utilitzat llibreries com Mongoose per integrarnos amb la base de dades. Per la visualització del mapa s'ha fet servir Leaflet.
- Eines i plataformes: S'ha fet servir l'API de OpenStreetView com a eina, per a representar la zona o zones corresponents en el mapa interactiu. Hem utilitzat una base de dades MongoDB Atlas, allotjada al cloud de AWS per desar les dades necessàries per ser processades posteriorment.

## Sistema Implementat
![imagen](https://github.com/user-attachments/assets/980af14d-5a5d-4937-8b63-dd297aea11b1)


## Impacte del projecte
Com s'ha comentat prèviament, el projecte pot beneficiar aquelles persones que tinguin un pressupost més just a l'hora de buscar una nova vivenda o amb criteris específics. Té un impacte bastant notable en la comarca del Tarragonès, ja que, per exemple Tarragona és un nucli urbà en constant desenvolupament i creixement i la demanda de vivenda augmenta.

## Captures i/o demo del projecte
(Posar enllaç)

## Agraïments i conclusió
(pendent)
