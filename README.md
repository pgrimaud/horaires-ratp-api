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
 [Informations lignes](#requêtes-lignes) | Récupération les données relatives aux Rers, Métros et Tramways. (nom et destinations)

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

## Informations lignes


Ces requêtes permettent de récupérer les données relatives aux Rers, Métros et Tramways. (nom et destinations)

	/{TypeLigne}
	
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
	
## Feedback

Pour un bug, une demande de suggestion, une nouvelle fonctionnalité, etc... [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) ou [Twitter](http://twitter.com/nilzenx)

## License

### Donneés

Toutes les donneés appartiennent à la RATP et sont utilisées dans un but de recherche et non dans un but commercial.
