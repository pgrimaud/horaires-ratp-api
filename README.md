# Horaires RATP API ![Powered by appengine](https://raw.github.com/pgrimaud/horaires-ratp-api/master/img/appengine.gif)

### Changelog

	v1.0 - 20130512 - Création de l'API
	v1.1 - 20130910 - Ajout de la ligne 1 du métro
	v1.2 - 20130912 - Ajout de la ligne 2 du métro
	v1.3 - 20130913 - Ajout de la ligne 3, 3bis et 4 du métro
	v1.4 - 20130917 - Ajout de la ligne 5 du métro
	v1.5 - 20131025 - Ajout de la ligne 6, 7, 7bis, 8, 9, 10, 11, 12, 13, 14 du métro
	v1.6 - 20140110 - Ajout des requêtes sur le trafic
	
## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER/Metro) en temps réel à un arrêt défini.

## REST

    API server : http://api-ratp.pierre-grimaud.fr

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérés via des clients HTTP (comme les navigateurs web).

## Limitation

Le nombre de requêtes journalières est fixé à 1000 et il n'est possible de faire qu'une toutes les 15 secondes. Un sercice d'authentification pourrait être développé pour un accès total et illimité à l'API.

## Données

Les données sont disponible pour la ligne A et B du RER et pour certaines stations. (Lignes de Metro sont à venir dans une prochaine version)

## Requêtes data (RER et METRO)

Ces requêtes permettent de récupérer diverses informations d'une ligne de RER ou de METRO. Les paramètres doivent être **urlencoded**.

*Construction d'une requête*

    GET Host+ /data/ +Type+ / +Transport+ / +Ligne
    
    Host: api-ratp.pierre-grimaud.fr
    
    Type : destinations | stations
    Transport : rer | metro
    Ligne : a | b pour rer, 1 | 2 | 3 | 3b | 4 | 5 | 6 | 7 | 7b | 8 | 9 | 10 | 11 | 12 | 13 | 14 pour metro

*Example de requête data RER* 

    GET /data/destinations/rer/a HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Sun, 12 May 2013 16:59:24 GMT

*Fichier retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/data-rer.json)

    {"ligne":"b","destinations":[{"destination":"cdg+mitry"},{"destination":"robinson+st+remy"}]}
	
*Example de requête data METRO* 

    GET /data/destinations/metro/1 HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Tue, 10 Sep 2013 09:45:09 GMT

*Fichier retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/data-metro.json)

## Requêtes Horaires RER

Ces requêtes permettent de récupérer les horaires des 6 prochains trains d'une ligne. Les paramètres doivent être **urlencoded**.

*Construction d'une requête*

    GET Host+ / +Transport+ / +Ligne+ / +Station+ / +Destination
    
    Host: api-ratp.pierre-grimaud.fr
    
    Transport : rer
    Ligne : a | b
    Station : (Voir requête data station)
    Destination : (Voir requête data destination)

*Example de requête Horaire RER*

    GET rer/b/arcueil+cachan/cdg+mitry HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Sun, 12 May 2013 16:48:44 GMT

*Fichier retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/horaires-rer.json)

    {"destination": "Charles-de-Gaulle Mitry-Claye","ligne": "b","station": "arcueil cachan","horaires":[{"id": "EFLA","terminus": "Aeroport Ch.De Gaulle 2","horaire": "Train sans arr\u00eat"},{"id": "ICAR","terminus": "Mitry-Claye","horaire": "17:04"},{"id": "EKLI","terminus": "Aeroport Ch.De Gaulle 2", "horaire": "17:10"}, {"id": "EFLA", "terminus": "Aeroport Ch.De Gaulle 2", "horaire": "Train sans arr\u00eat"},{"id": "ICAR","terminus": "Mitry-Claye","horaire": "17:19"},{"id": "EKLI","terminus": "Aeroport Ch.De Gaulle 2","horaire": "17:25"}]}
  
## Requêtes Horaires METRO

Ces requêtes permettent de récupérer les temps d'attente des 4 prochains trains d'une ligne. Les paramètres doivent être **urlencoded**.

*Construction d'une requête*

    GET Host+ / +Transport+ / +Ligne+ / +Station+ / +Destination
    
    Host: api-ratp.pierre-grimaud.fr
    
    Transport : metro
    Ligne : 1 | 2 | 3 | 3b | 4 | 5 | 6 | 7 | 7b | 8 | 9 | 10 | 11 | 12 | 13 | 14
    Station : (Voir requête data station)
    Destination : (Voir requête data destination)

*Example de requête Horaire METRO*

    GET metro/1/hotel+de+Ville/chateau+de+vincennes HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Tue, 10 Sep 2013 09:50:20 GMT

*Fichier retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/horaires-metro.json)

    {"destination":"Ch\u00e2teau de Vincennes","ligne":"1","station":"hotel de Ville","horaires":[{"terminus":"Ch\u00e2teau de Vincennes","attente":"2 mn"},{"terminus":"Ch\u00e2teau de Vincennes","attente":"4 mn"},{"terminus":"Ch\u00e2teau de Vincennes","attente":"6 mn"},{"terminus":"Ch\u00e2teau de Vincennes","attente":"8 mn"}]}
	
## Requêtes Data Trafic

Ces requêtes permettent de récupérer le trafic du RER ou du metro.

*Construction d'une requête*

    GET date / trafic / +Transport
    
    Host: api-ratp.pierre-grimaud.fr
    
    Transport : metro | rer

*Example de requête Horaire METRO*

    GET data/trafic/rer HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Fri, 10 Jan 2014 21:50:20 GMT

*Fichier retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/data-trafic.json)

    {"trafic":"perturbation","perburbations":{"RER A":"Travaux de maintenance ce soir."}}
	
## Feedback

Pour un bug, une demande de suggestion, une nouvelle fonctionnalité, etc... [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) ou [Twitter](http://twitter.com/nilzenx)

## License

### Donneés

Toutes les donneés appartiennent à la RATP et sont utilisées dans un but non commercial.
