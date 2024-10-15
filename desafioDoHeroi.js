//                  0         1               2                3         4       5          6            7    
const herois = ["batman", "superman", "Mulher maravilha", "iron-man", "hulk", "ciclope", "vampira", "homen aranha" ];
//             0       1      2      3       4      5      6      7
let lvl = [11.500, 12.000, 8.000, 8.700, 11.000, 7.000, 7.500, 8.500];


for(let i = 0; i < herois.length; i++){
    

    nome = herois[i]
    xp = lvl [i]
    let nivel
    
    if (xp <= 1.000){
        nivel = "ferro"
    }else if (xp >= 1.001 && xp <= 2.000){
        nivel = "Bronze"
    }else if (xp >= 2.001 && xp <= 5.000){
        nivel = "Prata"
    }else if (xp >= 5.001 && xp <= 7.000){
        nivel = "Ouro"
    }else if (xp >= 7.001 && xp <= 8.000){
        nivel = "Platina Diamante"
    }else if (xp >= 8.001 && xp <= 9.000){
        nivel = "Ascendente"
    }else if (xp >= 9.001 && xp <= 10.000){
        nivel = "Imortal"
    }else if (xp >= 10.001){
        nivel = "Radiante"
    }

    console.log(`O Herói de nome ${nome} esta no nível de ${nivel}`)

}