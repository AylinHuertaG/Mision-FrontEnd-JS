const buscarPokemon = () => {
    const nombreInput = document.getElementById("nombrePokemon");
    let nombrePokemon = nombreInput.value;
    nombrePokemon = nombrePokemon.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        if (data) {
            let imagenPokemon = data.sprites.front_default;
            let numeroPokemon = data.id;
            let tiposPokemon = data.types;
            var tipoPokemon = "";
            if(tiposPokemon.length > 1){
                tiposPokemon.forEach(tipo => {
                    tipoPokemon += tipo.type.name+", "
                });
            }else{
                tipoPokemon += tiposPokemon[0].type.name;
            }
            let estadisticasPokemon = data.stats;
            var hpPokemon = 0;
            var attackPokemon = 0;
            var defensePokemon = 0;
            var sattackPokemon = 0;
            var sdefensePokemon = 0;
            var speedPokemon = 0;
            estadisticasPokemon.forEach(estadistica => {
                switch(estadistica.stat.name){
                    case 'hp':
                        hpPokemon = estadistica.base_stat;
                    break;
                    case 'attack':
                        attackPokemon = estadistica.base_stat;
                    break;
                    case 'defense':
                        defensePokemon = estadistica.base_stat;
                    break;
                    case 'special-attack':
                        sattackPokemon = estadistica.base_stat;
                    break;
                    case 'special-defense':
                        sdefensePokemon = estadistica.base_stat;
                    break;
                    case 'speed':
                        speedPokemon = estadistica.base_stat;
                    break;
                }
            });
            let movimientosPokemon = data.moves;
            var nombresMovimientosPokemon = "";
            movimientosPokemon.forEach(movimiento => {
                nombresMovimientosPokemon += movimiento.move.name+", ";
            });
            let alturaPokemon = data.height;
            let pesoPokemon = data.weight;

            nuevaImagenPokemon(imagenPokemon);
            nuevoNumeroPokemon(numeroPokemon);
            nuevoTipoPokemon(tipoPokemon);
            nuevoHpPokemon(hpPokemon);
            nuevoAttackPokemon(attackPokemon);
            nuevoDefensePokemon(defensePokemon);
            nuevoSAttackPokemon(sattackPokemon);
            nuevoSDefensePokemon(sdefensePokemon);
            nuevoSpeedPokemon(speedPokemon);
            nuevoMovimientosPokemon(nombresMovimientosPokemon);
            nuevaAlturaPokemon(alturaPokemon);
            nuevoPesoPokemon(pesoPokemon);
        }
    }).catch((error) => {
        console.log(error);
        nuevaImagenPokemon("./img/pokebola.png");
        nuevoNumeroPokemon("00");
        nuevoTipoPokemon("Inválido");
        nuevoHpPokemon("0");
        nuevoAttackPokemon("0");
        nuevoDefensePokemon("0");
        nuevoSDefensePokemon("0");
        nuevoSAttackPokemon("0");
        nuevoSpeedPokemon("0");
        nuevoMovimientosPokemon("Inválidos");
        nuevaAlturaPokemon("0");
        nuevoPesoPokemon("0");
    });
}

const nuevaImagenPokemon = (url) => {
    const imagenPokemon = document.getElementById("imagenPokemon");
    imagenPokemon.src = url;
}

const nuevoNumeroPokemon = (numero) => {
    const numeroPokemon = document.getElementById("numeroPokemon");
    numeroPokemon.value = "#"+numero;
}

const nuevoTipoPokemon = (tipo) => {
    const tipoPokemon = document.getElementById("tipoPokemon");
    tipoPokemon.value = tipo;
}

const nuevoHpPokemon = (hp) => {
    const hpPokemon = document.getElementById("hp");
    hpPokemon.style.height = hp+"%";
}

const nuevoAttackPokemon = (ataque) => {
    const attackPokemon = document.getElementById("attack");
    attackPokemon.style.height = ataque+"%";
}

const nuevoDefensePokemon = (defensa) => {
    const defensePokemon = document.getElementById("defense");
    defensePokemon.style.height = defensa+"%";
}

const nuevoSAttackPokemon = (ataqueEspecial) => {
    const sAttackPokemon = document.getElementById("s-attack");
    sAttackPokemon.style.height = ataqueEspecial+"%";
}

const nuevoSDefensePokemon = (defensaEspecial) => {
    const sDefensePokemon = document.getElementById("s-defense");
    sDefensePokemon.style.height = defensaEspecial+"%";
}

const nuevoSpeedPokemon = (velocidad) => {
    const speedPokemon = document.getElementById("speed");
    speedPokemon.style.height = velocidad+"%";
}

const nuevoMovimientosPokemon = (movimientos) => {
    const movimientoPokemon = document.getElementById("movimientosPokemon");
    movimientoPokemon.value = movimientos;
}

const nuevaAlturaPokemon = (altura) => {
    const alturaPokemon = document.getElementById("alturaPokemon");
    alturaPokemon.value = altura+" M";
}

const nuevoPesoPokemon = (peso) => {
    const pesoPokemon = document.getElementById("pesoPokemon");
    pesoPokemon.value = peso+" KG";
}