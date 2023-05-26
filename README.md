# Project description  - kuznia-chlodu 

<!-- Deploy projektu można obejrzec pod aderesem: [https://mpawlak92.github.io/muscodeapp/](https://mpawlak92.github.io/muscodeapp/) -->

It is SPA for air conditioning company. It presents all nedded informaton about services offered by kuznia-chlodu. It allow to contat with tem and check how they are work.


# Design assumptions

Providing the following functionalities:

General functionalities:

- Providing the accessibility,(RWD, posiblity to handeling website from keybord)
- Providing responsibility
- Possibility to change language

Menu 
- Menu bar 
- menu on landingpage

LandingPage
  
Services subpage
  - car
  - home
  - cleaning

Technologies:

- vue.js w wersji 3 lub wyższej
- pinia
- sass
- github (strategia branchingu: z uwagi na projekt jednoosobowy zastosowałem uproszczone podejście trunk based development)
- axeDevTool (narzędzie do oceny accesibility)

# Decyzje projektowe

Funkcjonalności ogólne:

- z uwagi na formę zadania, którą był widok desctopowy, wyjątkowo odszedłem od podejścia mobile first i postanowiłem responsywność potraktować jako dodatkową funkcjonalność

Lista ToDo:

- udało się spełnić wszystkie założenia,
- myslałem że dobrze by było gdybym zrobił liste ToDo z wykorzystaniem "event bus", jednak po dokładniejszym przeananlizowaniu tematu i fakcie że i tak używam w projekcie pini postanowiałem zostać przy wersji ze storem,

Tabela Produktów:

- udało się spełnić wszystkie założenia,
- decyzja o stylowaniu znaczników zamiast nadania im klas została podjęta z uwagi na to, że projekt jest jedynie wycinkiem rzeczywistej aplikacji, w każdym innym przypadku do stylowania tabeli użył bym klas,
- z uwagi na formę tabeli nie nadającą się na wąskie ekrany mobilne, oraz to, że nie wprowadza ona żadnej dodatkowej funkcjonalności poza podglądem danych w innej formie, nie jest ona wyświetlana na ekranach mniejszych niż 600px(na urządzeniach mobilnych typu telefon, aby obejrzeć tabelę trzeba obrócić telefon do pozycji horyzontalnej)

Karta Produktu:

- udało się spełnić wszystkie założenia,
- dodałem nie wspomniane w wymaganiach zachowanie na najechanie kursora myszy w postaci lekkiego powiekszenia karty, z uwagi na zwiększenie czytelności faktu że obiekt jest klikalny
-

Modal do edycji danych o produkcie:

- udało się spełnić wszystkie założenia,
- po otworzeniu modala dodałem automatyczny focus na pierwszy input
- inputy są dodane ręcznie z uwagi na wielkość projektu, można by stworzyć osobny komponent z wzorcem inputa jednak w tym wypadku to przerost formy nad treścią,
- zamknięcie modala możliwe jest po kliknięciu anuluj lub zapisz oraz po wciśnięciu klawisza escape pod warunkiem że któryś element modala po focus,
- celowo nie dodałem możliwości zamknięcia modala przez kliknięcie w backdrop z uwagi na formę modala - nie chciałbym, aby użytkownik zamknął modal i utracił edytowane dane przypadkowym kliknięciem myszy w backdrop

Technologie:

- do walidacji formulaża użyłem paczki [vuealidate](https://vuelidate-next.netlify.app/)

## Instalacja Aplikacji

Do lokalnego odpalenia projektu wymagany jest zainstalowany globalnie Node.js w wersji 18 lub wyższej

Aby pobrać projekt trzeba przejść do [repozytorium](https://github.com/mpawlak92/muscodeapp) i wybrac jedną z opcji dostępnych pod przyciskiem "<> Code"

![Przycisk z funkcją pobrania kodu źródłowego ](/src/assets/documentation/git-code.jpg)

## Instalacja paczek

Aby zainstalować paczki należy otworzyć projekt w wybranym IDE polecany Visual Studio Code oraz zainstalować paczki przy pomocy polecenia "npm instal"

```sh
npm install
```

## Kompilacja projektu

Aby skompilować projekt trzeba użyć polecenia npm run

```sh
npm run dev
```

### Opis komponentów

### Komponenty ogólne:

- CardModel - komponent będący schematem pozwalającym na zbudowanie spersonalizowanej karty, posiada części wspólne dla wszystkich kart oraz daje możliwość przekazania informacji indywidualnych dla każdego rodzaju używanych w aplikacji kart
- ModalModel - komponent będący szkieletem dla modalu
- BtnModel - komponent będący szkieletem dla przycisk, posiada możliwość spersonalizowania wyglądu przycisku poprzez przekazanie odpowiednich funkcji do niego za pomocą propsów

Właściwości przycisku zadeklarowane w komponencie:

```sh
content: {
    type: String,
    default: 'Btn name',
  },
  color: {
    type: String,
    default: '#384a5c',
  },
  bgColor: {
    type: String,
    default: '#fff',
  },
  fontSize: {
    type: String,
    default: '1rem',
  },
  border: {
    type: String,
    default: '1px solid #b2b2b2',
  },
  padding: {
    type: String,
    default: '5px',
  },
  margin: {
    type: String,
    default: '5px 5px',
  },
```

### Lista ToDo:

- TasksListItem - komponent zawierający deklarację pojedynczego taska na liście tasków, posiada on również funkcję handleTaskState odpowiedzialną za zmianę statusu taska na zakończony lub do zrobienia
- TasksList - komponent renderujący listę tasków na podstawie przekazanych danych.
- TodoList - komponent będący kontenerem dla Listy tasków oraz licznika wykonanych tasków a także komponentu pozwalającego na dodanie nowego tasku do listy
- NewTaskToDo - komponent pozwala na dodanie nowego tasku do listy tasków do zrobienia, nowy task jest automatycznie oznaczony jako nie wykonany

### Tabela Produktów:

- ProductsList - komponent zawierający deklarację tabeli renderowanej na podstawie danych produktów

### Karta Produktu:

- ProductCard - definiuje wygląd oraz zachowanie karty produktu, przekazuje spersonalizowane informacje do komponentu CardModel, posiada również funkcję odpowiedzialne za otwieranie i zamykanie modala edycji produktu oraz funkcje odpowiedzialne za wyliczanie procentowej wartości zniżki. Odpowiada również za wyrenderowanie wszystkich kart produktów na stronie. Posiada funkcje odpowiedzialne za prawidłowe wyświetlanie ceny produktu w karcie.

### Modal do edycji danych o produkcie:

- ProductEditModal - komponent odpowiedzialny za przekazanie spersonalizowanego wyglądu modala do komponentu ModalModel. Komponent ProductEditModal posiada szereg funkcji odpowiedzialnych za walidację formularza przeznaczonego do edycji danych produktu, posiada on również funkcję odpowiedzialną za zapis poprawnych danych przekazanych do stora.
