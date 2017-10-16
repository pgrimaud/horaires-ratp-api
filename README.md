# Horaires RATP API

## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER, Metro, Tramway, Bus et Noctilien) en temps réel à un arrêt défini.

## REST

    Serveur API : https://api-ratp.pierre-grimaud.fr/v3

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérées via des clients HTTP (comme les navigateurs web).

## Code source

Le code source de cette API est disponible ici : [ratp-api-rest](https://github.com/pgrimaud/ratp-api-rest).

Ce projet utilise la librairie [horaires-ratp-sdk](https://github.com/pgrimaud/horaires-ratp-sdk) qui exploite les données de l'API RATP officielle.

## Translations

This README file is also available in [english](https://github.com/pgrimaud/horaires-ratp-api/blob/master/README-EN.md).

## Documentation

La liste des ressources est disponible ici : 

    https://api-ratp.pierre-grimaud.fr/v3/documentation

## Bugs

Les horaires des RER C, D et E ne fonctionnent pas et sont renvoyés avec l'erreur suivante : 
```
Les informations horaires ne sont pas disponibles pour le moment. Veuillez nous excuser pour la gêne occasionnée.
```

## Exemples

Quelques exemples sont disponibles ici :

- [Lignes](#lignes)
- [Stations](#stations)
- [Destinations](#destinations)
- [Horaires](#horaires)
- [Trafic](#trafic)

# Format
   
De base, les données renvoyées sont disponibles au format JSON. Mais il est possible de les récupérer au format XML en ajoutant à chaque requête le paramètre **_format**.

*Exemple JSON :*

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B?_format=json

```json
{
    "result": {
        "stations": [
            {
                "slug": "porte+des+lilas",
                "name": "Porte des Lilas"
            },
            {
                "slug": "saint+fargeau",
                "name": "Saint-Fargeau"
            },
            {
                "slug": "pelleport",
                "name": "Pelleport"
            },
            {
                "slug": "gambetta",
                "name": "Gambetta"
            }
        ]
    },
    "_metadata": {
        "call": "GET /stations/metros/3B",
        "date": "2017-03-04T02:02:32+01:00",
        "version": 3
    }
}
```

*Exemple XML:*

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B?_format=xml
    
```xml    
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <result>
    <stations>
      <entry>
        <slug><![CDATA[porte+des+lilas]]></slug>
        <name><![CDATA[Porte des Lilas]]></name>
      </entry>
      <entry>
        <slug><![CDATA[saint+fargeau]]></slug>
        <name><![CDATA[Saint-Fargeau]]></name>
      </entry>
      <entry>
        <slug><![CDATA[pelleport]]></slug>
        <name><![CDATA[Pelleport]]></name>
      </entry>
      <entry>
        <slug><![CDATA[gambetta]]></slug>
        <name><![CDATA[Gambetta]]></name>
      </entry>
    </stations>
  </result>
  <_metadata>
    <call><![CDATA[GET /stations/metros/3B]]></call>
    <date><![CDATA[2017-03-04T02:04:33+01:00]]></date>
    <version>3</version>
  </_metadata>
</response>
```

# Exemples de requêtes

## Lignes

Exemple de requête pour récupérer toutes les lignes du métro [(lien vers la documentation)](https://api-ratp.pierre-grimaud.fr/v3/documentation#section-Lines): 

    GET https://api-ratp.pierre-grimaud.fr/v3/lines/metros

```json

{
    "result": {
        "metros": [
            {
                "code": "1",
                "name": "Métro 1",
                "directions": "La Defense / Chateau de Vincennes",
                "id": "62"
            },
            {
                "code": "2",
                "name": "Métro 2",
                "directions": "Porte Dauphine / Nation",
                "id": "67"
            },
            {
                "code": "3",
                "name": "Métro 3",
                "directions": "Pont de Levallois - Becon / Gallieni",
                "id": "68"
            },
            {
                "code": "3b",
                "name": "Métro 3b",
                "directions": "Gambetta / Porte des Lilas",
                "id": "69"
            },
            {
                "code": "4",
                "name": "Métro 4",
                "directions": "Mairie de Montrouge / Porte de Clignancourt",
                "id": "70"
            },
            {
                "code": "5",
                "name": "Métro 5",
                "directions": "Place d'Italie / Bobigny - Pablo Picasso",
                "id": "71"
            },
            {
                "code": "6",
                "name": "Métro 6",
                "directions": "Charles de Gaulle - Etoile / Nation",
                "id": "72"
            },
            {
                "code": "7",
                "name": "Métro 7",
                "directions": "Villejuif-L. Aragon / Mairie d'Ivry / la Courneuve - 8 Mai 1945",
                "id": "73"
            },
            {
                "code": "7b",
                "name": "Métro 7b",
                "directions": "Louis Blanc / Pre-Saint-Gervais",
                "id": "74"
            },
            {
                "code": "8",
                "name": "Métro 8",
                "directions": "Pointe du Lac / Balard",
                "id": "172562"
            },
            {
                "code": "9",
                "name": "Métro 9",
                "directions": "Mairie de Montreuil / Pont de Sevres",
                "id": "76"
            },
            {
                "code": "10",
                "name": "Métro 10",
                "directions": "Gare d'Austerlitz / Boulogne - Pont de Saint Cloud",
                "id": "63"
            },
            {
                "code": "11",
                "name": "Métro 11",
                "directions": "Chatelet / Mairie des Lilas",
                "id": "64"
            },
            {
                "code": "12",
                "name": "Métro 12",
                "directions": "Front Populaire / Mairie d'Issy",
                "id": "65"
            },
            {
                "code": "13",
                "name": "Métro 13",
                "directions": "St-Denis-Universite/Les Courtilles / Chatillon - Montrouge",
                "id": "66"
            },
            {
                "code": "14",
                "name": "Métro 14",
                "directions": "Olympiades / Saint-Lazare",
                "id": "55098"
            },
            {
                "code": "Fun",
                "name": "Métro Fun",
                "directions": "Funiculaire",
                "id": "79"
            },
            {
                "code": "Orv",
                "name": "Métro Orv",
                "directions": "Orly Sud / Antony-RER",
                "id": "455"
            }
        ]
    },
    "_metadata": {
        "call": "GET /lines/metros",
        "date": "2017-03-17T11:12:02+01:00",
        "version": 3
    }
}
```


## Stations

Exemple de requête pour récupérer toutes les stations de la ligne 3B du métro [(lien vers la documentation)](https://api-ratp.pierre-grimaud.fr/v3/documentation#section-Stations): 

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B

```json
{
    "result": {
        "stations": [
            {
                "slug": "porte+des+lilas",
                "name": "Porte des Lilas"
            },
            {
                "slug": "saint+fargeau",
                "name": "Saint-Fargeau"
            },
            {
                "slug": "pelleport",
                "name": "Pelleport"
            },
            {
                "slug": "gambetta",
                "name": "Gambetta"
            }
        ]
    },
    "_metadata": {
        "call": "GET /stations/metros/3B",
        "date": "2017-03-04T02:30:09+01:00",
        "version": 3
    }
}
```

## Destinations

Exemple de requête pour récupérer toutes les destinations de la ligne 8 du métro [(lien vers la documentation)](https://api-ratp.pierre-grimaud.fr/v3/documentation#section-Destinations): 

    GET https://api-ratp.pierre-grimaud.fr/v3/destinations/metros/8
    
```json
{
    "result": {
        "destinations": [
            {
                "name": "Pointe du Lac",
                "way": "A"
            },
            {
                "name": "Balard",
                "way": "R"
            }
        ]
    },
    "_metadata": {
        "call": "GET /destinations/metros/8",
        "date": "2017-03-04T02:36:42+01:00",
        "version": 3
    }
}
```
    
## Horaires

Exemple de requête pour récupérer les horaires des prochains bus de la ligne N01 en direction de gare de l'est à la station République [(lien vers la documentation)](https://api-ratp.pierre-grimaud.fr/v3/documentation#section-Schedules): 

    GET https://api-ratp.pierre-grimaud.fr/v3/schedules/noctiliens/01/republique/R

```json
{
    "result": {
        "schedules": [
            {
                "message": "4 mn",
                "destination": "Gare de l'Est"
            },
            {
                "message": "5 mn",
                "destination": "Gare de l'Est"
            }
        ]
    },
    "_metadata": {
        "call": "GET /schedules/noctiliens/01/republique/R",
        "date": "2017-03-04T02:49:26+01:00",
        "version": 3
    }
}
```
    
## Trafic

Exemple de requête pour récupérer tout le trafic du réseau RATP [(lien vers la documentation)](https://api-ratp.pierre-grimaud.fr/v3/documentation#section-Traffic): 

    GET https://api-ratp.pierre-grimaud.fr/v3/traffic

```json
{
    "result": {
        "metros": [
            {
                "line": "1",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "2",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "3",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "3B",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "4",
                "slug": "normal_trav",
                "title": "Travaux",
                "message": "22:00, l'arrêt ne sera pas marqué à Alesia jusqu'au 05/03/17 fin de service. (travaux)"
            },
            {
                "line": "5",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "6",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "7",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "7B",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "8",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "9",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "10",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "11",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "12",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "13",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "14",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            }
        ],
        "rers": [
            {
                "line": "A",
                "slug": "normal_trav",
                "title": "Travaux",
                "message": "Sam. sf Jours Fér. le trafic sera interrompu entre Nanterre-Prefecture et Cergy/ Poissy jusqu'au 04/03/17. Bus de remplacement à dispo. (travaux)"
            },
            {
                "line": "B",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "C",
                "slug": "normal_trav",
                "title": "Travaux",
                "message": "À partir du lundi 23 janvier 2017 à 03h00, en raison de travaux, l'arrêt n'est pas marqué à la gare Dourdan-la-Foret sur la ligne C du RER jusqu'au vendredi 21 avril 2017 fin de service. Des bus de remplacement sont mis à disposition."
            },
            {
                "line": "D",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "E",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            }
        ],
        "tramways": [
            {
                "line": "1",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "2",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "3A",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "3B",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "5",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "6",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "7",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            },
            {
                "line": "8",
                "slug": "normal",
                "title": "Trafic normal",
                "message": "Trafic normal sur l'ensemble de la ligne."
            }
        ]
    },
    "_metadata": {
        "call": "GET /traffic",
        "date": "2017-03-04T02:42:00+01:00",
        "version": 3
    }
}
```

# Feedback

Pour un bug, une demande de suggestion, une nouvelle fonctionnalité, etc... [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) ou contactez moi sur [Twitter](https://twitter.com/pgrimaud_)

# Information importante (2017-06-16)
### À la demande des ayants droits, l'API v2 n'est plus disponible. Je vous invite donc à migrer vers la v3 dès que possible. Désolé pour les inconvénients.

# License

Toutes les données appartiennent à la RATP et sont utilisées dans un **but strictement personnel** ou de **recherche** et non dans un but commercial.