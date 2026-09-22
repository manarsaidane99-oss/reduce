let personnes = [
  {nom: {prenom: 'Grace', deuxiemePrenom: 'B.', nomFamille: 'Hopper'}, age: 85},
  {nom: {prenom: 'Adele', nomFamille: 'Goldstine'}, age: 43},
  {nom: {prenom: 'Ada', nomFamille: 'Lovelace'}, age: 36},
  {nom: {prenom: 'Hedy', deuxiemePrenom: 'E.', nomFamille: 'Lamarr'}, age: 85},
  {nom: {prenom: 'Ruchi', nomFamille: 'Sanghvi'}, age: 34}
]


function sommeAges(personnes) {
  return personnes.reduce((s,personne)=>{return s+personne.age},0)
}

console.log(sommeAges(personnes))



function ageMoyen(personnes) {
  
  return  sommeAges(personnes)/personnes.length
}
console.log(ageMoyen(personnes))



function intervalle(debut, fin) {
  let resultat = []

  for (let i = debut; i < fin; i++) {
    resultat.push(i)
  }

  return resultat
}

function factorielle(n) {
  let nombres=intervalle(1,n+1)
return nombres.reduce((f,nombre)=>{return f*nombre},1)

}
console.log(factorielle(5))
console.log(factorielle(3))


function compterOccurrences(chaine, caractere) {
  let ch=chaine.split("")
  return ch.reduce((o,c)=>{
    if(c===caractere){
      return o+1}
    return o
    },0)
}


console.log(compterOccurrences('bonjour', 'o'))
console.log(compterOccurrences('bonjour', 'z'))
console.log(compterOccurrences('bonjour tout le monde', 'o'))


function personneLaPlusAgee(personnes) {
  return personnes.reduce((max,personne)=>{
    if(personne.age>max){
      return personne
    }
    return max
  })
}

console.log(personneLaPlusAgee(personnes))

function compterParAge(personnes) {
  return personnes.reduce((o,personne)=>{
    if(o[personne.age]===undefined){
      o[personne.age]=1
    }
    else{
      o[personne.age]++
    }
    return o
  },{})
}



console.log(compterParAge(personnes))


function obtenirPrenoms(personnes) {
  return personnes.reduce((prenom,personne)=>{ prenom.push(personne.nom.prenom) 
    return prenom
  },[])
}

console.log(obtenirPrenoms(personnes))


function tousPlusDe30Ans(personnes) {
  return personnes.reduce((test,personne)=>{return test && personne.age>30 },true)
}

console.log(tousPlusDe30Ans(personnes))


function totalLettresPrenoms(personnes) {
  return personnes.reduce((nbr,personne)=>{return nbr+personne.nom.prenom.length},0)

}
console.log(totalLettresPrenoms(personnes))

function construireNomsComplets(personnes) {
  return personnes.reduce((nomCom,personne)=>{ return nomCom+personne.nom.prenom+" "+personne.nom.nomFamille+","},"")
}

console.log(construireNomsComplets(personnes))
