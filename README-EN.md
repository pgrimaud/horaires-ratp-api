# Horaires RATP API

## Introduction 

This API gives you real time schedules for any given RER (train), Metro, Tramway, Bus or Noctilien stop in real time on the RATP network.

## REST

    API Server : https://api-ratp.pierre-grimaud.fr/v4/

This API is RESTful. Data are exposed as URIs which can be retrieved with HTTP clients (such as web browsers).

## Source code

Source code of this API is available here : [ratp-api-rest](https://github.com/pgrimaud/ratp-api-rest).

This project uses the package [horaires-ratp-sdk](https://github.com/pgrimaud/horaires-ratp-sdk) which consume the official RATP API.

## Traductions

Ce README est aussi disponible en [français](https://github.com/pgrimaud/horaires-ratp-api/blob/master/README.md).

## Documentation

API documentation is available here : 

    https://api-ratp.pierre-grimaud.fr/v4/

## Bugs

Schedules of RER C, D et E don't work properly and return this error : 
```
Time information is not available at this time.
```

# Format

Basically, the data returned are available in JSON format. It's possible to get it as XML format by adding a header `Accept: application/xml` parameter in request.

JSON example : 
```
curl -X GET "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/3b"
```

XML example : 
```
curl -X GET "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/3b" -H "Accept: application/xml"
```

## Examples

Some examples are available here :

- [Lines](#lines)
- [Stations](#stations)
- [Destinations](#destinations)
- [Schedules](#schedules)
- [Traffic](#traffic)

*JSON Example :*

    GET https://api-ratp.pierre-grimaud.fr/v4/stations/metros/3b

```json
{
    "result": {
        "stations": [
            {
                "name": "Porte des Lilas",
                "slug": "porte+des+lilas"
            },
            {
                "name": "Saint-Fargeau",
                "slug": "saint+fargeau"
            },
            {
                "name": "Pelleport",
                "slug": "pelleport"
            },
            {
                "name": "Gambetta",
                "slug": "gambetta"
            }
        ]
    },
    "_metadata": {
        "call": "GET /stations/metros/3b",
        "date": "2019-06-02T20:07:24+02:00",
        "version": 4
    }
}
```

*XML Example:*

    GET https://api-ratp.pierre-grimaud.fr/v4/stations/metros/3b

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
<result>
  <stations>
    <entry>
      <name><![CDATA[Porte des Lilas]]></name>
      <slug><![CDATA[porte+des+lilas]]></slug>
    </entry>
    <entry>
      <name><![CDATA[Saint-Fargeau]]></name>
      <slug><![CDATA[saint+fargeau]]></slug>
    </entry>
    <entry>
      <name><![CDATA[Pelleport]]></name>
      <slug><![CDATA[pelleport]]></slug>
    </entry>
    <entry>
      <name><![CDATA[Gambetta]]></name>
      <slug><![CDATA[gambetta]]></slug>
    </entry>
  </stations>
</result>
<_metadata>
  <call><![CDATA[GET /stations/metros/3b]]></call>
  <date><![CDATA[2019-06-02T20:14:41+02:00]]></date>
  <version>4</version>
</_metadata>
</response>
```

# Requests examples

## Lines

Example of request to retrieve all metro lines : 

    GET https://api-ratp.pierre-grimaud.fr/v4/lines/metros
    
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
        "directions": "Pointe du Lac / Balar",
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
        "directions": "Orly 4 / Antony-RER",
        "id": "455"
      }
    ]
  },
  "_metadata": {
    "call": "GET /lines/metros",
    "date": "2019-06-02T20:15:55+02:00",
    "version": 4
  }
}
```

## Stations

Example of request to retrieve all stations of the metro line 3b : 

    GET https://api-ratp.pierre-grimaud.fr/v4/stations/metros/3b

```json
{
    "result": {
        "stations": [
            {
                "name": "Porte des Lilas",
                "slug": "porte+des+lilas"
            },
            {
                "name": "Saint-Fargeau",
                "slug": "saint+fargeau"
            },
            {
                "name": "Pelleport",
                "slug": "pelleport"
            },
            {
                "name": "Gambetta",
                "slug": "gambetta"
            }
        ]
    },
    "_metadata": {
        "call": "GET /stations/metros/3b",
        "date": "2019-06-02T20:07:24+02:00",
        "version": 4
    }
}
```

## Destinations

Example of request to retrieve all destinations of the metro line 8 : 

    GET https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/8

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
    "date": "2019-06-02T20:16:52+02:00",
    "version": 4
  }
}
```

## Schedules

Example of request to retrieve next schedules of the metro line 8 at the station Daumesnil on the direction of Balard : 

    GET https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/8/daumesnil/R

```json
{
  "result": {
    "schedules": [
      {
        "message": "1 mn",
        "destination": "Balard"
      },
      {
        "message": "8 mn",
        "destination": "Balard"
      },
      {
        "message": "13 mn",
        "destination": "Balard"
      },
      {
        "message": "19 mn",
        "destination": "Balard"
      }
    ]
  },
  "_metadata": {
    "call": "GET /schedules/metros/8/daumesnil/R",
    "date": "2019-06-02T20:17:39+02:00",
    "version": 4
  }
}
```

## Traffic

Example of request to retrieve all traffic on RATP network : 

    GET https://api-ratp.pierre-grimaud.fr/v4/traffic

```json
{
  "result": {
    "metros": [
      {
        "line": "1",
        "slug": "alerte",
        "title": "Trafic perturbé",
        "message": "02/06/19, 09:02, la station George V est fermée (mesure de sécurité)"
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
        "line": "3b",
        "slug": "normal",
        "title": "Trafic normal",
        "message": "Trafic normal sur l'ensemble de la ligne."
      },
      {
        "line": "4",
        "slug": "normal_trav",
        "title": "Travaux",
        "message": "Dim. le trafic est interrompu sur la ligne de 05:20 à 10:00 jusqu'au 28/07/19. (travaux)"
      },
      {
        "line": "5",
        "slug": "normal_trav",
        "title": "Travaux",
        "message": "Ts les jours la station Breguet-Sabin est fermée jusqu'au 30/06/19. (travaux)"
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
        "slug": "normal_trav",
        "title": "Travaux",
        "message": "Ts les jours l'arrêt n'est pas marqué à Chatelet jusqu'au 16/12/19. (travaux)"
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
        "slug": "normal",
        "title": "Trafic normal",
        "message": "Trafic normal sur l'ensemble de la ligne."
      },
      {
        "line": "B",
        "slug": "normal",
        "title": "Trafic normal",
        "message": "Trafic normal sur l'ensemble de la ligne."
      },
      {
        "line": "C",
        "slug": "normal",
        "title": "Trafic normal",
        "message": "Trafic normal sur l'ensemble de la ligne."
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
        "line": "3b",
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
    "date": "2019-06-02T20:18:18+02:00",
    "version": 4
  }
}
```

# Feedback

You can [create an issue](https://github.com/pgrimaud/horaires-ratp-api/issues) if needed or contact me on [Twitter](https://twitter.com/pgrimaud_).

# License

Licensed under the terms of the MIT License.
