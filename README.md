# Horaires RATP API ![Powered by appengine](https://cloud.google.com/appengine/images/appengine-noborder-120x30.gif?csw=1)

### Changelog

	v2.0.0 - 20151127 - Refonte de l'API
	v2.1.0 - 20160222 - Ajout des horaires des bus
	v2.1.1 - 20160404 - Clarification des variables "id"
	v2.2.0 - 20160421 - Ajout d'une station d'arrivée pour le RER
	v2.2.1 - 20160422 - Correctif lié à la gare d'arrivée
	v2.3.0 - 20160607 - Ajout des horaires des noctiliens
	v2.4.0 - 20160815 - Ajout d'un callback pour les requêtes JSONP
	v2.5.0 - 20161022 - Passage en HTTPS
	
## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER, Metro, Tramway, Bus et Noctilien) en temps réel à un arrêt défini.

## REST

    API server : https://api-ratp.pierre-grimaud.fr/v2

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérées via des clients HTTP (comme les navigateurs web).

## Limitation
**Nouveauté** : Le nombre de requêtes journalières n'est plus limité. Cependant, un cache serveur de 15 secondes a été mis en place.

## Données

Type de données |  Description
--- | ---
 [Lignes](#lignes) | Récupération des données relatives aux Rers, Métros, Tramways, Bus et Noctilien. (nom et destinations)
 [Stations](#stations) | Récupération des stations d'une ligne de Rer, Métro, Tramway, Bus et Noctilien.
 [Horaires](#horaires) | Récupération des horaires en temps réel d'une station de Rer, Métro, Tramway, Bus ou Noctilien.
 [Trafic](#trafic) | Récupération des données de trafic sur l'ensemble du réseau ferré RATP. 
 
 
N.B. : les ressources ``destinations`` sont indépendantes des ressources ``stations``. Par conséquent elles n'ont pas le même ``id``, même si elles partagent la valeur ``name`` ou ``slug``. 
 
## Format

De base, les données renvoyées sont disponibles au format JSON. Mais il est possible de les récupérer au format XML en ajoutant à chaque requête le paramètre **format**.


*Exemple JSON :*

	GET https://api-ratp.pierre-grimaud.fr/v2/?format=json
	
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

	GET https://api-ratp.pierre-grimaud.fr/v2/?format=xml
	
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
	
*Exemple JSONP:*

	GET https://api-ratp.pierre-grimaud.fr/v2/?callback=myCallBack
	
	myCallBack({"response": {"code": "400","message": "Bad Request"},"_meta": {"version": "2","date": "2015-11-24T23:30:00+01:00","call": "GET /"}})

#Données

## Lignes


Ces requêtes permettent de récupérer les données relatives aux Rers, Métros, Tramways, Bus ou Noctilien. (nom et destinations)

	https://api-ratp.pierre-grimaud.fr/v2/{TypeLigne}
	
Paramètre | Valeur possible | Description
--- | --- | ---
**TypeLigne** | **rers**, **metros**, **tramways**, **bus**, **noctiliens** | Le type de transport dont vous souhaitez avoir les informations.

*Exemple :*

	GET https://api-ratp.pierre-grimaud.fr/v2/rers
	{
    	"response": {
        	"rers": [
            	{
                	"line": "A",
                	"destinations": [
                    	{
                        	"id_destination": "1",
                        	"name": "St-Germain-en-Laye Poissy-Cergy",
                        	"slug": "st+germain+en+laye+poissy+cergy"
                    	},
                    	{
                        	"id_destination": "2",
                        	"name": "Boissy-St-Léger Marne-la-Vallée",
                        	"slug": "boissy+st+leger+marne+la+vallee"
                    	}
                	]
            	},
            	{
                	"line": "B",
                	"destinations": [
                    	{
                        	"id_destination": "3",
                        	"name": "Robinson Saint-Rémy-lès-Chevreuse",
                        	"slug": "robinson+saint+remy+les+chevreuse"
                    	},
                    	{
                        	"id"_destination: "4",
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

Ces requêtes permettent de récupérer les stations d'une ligne de Rer, Métro, Tramway, Bus ou Noctilien.

	https://api-ratp.pierre-grimaud.fr/v2/{TypeLigne}/{LigneId}/stations
	
Paramètre | Valeur possible | Description
--- | --- | ---
**TypeLigne** | **rers**, **metros**, **tramways**, **bus** ou **noctiliens** | Le type de transport dont vous souhaitez avoir les informations.
**LigneId** | Valeur **line** d'une requête [lignes](#lignes) | Le nom de la ligne du type de transport spécifié.

*Exemple :*

	GET https://api-ratp.pierre-grimaud.fr/v2/metros/3B/stations
	
	{
        "response": {
            "stations": [
                {
                    "id_station": "118",
                    "name": "Gambetta",
                    "slug": "gambetta"
                },
                {
                    "id_station": "119",
                    "name": "Pelleport",
                    "slug": "pelleport"
                },
                {
                    "id_station": "120",
                    "name": "Porte des Lilas",
                    "slug": "porte+des+lilas"
                },
                {
                    "id_station": "121",
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


## Horaires

Ces requêtes permettent de récupérer les temps d'attente des prochains trains d'une ligne de Rer, Métro, Tramway, Bus ou Noctilien en fonction de la destination et de la station.

	https://api-ratp.pierre-grimaud.fr/v2/{TypeLigne}/{LigneId}/stations/{StationId}?destination={DestinationId}
	
Paramètre | Valeur possible | Description
--- | --- | ---
**TypeLigne** | **rers**, **metros**, **tramways**, **bus** ou **noctilien** | Le type de transport dont vous souhaitez avoir les informations.
**LigneId** | Valeur **line** d'une requête [lignes](#lignes). | Le nom de la ligne du type de transport spécifié.
**StationId** | Valeur **id** ou **slug** d'une requête [stations](#stations). | L'id ou l'indicatif de la station désirée.
**DestinationId** | Valeur **id** ou **slug** d'une requête [lignes](#lignes). | L'id ou l'indicatif de la destination désirée.

*Exemple :*

	GET https://api-ratp.pierre-grimaud.fr/v2/metros/8/stations/daumesnil?destination=balard
    ou
    GET https://api-ratp.pierre-grimaud.fr/v2/metros/8/stations/275?destination=23
    
    {
        "response": {
            "informations": {
                "destination": {
                    "id_destination": "23",
                    "name": "Balard",
                    "slug": "balard"
                },
                "line": "8",
                "type": "metro",
                "station": {
                    "id_station": "275",
                    "name": "Daumesnil",
                    "slug": "daumesnil"
                }
            },
            "schedules": [
                {
                    "destination": "Balard",
                    "message": "5 mn"
                },
                {
                    "destination": "Balard",
                    "message": "14 mn"
                },
                {
                    "destination": "Balard",
                    "message": "24 mn"
                },
                {
                    "destination": "Balard",
                    "message": "32 mn"
                }
            ]
        },
        "_meta": {
            "version": "2",
            "date": "2015-11-25T23:30:52+01:00",
            "call": "GET /metros/8/stations/275?destination=23"
        }
    }

#### Nouveauté v2.2 : Gare d'arrivée, uniquement pour les RER (BETA)

	https://api-ratp.pierre-grimaud.fr/v2/{TypeLigne}/{LigneId}/stations/{StationId}?destination={DestinationId}&endingstation={EndingStationId}

En plus des paramètres [précédents](#horaires), il est possible de spécifier le paramètre suivant :

Paramètre | Valeur possible | Description
--- | --- | ---
**EndingStationId** | Valeur **id** ou **slug** d'une requête [stations](#stations). | L'id ou l'indicatif de la station désirée.

*Exemple :*
    
    GET https://api-ratp.pierre-grimaud.fr/v2/rers/B/stations/denfert+rochereau?destination=robinson+saint+remy+les+chevreuse&endingstation=arcueil+cachan
    ou
    GET https://api-ratp.pierre-grimaud.fr/v2/rers/B/stations/44?destination=3&endingstation=1
    
    {
        "response": {
            "informations": {
                "destination": {
                    "id": "3",
                    "name": "Robinson Saint-Rémy-lès-Chevreuse",
                    "slug": "robinson+saint+remy+les+chevreuse"
                },
                "line": "B",
                "type": "rer",
                "station": {
                    "id": "44",
                    "name": "Denfert Rochereau",
                    "slug": "denfert+rochereau"
                },
                "endingstation": {
                    "id": "1",
                    "name": "Arcueil Cachan",
                    "slug": "arcueil+cachan"
                }
            },
            "schedules": [
                {
                    "id": "KFTE",
                    "destination": "Massy Palaiseau",
                    "message": "Train à l'approche"
                },
                {
                    "id": "SOLE",
                    "destination": "Robinson",
                    "message": "01:03"
                }
            ]
        },
        "_meta": {
            "version": "2",
            "date": "2016-04-21T00:48:44+02:00",
            "call": "GET /rers/B/stations/denfert+rochereau?destination=robinson+saint+remy+les+chevreuse&endingstation=arcueil+cachan"
        }
    }

## Trafic

Ces requêtes permettent de récupérer le trafic du réseau ferré RATP. Il est possible d'affiner la recherche en fonction du type de transport ou de la ligne.

	https://api-ratp.pierre-grimaud.fr/v2/traffic/({TypeLigne}/{LigneId})
	
Paramètre | Utilisation | Valeur possible | Description
--- | --- | --- | ---
**TypeLigne** | (optionnel, requis si **LigneId** est spécifié) | **rers**, **metros** ou **tramways**. | Le type de transport dont vous souhaitez avoir les informations.
**LigneId** | (optionnel)  | Valeur **line** d'une requête [lignes](#lignes). | Le nom de la ligne du type de transport spécifié.


*Exemple :*

	GET https://api-ratp.pierre-grimaud.fr/v2/traffic/metros/1
	
	{
        "response": {
            "metros": [
                {
                    "line": "1",
                    "slug": "normal_trav",
                    "title": "Travaux",
                    "message": "Ts les jours l'arrêt n'est pas marqué à Louvre-Rivoli jusqu'au 25/11/15. (travaux de rénovation)"
                }
            ]
        },
        "_meta": {
            "version": "2",
            "date": "2015-11-25T00:42:19+01:00",
            "call": "GET /traffic/metros/1"
        }
    }

---	

## Feedback

Pour un bug, une demande de suggestion, une nouvelle fonctionnalité, etc... [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) ou [Twitter](https://twitter.com/pgrimaud_)


## License

Toutes les données appartiennent à la RATP et sont utilisées dans un **but strictement personnel** ou de **recherche** et non dans un but commercial.
