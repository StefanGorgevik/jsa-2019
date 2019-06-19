var students = [
    {ime: "Pero", prezime:"Perovski", prosek: 6.2},
    {ime: "Janko", prezime:"Jankovski", prosek: 7.1},
    {ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
    {ime: "Petko", prezime:"Petkovski", prosek: 9.81},
    {ime: "Ivana", prezime:"Ivanovska", prosek: 6},
    {ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
    {ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
];

function studentDetails(s) {
    var sorted = s.sort((a, b) =>  a.prosek - b.prosek);
    console.log(`Student so najnizok prosek e ${sorted[0].ime} ${sorted[0].prezime} so prosek ${sorted[0].prosek}`);
    console.log(`Student so navisok prosek e ${sorted[sorted.length-1].ime} ${sorted[sorted.length-1].prezime} so prosek ${sorted[sorted.length-1].prosek}`);
    var avg = sorted.map((v) => v.prosek).reduce((a,b) => a + b)/ sorted.length;
            // niza od prosek
    console.log(`Sreden prosek na generacija e ${avg}`);
}
studentDetails(students);