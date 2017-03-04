# Horaires RATP API
    
## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER, Metro, Tramway, Bus et Noctilien) en temps réel à un arrêt défini.

## REST

    Serveur API : https://api-ratp.pierre-grimaud.fr/v3

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérées via des clients HTTP (comme les navigateurs web).

## Code source

Le code source de cette API est disponible ici : [ratp-api-rest](https://github.com/pgrimaud/ratp-api-rest).

Ce projet utilise la librairie [horaires-ratp-sdk](https://github.com/pgrimaud/horaires-ratp-sdk) qui exploite les données de l'API RATP officielle.

## Documentation

La liste des ressources est disponible ici : 

    https://api-ratp.pierre-grimaud.fr/v3/documentation
    
# Format
   
De base, les données renvoyées sont disponibles au format JSON. Mais il est possible de les récupérer au format XML en ajoutant à chaque requête le paramètre **_format**.

*Exemple JSON :*

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B?_format=json
    
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

*Exemple XML:*

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B?_format=xml
    
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
    
# Exemples de requêtes

## Lignes

Exemple de requête pour récupérer toutes les lignes du métro [(lien vers la documentation)](https://api-ratp.pierre-grimaud.fr/v5/app_dev.php/documentation#get--lines-%7Btype}): 

    https://api-ratp.pierre-grimaud.fr/v3/metros
    
    {
        "result": {
            "metros": [
                {
                    "code": "1",
                    "name": "Métro 1",
                    "directions": "La Defense / Chateau de Vincennes"
                },
                {
                    "code": "2",
                    "name": "Métro 2",
                    "directions": "Porte Dauphine / Nation"
                },
                {
                    "code": "3",
                    "name": "Métro 3",
                    "directions": "Pont de Levallois - Becon / Gallieni"
                },
                {
                    "code": "3b",
                    "name": "Métro 3b",
                    "directions": "Gambetta / Porte des Lilas"
                },
                {
                    "code": "4",
                    "name": "Métro 4",
                    "directions": "Mairie de Montrouge / Porte de Clignancourt"
                },
                {
                    "code": "5",
                    "name": "Métro 5",
                    "directions": "Place d'Italie / Bobigny - Pablo Picasso"
                },
                {
                    "code": "6",
                    "name": "Métro 6",
                    "directions": "Charles de Gaulle - Etoile / Nation"
                },
                {
                    "code": "7",
                    "name": "Métro 7",
                    "directions": "Villejuif-L. Aragon / Mairie d'Ivry / la Courneuve - 8 Mai 1945"
                },
                {
                    "code": "7b",
                    "name": "Métro 7b",
                    "directions": "Louis Blanc / Pre-Saint-Gervais"
                },
                {
                    "code": "8",
                    "name": "Métro 8",
                    "directions": "Pointe du Lac / Balard"
                },
                {
                    "code": "9",
                    "name": "Métro 9",
                    "directions": "Mairie de Montreuil / Pont de Sevres"
                },
                {
                    "code": "10",
                    "name": "Métro 10",
                    "directions": "Gare d'Austerlitz / Boulogne - Pont de Saint Cloud"
                },
                {
                    "code": "11",
                    "name": "Métro 11",
                    "directions": "Chatelet / Mairie des Lilas"
                },
                {
                    "code": "12",
                    "name": "Métro 12",
                    "directions": "Front Populaire / Mairie d'Issy"
                },
                {
                    "code": "13",
                    "name": "Métro 13",
                    "directions": "St-Denis-Universite/Les Courtilles / Chatillon - Montrouge"
                },
                {
                    "code": "14",
                    "name": "Métro 14",
                    "directions": "Olympiades / Saint-Lazare"
                },
                {
                    "code": "Fun",
                    "name": "Métro Fun",
                    "directions": "Funiculaire"
                },
                {
                    "code": "Orv",
                    "name": "Métro Orv",
                    "directions": "Orly Sud / Antony-RER"
                }
            ]
        },
        "_metadata": {
            "call": "GET /lines/metros",
            "date": "2017-03-04T02:13:28+01:00",
            "version": 3
        }
    }