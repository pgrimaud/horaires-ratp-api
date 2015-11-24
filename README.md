# Horaires RATP API ![Powered by appengine](https://raw.github.com/pgrimaud/horaires-ratp-api/master/img/appengine.gif)

### Changelog

	v2.0 - 20151124 - Refonte de l'API
	
## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER, Metro et Tramway) en temps réel à un arrêt défini.

## REST

    API server : http://api-ratp.pierre-grimaud.fr/v2

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérées via des clients HTTP (comme les navigateurs web).

## Limitation
**Nouveauté** : Le nombre de requêtes journalières n'est plus limité. Cependant, un cache serveur de 15 secondes a été mis en place.

## Données

Type de données |  Description
--- | ---
 [Lignes](#lignes) | Récupération les données relatives aux Rers, Métros et Tramways. (nom et destinations)
 [Stations](#stations) | Récupération les stations d'une ligne de Rer, Métro ou Tramway.
 
## Format

De base, les données renvoyées sont disponibles au format JSON. Mais il est possible de les récupérer au format XML en ajoutant à chaque requête le paramètre **format**.


*Exemple JSON :*

	GET http://api-ratp.pierre-grimaud.fr/v2/?format=json
	
	{
    	"response": {
     	   "code": "400",
        	"message": "Bad Request"
    	},
    	"_meta": {
       		"version": "2",
       		"date": "2015-11-24T23:30:00+01:00",
        	"call": "GET /"
    	}
	}

*Exemple XML:*

	GET http://api-ratp.pierre-grimaud.fr/v2/?format=xml
	
	<result>
		<request>
			<version>2</version>
			<date>2015-11-24T23:30:58+01:00</date>
			<call>GET /</call>
		</request>
		<response>
			<error>
				<code>400</code>
				<message>Bad Request</message>
			</error>
		</response>
	</result>

---

#Données

## Lignes


Ces requêtes permettent de récupérer les données relatives aux Rers, Métros et Tramways. (nom et destinations)

	http://api-ratp.pierre-grimaud.fr/v2/{TypeLigne}
	
Paramètre | Valeur possible | Description
--- | --- | ---
**TypeLigne** | **rers**, **metros** ou **tramways** | Le type de ligne dont vous souhaitez avoir les informations.

*Exemple :*

	GET http://api-ratp.pierre-grimaud.fr/v2/rers
	{
    	"response": {
        	"rers": [
            	{
                	"line": "A",
                	"destinations": [
                    	{
                        	"id": "1",
                        	"name": "St-Germain-en-Laye Poissy-Cergy",
                        	"slug": "st+germain+en+laye+poissy+cergy"
                    	},
                    	{
                        	"id": "2",
                        	"name": "Boissy-St-Léger Marne-la-Vallée",
                        	"slug": "boissy+st+leger+marne+la+vallee"
                    	}
                	]
            	},
            	{
                	"line": "B",
                	"destinations": [
                    	{
                        	"id": "3",
                        	"name": "Robinson Saint-Rémy-lès-Chevreuse",
                        	"slug": "robinson+saint+remy+les+chevreuse"
                    	},
                    	{
                        	"id": "4",
                        	"name": "Charles-de-Gaulle Mitry-Claye",
                        	"slug": "charles+de+gaulle+mitry+claye"
                    	}
                	]
            	}
        	]
    	},
    	"_meta": {
        	"version": "2",
        	"date": "2015-11-24T23:36:21+01:00",
        	"call": "GET /rers"
    	}
	}
	
## Stations

Ces requêtes permettent de récupérer les stations d'une ligne de Rer, Métro ou Tramway.

	http://api-ratp.pierre-grimaud.fr/v2/{TypeLigne}/{LigneId}/stations
	
Paramètre | Valeur possible | Description
--- | --- | ---
**TypeLigne** | **rers**, **metros** ou **tramways** | Le type de ligne dont vous souhaitez avoir les informations.
**LigneId** | Valeur **line** d'une requête [Informations lignes](#informations-lignes) | Le nom de la ligne du type de ligne spécifié.

*Exemple :*

	GET http://api-ratp.pierre-grimaud.fr/v2/metros/3B/stations
	
	{
        "response": {
            "stations": [
                {
                    "id": "118",
                    "name": "Gambetta",
                    "slug": "gambetta"
                },
                {
                    "id": "119",
                    "name": "Pelleport",
                    "slug": "pelleport"
                },
                {
                    "id": "120",
                    "name": "Porte des Lilas",
                    "slug": "porte+des+lilas"
                },
                {
                    "id": "121",
                    "name": "Saint-Fargeau",
                    "slug": "saint+fargeau"
                }
            ]
        },
        "_meta": {
            "version": "2",
            "date": "2015-11-25T00:14:45+01:00",
            "call": "GET /metros/3B"
        }
    }



---
	
## Feedback

Pour un bug, une demande de suggestion, une nouvelle fonctionnalité, etc... [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) ou [Twitter](http://twitter.com/nilzenx)

## License

### Donneés

Toutes les donneés appartiennent à la RATP et sont utilisées dans un but de recherche et non dans un but commercial.
