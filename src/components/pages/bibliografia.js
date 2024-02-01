import React, { useState } from 'react';
import Nav from '../navbar/nav';
import Rodape from '../navbar/rodape';

const Bibliografia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const livrosDireito = [
    { titulo: "A Arte da Guerra", autor: "Sun Tzu", area: "Estratégia Militar", etiquetas: ["Estratégia", "Militar"] },
    { titulo: "O Príncipe", autor: "Maquiavel", area: "Filosofia Política", etiquetas: ["Política", "Filosofia"] },
    { titulo: "1984", autor: "George Orwell", area: "Ficção Distópica", etiquetas: ["Distopia", "Ficção"] },
    { titulo: "O Processo", autor: "Franz Kafka", area: "Literatura", etiquetas: ["Kafka", "Literatura"] },
    { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", area: "Literatura", etiquetas: ["Dostoiévski", "Literatura"] },
    { titulo: "Os Miseráveis", autor: "Victor Hugo", area: "Literatura", etiquetas: ["Hugo", "Literatura"] },
    { titulo: "O Advogado do Diabo", autor: "Morris West", area: "Ficção", etiquetas: ["Advogado", "Ficção"] },
    { titulo: "O Nome da Rosa", autor: "Umberto Eco", area: "Literatura Policial", etiquetas: ["Eco", "Policial"] },
    { titulo: "A Sociedade do Espetáculo", autor: "Guy Debord", area: "Filosofia", etiquetas: ["Debord", "Filosofia"] },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", area: "Ficção", etiquetas: ["Orwell", "Ficção"] },
    { titulo: "O Contrato Social", autor: "Jean-Jacques Rousseau", area: "Filosofia Política", etiquetas: ["Rousseau", "Política"] },
    { titulo: "O Código Da Vinci", autor: "Dan Brown", area: "Ficção", etiquetas: ["Código", "Ficção"] },
    { titulo: "1984", autor: "George Orwell", area: "Ficção Distópica", etiquetas: ["Distopia", "Ficção"] },
    { titulo: "O Princípio da Legalidade", autor: "Fábio Costa", area: "Direito Penal", etiquetas: ["Legalidade", "Penal"] },
    { titulo: "Teoria Geral do Estado", autor: "Darcy Azambuja", area: "Ciência Política", etiquetas: ["Estado", "Política"] },
    { titulo: "Curso de Direito Tributário", autor: "Ricardo Alexandre", area: "Direito Tributário", etiquetas: ["Tributário"] },
    { titulo: "Declaração Universal dos Direitos Humanos", autor: "ONU", area: "Direitos Humanos", etiquetas: ["Direitos Humanos"] },
    { titulo: "Ética a Nicômaco", autor: "Aristóteles", area: "Filosofia Moral", etiquetas: ["Ética", "Filosofia"] },
    { titulo: "O Médico e o Monstro", autor: "Robert Louis Stevenson", area: "Literatura", etiquetas: ["Stevenson", "Literatura"] },
    { titulo: "O Estrangeiro", autor: "Albert Camus", area: "Literatura", etiquetas: ["Camus", "Literatura"] },
    { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown", area: "Autoajuda", etiquetas: ["Brown", "Autoajuda"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "A Metamorfose", autor: "Franz Kafka", area: "Literatura", etiquetas: ["Kafka", "Literatura"] },
    { titulo: "O Advogado das Bruxas", autor: "Júlio César Tavares", area: "Direito", etiquetas: ["Advogado", "História"] },
    { titulo: "A República", autor: "Platão", area: "Filosofia Política", etiquetas: ["Platão", "Política"] },
    { titulo: "A Riqueza das Nações", autor: "Adam Smith", area: "Economia", etiquetas: ["Economia", "Política"] },
    { titulo: "O Contrato Social", autor: "Jean-Jacques Rousseau", area: "Filosofia Política", etiquetas: ["Rousseau", "Política"] },
    { titulo: "O Livro dos Espíritos", autor: "Allan Kardec", area: "Espiritismo", etiquetas: ["Espiritismo", "Filosofia"] },
    { titulo: "A Origem das Espécies", autor: "Charles Darwin", area: "Biologia", etiquetas: ["Darwin", "Ciência"] },
    { titulo: "A Divina Comédia", autor: "Dante Alighieri", area: "Literatura", etiquetas: ["Dante", "Literatura"] },
    { titulo: "O Principezinho", autor: "Antoine de Saint-Exupéry", area: "Literatura Infantil", etiquetas: ["Saint-Exupéry", "Literatura"] },
    { titulo: "O Processo", autor: "Franz Kafka", area: "Literatura", etiquetas: ["Kafka", "Literatura"] },
    { titulo: "O Mercador de Veneza", autor: "William Shakespeare", area: "Literatura Teatral", etiquetas: ["Shakespeare", "Literatura"] },
    { titulo: "Assassinato no Expresso Oriente", autor: "Agatha Christie", area: "Literatura Policial", etiquetas: ["Christie", "Policial"] },
    { titulo: "O Sol é para Todos", autor: "Harper Lee", area: "Literatura", etiquetas: ["Lee", "Literatura"] },
    { titulo: "A Arte de Argumentar", autor: "Antônio Suárez Abreu", area: "Comunicação", etiquetas: ["Argumentação", "Comunicação"] },
    { titulo: "Miséria da Filosofia", autor: "Karl Marx", area: "Filosofia", etiquetas: ["Marx", "Filosofia"] },
    { titulo: "O Príncipe", autor: "Maquiavel", area: "Filosofia Política", etiquetas: ["Maquiavel", "Política"] },
    { titulo: "O Mundo Como Vontade e Representação", autor: "Arthur Schopenhauer", area: "Filosofia", etiquetas: ["Schopenhauer", "Filosofia"] },
    { titulo: "O Processo", autor: "Franz Kafka", area: "Literatura", etiquetas: ["Kafka", "Literatura"] },
    { titulo: "A Peste", autor: "Albert Camus", area: "Literatura", etiquetas: ["Camus", "Literatura"] },
    { titulo: "O Princípio da Incerteza", autor: "Marcelo Gleiser", area: "Física", etiquetas: ["Gleiser", "Ciência"] },
    { titulo: "Eichmann em Jerusalém", autor: "Hannah Arendt", area: "Filosofia Política", etiquetas: ["Arendt", "Política"] },
    { titulo: "1984", autor: "George Orwell", area: "Ficção Distópica", etiquetas: ["Distopia", "Ficção"] },
    { titulo: "O Estrangeiro", autor: "Albert Camus", area: "Literatura", etiquetas: ["Camus", "Literatura"] },
    { titulo: "O Segundo Sexo", autor: "Simone de Beauvoir", area: "Feminismo", etiquetas: ["Beauvoir", "Feminismo"] },
    { titulo: "O Princípio da Legalidade", autor: "Fábio Costa", area: "Direito Penal", etiquetas: ["Legalidade", "Penal"] },
    { titulo: "A Ordem do Discurso", autor: "Michel Foucault", area: "Filosofia", etiquetas: ["Foucault", "Filosofia"] },
    { titulo: "Ulisses", autor: "James Joyce", area: "Literatura", etiquetas: ["Joyce", "Literatura"] },
    { titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", area: "Filosofia", etiquetas: ["Nietzsche", "Filosofia"] },
    { titulo: "O Livro do Desassossego", autor: "Fernando Pessoa", area: "Literatura", etiquetas: ["Pessoa", "Literatura"] },
    { titulo: "O Homem Duplicado", autor: "José Saramago", area: "Literatura", etiquetas: ["Saramago", "Literatura"] },
    { titulo: "A Mão e a Luva", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "O Primo Basílio", autor: "José Maria de Eça de Queirós", area: "Literatura", etiquetas: ["Eça de Queirós", "Literatura"] },
    { titulo: "A Terceira Margem do Rio", autor: "Guimarães Rosa", area: "Literatura Brasileira", etiquetas: ["Guimarães Rosa", "Literatura"] },
    { titulo: "O Grande Sertão: Veredas", autor: "Guimarães Rosa", area: "Literatura Brasileira", etiquetas: ["Guimarães Rosa", "Literatura"] },
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Senhora", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "O Alienista", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", area: "Literatura Brasileira", etiquetas: ["Jorge Amado", "Literatura"] },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", area: "Literatura Brasileira", etiquetas: ["Aluísio Azevedo", "Literatura"] },
    { titulo: "Triste Fim de Policarpo Quaresma", autor: "Lima Barreto", area: "Literatura Brasileira", etiquetas: ["Lima Barreto", "Literatura"] },
    { titulo: "Vidas Secas", autor: "Graciliano Ramos", area: "Literatura Brasileira", etiquetas: ["Graciliano Ramos", "Literatura"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "Iracema", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Quincas Borba", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "O Primo Basílio", autor: "José Maria de Eça de Queirós", area: "Literatura", etiquetas: ["Eça de Queirós", "Literatura"] },
    { titulo: "A Cartomante", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "O Mulato", autor: "Aluísio Azevedo", area: "Literatura Brasileira", etiquetas: ["Aluísio Azevedo", "Literatura"] },
    { titulo: "Iracema", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "Senhora", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", area: "Literatura Brasileira", etiquetas: ["Jorge Amado", "Literatura"] },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", area: "Literatura Brasileira", etiquetas: ["Aluísio Azevedo", "Literatura"] },
    { titulo: "Triste Fim de Policarpo Quaresma", autor: "Lima Barreto", area: "Literatura Brasileira", etiquetas: ["Lima Barreto", "Literatura"] },
    { titulo: "Vidas Secas", autor: "Graciliano Ramos", area: "Literatura Brasileira", etiquetas: ["Graciliano Ramos", "Literatura"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "Iracema", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Quincas Borba", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", area: "Literatura Brasileira", etiquetas: ["Macedo", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "Senhora", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", area: "Literatura Brasileira", etiquetas: ["Jorge Amado", "Literatura"] },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", area: "Literatura Brasileira", etiquetas: ["Aluísio Azevedo", "Literatura"] },
    { titulo: "Triste Fim de Policarpo Quaresma", autor: "Lima Barreto", area: "Literatura Brasileira", etiquetas: ["Lima Barreto", "Literatura"] },
    { titulo: "Vidas Secas", autor: "Graciliano Ramos", area: "Literatura Brasileira", etiquetas: ["Graciliano Ramos", "Literatura"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "Iracema", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Quincas Borba", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", area: "Literatura Brasileira", etiquetas: ["Macedo", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "Senhora", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", area: "Literatura Brasileira", etiquetas: ["Jorge Amado", "Literatura"] },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", area: "Literatura Brasileira", etiquetas: ["Aluísio Azevedo", "Literatura"] },
    { titulo: "Triste Fim de Policarpo Quaresma", autor: "Lima Barreto", area: "Literatura Brasileira", etiquetas: ["Lima Barreto", "Literatura"] },
    { titulo: "Vidas Secas", autor: "Graciliano Ramos", area: "Literatura Brasileira", etiquetas: ["Graciliano Ramos", "Literatura"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "Iracema", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Memórias de um Sargento de Milícias", autor: "Manuel Antônio de Almeida", area: "Literatura Brasileira", etiquetas: ["Manuel Antônio de Almeida", "Literatura"] },
    { titulo: "O Guarani", autor: "José de Alencar", area: "Literatura Brasileira", etiquetas: ["José de Alencar", "Literatura"] },
    { titulo: "Quincas Borba", autor: "Machado de Assis", area: "Literatura Brasileira", etiquetas: ["Machado de Assis", "Literatura"] },
    { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", area: "Literatura Brasileira", etiquetas: ["Macedo", "Literatura"] }
    
  ];

  const filteredBooks = livrosDireito.filter((livro) =>
    livro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Nav />
      <div className="container mt-4 card" style={{padding:'4rem'}}>
        <h1 className="text-center mb-4">Bibliografia Recomendada</h1>
        <div className="mb-3">
          <input style={{marginBottom:'4rem'}}
            type="text"
            className="form-control"
            placeholder="Buscar por título"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredBooks.map((livro, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{livro.titulo}</h5>
                  <p className="card-text">Autor: {livro.autor}</p>
                  <p className="card-text">Área: {livro.area}</p>
                  <p className="card-text">Etiquetas: {livro.etiquetas.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Bibliografia;