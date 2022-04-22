import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Tatiana", 10000, 12345678900);
diretor.cadastrarSenha("12345");
const gerente = new Gerente ("Igor", 7000, 12345678901);
gerente.cadastrarSenha("1234");


const cliente = new Cliente("Lais", 12354678900, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


// console.log(diretor);
// console.log(gerente);
console.log(cliente);

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);