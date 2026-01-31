# DevOps Express App

Prosta aplikacja webowa Node.js/Express stworzona na potrzeby projektu z przedmiotu "Cykl życia i narzędzia DevOps". 

## Opis projektu

Aplikacja oferuje dwa podstawowe endpointy:
- `GET /` - endpoint główny zwracający status API
- `GET /products` - endpoint zwracający listę produktów w formacie JSON


## Wymagania

- Node.js w wersji 18 lub wyższej
- npm (Node Package Manager)
- Git

## Instalacja i uruchomienie lokalnie

1. Sklonuj repozytorium

2. Zainstaluj zależności
```bash
npm install
```
3. Uruchom aplikację w trybie deweloperskim
```bash
npm run dev
```
Aplikacja będzie dostępna pod adresem: http://localhost:3000

4. Uruchomienie testów
```bash
npm test
```
Projekt zawiera testy dla obu endpointów sprawdzające poprawność kodów odpowiedzi oraz struktury danych.


## Aplikacja dostępna publicznie

Aplikacja dostępna publicznie pod linkiem: 

https://devops-express-nsc-fwb2bmdpeme2haa8.polandcentral-01.azurewebsites.net

Endpoint produktów dostępny pod linkiem:

https://devops-express-nsc-fwb2bmdpeme2haa8.polandcentral-01.azurewebsites.net/products