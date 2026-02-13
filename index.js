// Dados extraídos do R.D.O de 12/02/26
const dadosRDO = [
    { funcao: "Engenheiro: Douglas", mat: "Supervisão", stM: "Ok", vesp: "Supervisão", cM: "Sol", cT: "" },
    { funcao: "Encarregado: Serrinha", mat: "Gestão de Equipe", stM: "Ok", vesp: "Gestão de Equipe", cM: "Sol", cT: "" },
    { funcao: "Serralheiro: Daniel", mat: "Montando Brise | Studio 06", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Serralheiro: Jairo", mat: "Montando Brise | Studio 06", stM: "", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Pedreiro: Messias", mat: "Meio-fio | Assentamento pedras", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Pedreiro: Luis", mat: "Alvenaria | Painéis Elétricos", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Pedreiro: Claudio", mat: "Armando Ferragens", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Pedreiro: Evandro", mat: "Trabalhando na Sereia", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Pintor: Jorge", mat: "Acabamento da fachada Studio 08", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Carpinteiro: Raimundo", mat: "Alinhamento e nivelamento", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Ajudante: Albert", mat: "Carregando Carro de mão", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Ajudante: Rubens", mat: "Ajudando Luiz | Vandinho | Sereia", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Ajudante: Domingos", mat: "Ajudando Evandro com a Sereia", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Ajudante: Everson", mat: "Carregando Carro de mão", stM: "Ok", vesp: "", cM: "Sol", cT: "" },
    { funcao: "Equipe Sr. Afonso (Adenilton)", mat: "Colocando as Pedras", stM: "-", vesp: "-", cM: "-", cT: "-" }
];

const tabela = document.getElementById('tabelaCorpo');

function renderizarTabela(lista) {
    tabela.innerHTML = lista.map(item => `
        <tr>
            <td><strong>${item.funcao}</strong></td>
            <td>${item.mat}</td>
            <td class="status-ok">${item.stM}</td>
            <td>${item.vesp}</td>
            <td class="text-center">${item.cM}</td>
            <td class="text-center">${item.cT}</td>
        </tr>
    `).join('');
}

function filtrarRDO() {
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    
    const filtrados = dadosRDO.filter(item => {
        // Busca inteligente: procura na função, na atividade ou no nome
        return item.funcao.toLowerCase().includes(termo) || 
               item.mat.toLowerCase().includes(termo) ||
               item.vesp.toLowerCase().includes(termo);
    });

    renderizarTabela(filtrados);
}

// Inicializa a tabela
renderizarTabela(dadosRDO);