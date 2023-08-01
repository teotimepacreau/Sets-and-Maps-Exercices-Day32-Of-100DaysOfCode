console.log('connecté !');
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md

// EXERCICE I
const countries = ['Finland', 'Sweden', 'Norway']
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
  'Chinese'
]
// I.1 Create an empty set
const emptySet = new Set()
console.log(emptySet)

// I.2 Create a set containing 0 to 10 using loop
const zeroToTenSet = new Set()
for(let i=0; i<=10; i++){
  zeroToTenSet.add(i)
}
console.log(zeroToTenSet)

// I.3 Remove an element from a set
const deleted = zeroToTenSet.delete(9)
console.log(deleted)

// I.4 Clear a set
console.log(zeroToTenSet.clear())

// I.5 Create a set of 5 string elements from array
const setLanguages = new Set(languages)
console.log(setLanguages)

// I.6 Create a map of countries and number of characters of a country
const mapCountries = new Map()
for(let country of countries){
  mapCountries.set(country, country.length)
}
console.log(mapCountries)

// EXERCICE II
const countriesData = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://restcountries.eu/data/asm.svg',
    currency: 'United State Dollar'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    currency: 'Euro'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://restcountries.eu/data/ago.svg',
    currency: 'Angolan kwanza'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://restcountries.eu/data/aia.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://restcountries.eu/data/ata.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://restcountries.eu/data/atg.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'Guaraní'],
    population: 43590400,
    flag: 'https://restcountries.eu/data/arg.svg',
    currency: 'Argentine peso'
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    languages: ['Armenian', 'Russian'],
    population: 2994400,
    flag: 'https://restcountries.eu/data/arm.svg',
    currency: 'Armenian dram'
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    languages: ['Dutch', '(Eastern) Punjabi'],
    population: 107394,
    flag: 'https://restcountries.eu/data/abw.svg',
    currency: 'Aruban florin'
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    languages: ['English'],
    population: 24117360,
    flag: 'https://restcountries.eu/data/aus.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    languages: ['German'],
    population: 8725931,
    flag: 'https://restcountries.eu/data/aut.svg',
    currency: 'Euro'
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    languages: ['Azerbaijani'],
    population: 9730500,
    flag: 'https://restcountries.eu/data/aze.svg',
    currency: 'Azerbaijani manat'
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    languages: ['English'],
    population: 378040,
    flag: 'https://restcountries.eu/data/bhs.svg',
    currency: 'Bahamian dollar'
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    languages: ['Arabic'],
    population: 1404900,
    flag: 'https://restcountries.eu/data/bhr.svg',
    currency: 'Bahraini dinar'
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    languages: ['Bengali'],
    population: 161006790,
    flag: 'https://restcountries.eu/data/bgd.svg',
    currency: 'Bangladeshi taka'
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    languages: ['English'],
    population: 285000,
    flag: 'https://restcountries.eu/data/brb.svg',
    currency: 'Barbadian dollar'
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    languages: ['Belarusian', 'Russian'],
    population: 9498700,
    flag: 'https://restcountries.eu/data/blr.svg',
    currency: 'New Belarusian ruble'
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    languages: ['Dutch', 'French', 'German'],
    population: 11319511,
    flag: 'https://restcountries.eu/data/bel.svg',
    currency: 'Euro'
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    languages: ['English', 'Spanish'],
    population: 370300,
    flag: 'https://restcountries.eu/data/blz.svg',
    currency: 'Belize dollar'
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    languages: ['French'],
    population: 10653654,
    flag: 'https://restcountries.eu/data/ben.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Bermuda',
    capital: 'Hamilton',
    languages: ['English'],
    population: 61954,
    flag: 'https://restcountries.eu/data/bmu.svg',
    currency: 'Bermudian dollar'
  },
  {
    name: 'Bhutan',
    capital: 'Thimphu',
    languages: ['Dzongkha'],
    population: 775620,
    flag: 'https://restcountries.eu/data/btn.svg',
    currency: 'Bhutanese ngultrum'
  },
  {
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    languages: ['Spanish', 'Aymara', 'Quechua'],
    population: 10985059,
    flag: 'https://restcountries.eu/data/bol.svg',
    currency: 'Bolivian boliviano'
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    capital: 'Kralendijk',
    languages: ['Dutch'],
    population: 17408,
    flag: 'https://restcountries.eu/data/bes.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    languages: ['Bosnian', 'Croatian', 'Serbian'],
    population: 3531159,
    flag: 'https://restcountries.eu/data/bih.svg',
    currency: 'Bosnia and Herzegovina convertible mark'
  },
  {
    name: 'Botswana',
    capital: 'Gaborone',
    languages: ['English', 'Tswana'],
    population: 2141206,
    flag: 'https://restcountries.eu/data/bwa.svg',
    currency: 'Botswana pula'
  },
  {
    name: 'Bouvet Island',
    capital: '',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 0,
    flag: 'https://restcountries.eu/data/bvt.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    languages: ['Portuguese'],
    population: 206135893,
    flag: 'https://restcountries.eu/data/bra.svg',
    currency: 'Brazilian real'
  },
  {
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    languages: ['English'],
    population: 3000,
    flag: 'https://restcountries.eu/data/iot.svg',
    currency: 'United States dollar'
  },
  {
    name: 'United States Minor Outlying Islands',
    capital: '',
    languages: ['English'],
    population: 300,
    flag: 'https://restcountries.eu/data/umi.svg',
    currency: 'United States Dollar'
  }]


// II.1 How many unique languages are there in the countries object file.

const languagesArray = countriesData.map((country)=>country.languages)
console.log(languagesArray)
const flattenedArray = [].concat(...languagesArray)
console.log(flattenedArray)
const languagesMap = new Set(flattenedArray)
console.log(languagesMap, languagesMap.size)


