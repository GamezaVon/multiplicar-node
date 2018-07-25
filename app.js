const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo } = require('./Multiplicar/multiplicar');
const { listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creeado:`, colors.green(`${archivo.green}`)))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(argv);

// console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);