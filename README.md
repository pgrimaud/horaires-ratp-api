# Horaires RATP API

### Changelog

    v1.0 - 20130512 - Création de l'API

## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER/Metro) en temps réel à un arrêt défini.

## REST

    API server : http://api-ratp.pierre-grimaud.fr

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérés via des clients HTTP (comme les navigateurs web).

## Limitation

Le nombre de requêtes journalières est fixé à 1000 et il n'est possible de faire qu'une toutes les 15 secondes. Un sercice d'authentification pourrait être développé pour un accès total et illimité à l'API.

## Données

Les données sont disponible pour la ligne A et B du RER et pour certaines stations. (Lignes de Metro sont à venir dans une prochaine version)

## Requêtes data

Ces requêtes permettent de récupérer diverses informations d'une ligne. Les paramètres doivent être **urlencoded**.

*Construction d'une requête*

    GET Host+ /data/ +Type+ / +Transport+ / +Ligne
    
    Host: api-ratp.pierre-grimaud.fr
    
    Type : destinations | stations
    Transport : rer
    Ligne : a | b

*Example de requête data* 

    GET /data/destinations/rer/a HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Sun, 12 Mai 2013 16:59:24 GMT

*Fichier retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/data.json)

    {"ligne":"b","destinations":[{"destination":"cdg+mitry"},{"destination":"robinson+st+remy"}]}
    
## Requêtes Horaires

Ces requêtes permettent de récupérer les horaires des 6 prochains trains d'une ligne. Les paramètres doivent être **urlencoded**.

*Construction d'une requête*

    GET Host+ / +Transport+ / +Ligne+ / +Station+ / +Destination
    
    Host: api-ratp.pierre-grimaud.fr
    
    Transport : rer
    Ligne : a | b
    Station : (Voir requête data station)
    Destination : (Voir requête data destination)

*Example de requête Horaire*

    GET rer/b/arcueil+cachan/cdg+mitry HTTP/1.1
    
    Host: api-ratp.pierre-grimaud.fr
    Date: Sun, 12 Mai 2013 16:59:24 GMT

*Fichié retourné* [Lien](https://github.com/pgrimaud/horaires-ratp-api/blob/master/exemples/horaires.json)

    {"destination": "Charles-de-Gaulle Mitry-Claye","ligne":"b","station":"arcueil cachan","horaires":[{"id":"EKLI","terminus":"Aeroport Ch.De Gaulle 2","horaire":"Train \u00e0 quai"},{"id":"EFLA","terminus":"Aeroport Ch.De Gaulle 2","horaire":"Train sans arr\u00eat"},{"id":"ICAR","terminus":"Mitry-Claye","horaire":"17:18"},{"id":"EKLI","terminus":"Aeroport Ch.De Gaulle 2","horaire":"17:25"},{"id":"EFOC","terminus":"Aeroport Ch.De Gaulle 2","horaire":"Train sans arr\u00eat"},{"id":"ICRE","terminus":"Mitry-Claye","horaire":"17:34"}]}
    
## Feedback

Pour un bug, une demande de suggestion, une nouvelle fonctionnalité, etc... [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) ou [Twitter](http://twitter.com/nilzenx)

## License

### Donneés

Toutes les donneés appartiennent à la RATP et sont utilisées dans un but non commercial.
