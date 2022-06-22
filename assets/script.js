// O nome das cidades avaliadas: Entre a tag <b></b> filtrar entre os *

// O conteúdo do roteiro A de cada cidade avaliada: Entre as tags <br> iniciando com uma '#Roteiro A |'

// Quantos locais são citados no roteiro A de cada cidade.
// Separados por '; +1'

// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
// Filtrar o '#Roteiro B |' e trazer os nomes


// O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
// Filtrar o '#Roteiro B |' e trazer os nomes

// ToDo
// - Importar HTML no Javascript
// - Salvar texto numa variável

//SALVA O CONTEÚDO EM UMA VARIÁVEL TIPO STRING

const roteiroHtml = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br> Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"


// Extrai e exibi o nome das cidades avaliadas
const cidadesAvaliadas = roteiroHtml.split('*');
console.log(cidadesAvaliadas);

document.getElementById("primeiraCidade").innerHTML = cidadesAvaliadas[1];
document.getElementById("segundaCidade").innerHTML = cidadesAvaliadas[3];
document.getElementById("terceiraCidade").innerHTML = cidadesAvaliadas[5];


// Extrai o conteúdo do roteiro A de cada cidade avaliada
let roteirosA = roteiroHtml.split('#');
let conteudoRoteiroA = roteiroHtml.split('Roteiro A');
console.table(roteirosA);

console.log(conteudoRoteiroA);

document.getElementById("roteiroSaoPaulo").innerHTML = roteirosA[1];
document.getElementById("roteiroLasVegas").innerHTML = roteirosA[4];
document.getElementById("roteiroMoscou").innerHTML = roteirosA[7];


// Extrair e exibi a quantidade de locais do Roteiro A de cada cidade
let quantidadeLocaisRoteiroAsaoPaulo = roteirosA[1].split('<br>');
let teste = quantidadeLocaisRoteiroAsaoPaulo[1].split(";");
document.getElementById("quantidadeLocaisRoteiroAsaoPaulo").innerHTML = teste.length;

let quantidadeLocaisRoteiroAlasVegas = roteirosA[4].split('<br>');
let teste1 = quantidadeLocaisRoteiroAlasVegas[1].split(";")
document.getElementById("quantidadeLocaisRoteiroAlasVegas").innerHTML = teste1.length;

let quantidadeLocaisRoteiroAmoscou = roteirosA[7].split('<br>');
let teste2 = quantidadeLocaisRoteiroAmoscou[1].split(";")
document.getElementById("quantidadeLocaisRoteiroAmoscou").innerHTML = teste2.length;

//Extrai e exibe o nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
let roteiroCentro = roteirosA[2].split("<br>");
let teste6 = roteiroCentro[1];
document.getElementById("roteiroCentro").innerHTML = teste6;

//Extrai e exibe o nome dos pontos turísticos localizados no bairro Downtowm da cidade de Las Vegas.
let roteiroDowntowm = roteirosA[5].split("<br>");
let teste5 = roteiroDowntowm[1];
console.log(teste5);
document.getElementById("roteiroDowntowm").innerHTML = teste5;
