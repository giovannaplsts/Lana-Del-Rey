function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value 

    if (!campoPesquisa) {
section.innerHTML = "<p>A busca não retornou resultados. Você não digitou uma pesquisa.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
       
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo  = "";
    let descricao = ""  ;
    let tags = "";  
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
titulo = dado.titulo.toLowerCase()
descricao = dado.descricao.toLowerCase()
tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
          `; 
        }
       
      // Constrói o HTML para cada item do resultado da pesquisa
      
    }
  
    if(!resultados) {
        resultados = "<p>Nenhum resultado foi encontrado</p>"
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }





