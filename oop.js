function pessoa(nomePessoa, alturaPessoa, disciplinaFavorita, comidaFavorita, equipaFavorita, dataNascimento){
		this.nome = nomePessoa;
		this.altura = alturaPessoa;
		this.disciplina = disciplinaFavorita;
		this.comida = comidaFavorita;
		this.equipa = equipaFavorita;
		this.data = dataNascimento;
		this.cumprimento = function(){	
			console.log("Olá, o meu nome é " + this.nome + ", meço " + this.altura + " metros de altura, a minha disciplina favorita é " + this.disciplina + ", a minha comida favorita é " + this.comida + ", a minha equipa favorita é o " + this.equipa + " e nasci no dia " +this.data)
		}
}

var andre = new pessoa("André Costa", "1,75", "português", "peixe grelhado", "Académica", "05/11/2000")
	andre.cumprimento();
	
var antonio = new pessoa("António Lourenço", "1,70", "matemática", "pizza", "Nacional", "12/01/2000")
	antonio.cumprimento();
	
var beatriz = new pessoa("Beatriz Barreto", "1,60", "educação física", "frango assado", "Estoril", "23/03/2000")
	beatriz.cumprimento();
	
var franciscoE = new pessoa("Francisco Esteves", "1,70", "física", "hambúrguer", "Arouca", "25/02/2000")
	franciscoE.cumprimento();
	
var franciscoR = new pessoa("Francisco Rodrigues", "1,73", "inglês", "douradinhos", "Paços de Ferreira", "06/06/2000")
	franciscoR.cumprimento();
	
var daniel = new pessoa("Daniel Serrano", "1,80", "espanhol", "bife grelhado", "Porto", "03/09/2000")
	daniel.cumprimento();
	
var fabio = new pessoa("Fábio Franco", "1,77", "português", "feijoada", "Gil Vicente", "07/12/2000")
	fabio.cumprimento();
	
var joaoN = new pessoa("João Neves", "1,75", "matemática", "peixe cozido", "Marítimo", "22/01/2000")
	joaoN.cumprimento();
	
var joaoM = new pessoa("João Madeira", "1,85", "educação fisica", "picanha", "Belenenses", "28/07/2000")
	joaoM.cumprimento();
	
var goncalo = new pessoa("Gonçalo Simão", "1,77", "física", "esparguete à bolonhesa", "Rio Ave", "10/04/2000")
	goncalo.cumprimento();
	
var luis = new pessoa("Luís Catarino", "1,83", "inglês", "camarões", "Benfica", "19/11/2000")
	luis.cumprimento();
	
var miguel = new pessoa("Miguel Pinto", "1,78", "espanhol", "bacalhau com batatas a murro", "Braga", "03/05/2000")
	miguel.cumprimento();
	
var maria = new pessoa("Maria Inês", "1,65", "português", "carbonara", "Sporting", "17/09/2000")
	maria.cumprimento();
	
var nuno = new pessoa("Nuno Rodrigues", "1,74", "matemática", "pizza", "Olhanense", "02/05/2000")
	nuno.cumprimento();
	
var pedro = new pessoa("Pedro Fonseca", "1,82", "aplicações", "picanha", "Vitória de Setúbal", "11/01/2000")
	pedro.cumprimento();
	
var miguelD = new pessoa("Miguel Dionísio", "1,76", "educação física", "peixe cozido", "Vitória de Guimarães", "27/05/2000")
	miguelD.cumprimento();
	
var ricardoG = new pessoa("Ricardo Gonçalves", "1,79", "física", "arroz de pato", "Académica", "18/11/2000")
	ricardoG.cumprimento();
	
var sandu = new pessoa("Sandu Lungu", "1,76", "alemão", "hambúrguer", "Nacional", "16/03/2000")
	sandu.cumprimento();
	
var ricardoP = new pessoa("Ricardo Pereira", "1,70", "português", "arroz de cabidela", "Estoril", "19/11/2000")
	ricardoP.cumprimento();
	
var rodrigo = new pessoa("Rodrigo Valério", "1,82", "matemática", "bife de perú", "Arouca", "03/07/2000")
	rodrigo.cumprimento();
	
var samuel = new pessoa("Samuel Vaz", "1,75", "alemão", "sushi", "Paços de Ferreira", "08/10/2000")
	samuel.cumprimento();
	
var tomas = new pessoa("Tomás Feith", "1,82", "física", "paella", "Porto", "06/06/2000")
	tomas.cumprimento();
	
var tiago = new pessoa(" Tiago Arriegas", "1,78", "educação física", "bacalhau com natas", "Gil Vicente", "01/06/2000")
	tiago.cumprimento();
	
var antonio = new pessoa("António Campaniço", "1,81", "alemão", "costeletas", "Marítimo", "14/08/2000")
	antonio.cumprimento();
