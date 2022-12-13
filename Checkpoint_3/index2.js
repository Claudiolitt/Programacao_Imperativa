

class Aluno {
    constructor(nome = "", qtdFaltas, notas = []) {
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }

    faltas () {
        this.qtdFaltas++;
        return this.qtdFaltas;
    }

    calcularMedia() {
        let soma = 0;

        for(let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        
        let media = soma / this.notas.length;
        return media;

    }
}

const curso = {
    nomeCurso: "Certified Tech Developer",
    notaAprovacao: 7.0,
    faltasMaximas: 3,
    estudantes: [],

    adicionarAluno(nome, qtdFaltas, notas) {
        const novoAluno = new Aluno(nome, qtdFaltas, notas);
        this.estudantes.push(novoAluno);
    },

    buscarAluno(estudanteInformado) {
        for(let estudante of this.estudantes) {
            if(estudanteInformado === estudante.nome) {
                return estudante;
            }
        }
    },

    verificarAprovacao(estudante) {

        const estudanteVerificado = curso.buscarAluno(estudante);
        const media = estudanteVerificado.calcularMedia();

        if (media >= this.notaAprovacao && estudanteVerificado.qtdFaltas <= this.faltasMaximas) {
            return true; 
        } else {
            return false;
        }

    },

    listaAprovados() {
        let lista = [];
        
        for(let i = 0; i < this.estudantes.length; i++) {
            let aprovacao = curso.verificarAprovacao(this.estudantes[i].nome);
            lista.push(this.estudantes[i].nome + ': ' + aprovacao); 
        }

        return lista;
    
    }


}

curso.adicionarAluno("Leonardo", 0, [10, 9, 9]); //0
curso.adicionarAluno("Natalia", 3, [5, 5, 7]); //1 
curso.adicionarAluno("Raquel", 2, [10, 10, 10]); //2
curso.adicionarAluno("Bruno", 1, [9, 3, 9]) //3

//console.log(curso.estudantes[3].faltas());

//console.log(curso.estudantes);

//console.log(curso.buscarAluno("Bruno"));

//console.log(curso.verificarAprovacao("Bruno"));

console.log(curso.listaAprovados());