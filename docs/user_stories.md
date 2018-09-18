# Histórias de Usuário
<p align="justify">
O escopo do projeto foi delimitado levando em conta as necessidades do público alvo, que foram elicitadas através da aplicação de um questionário que contempla o processo atual de como é realizado o controle de gastos através de notas fiscais (se houver e, caso não exista, explora os motivos de não ser realizado) e como esse controle poderia ser feito em um processo ideal de acordo com o ponto de vista de quem está respondendo o questionário.
</p>

<p align="justify">
Definidas as funcionalidades, o público também respondeu quais delas são mais ou menos interessantes. Assim, as histórias puderam ser priorizadas para que fosse possível começar a gerar valor mais rapidamente.
</p>

<p align="justify">
Tendo isso em mãos, uma estimativa preliminar de pontuação foi realizada para fins de planejamento. Para pontuar, o time escolheu uma história que julgasse de menor pontuação que foi utilizada como parâmetro ao longo da pontuação de todas as histórias. Os critérios utilizados para maior ou menor pontuação foram valor para a entrega (prioridade) e esforço para sua realização.
</p>

<p align="justify">
É importante frisar que o <i>backlog</i> sofrerá ajustes ao longo do andamento do projeto para que as necessidades sejam todas atendidas. Esses ajustes incluem também os pontos, que devem ser reanalisados a cada <i>sprint</i> para que se mantenham sempre alinhados com a evolução de nível técnico da equipe.
</p>

## Épico 01 - Gerenciamento do Sistema de Contas
### Feature 01 - Manter Empresas

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-s6z2{text-align:center}
.tg .tg-wcrb{font-weight:bold;background-color:#0f8891;color:#f7f7f7;text-align:center}
.tg .tg-s268{text-align:left}
</style>
<table class="tg">
  <tr>
    <th class="tg-wcrb">ID</th>
    <th class="tg-wcrb">História de Usuário</th>
    <th class="tg-wcrb">Prioridade</th>
    <th class="tg-wcrb">Pontos</th>
  </tr>
  <tr>
    <td class="tg-s6z2">US01</td>
    <td class="tg-s268">Eu, como administrador de empresa, desejo cadastrar minha empresa no sistema para que eu possa ter controle dos gastos da minha empresa.</td>
    <td class="tg-s6z2">Muito alta</td>
    <td class="tg-s6z2">13</td>
  </tr>
  <tr>
    <td class="tg-s6z2">US02</td>
    <td class="tg-s268">Eu, como administrador de empresa, desejo desativar minha conta para que eu possa dispensar os serviços do sistema.</td>
    <td class="tg-s6z2">Baixa</td>
    <td class="tg-s6z2">3</td>
  </tr>
</table>

### Feature 02 - Manter Usuários

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-ukcy{font-weight:bold;background-color:#0f8891;color:#f7f7f7;border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ukcy">ID</th>
    <th class="tg-ukcy">História de Usuário</th>
    <th class="tg-ukcy">Prioridade</th>
    <th class="tg-ukcy">Pontos</th>
  </tr>
  <tr>
    <td class="tg-uys7">US03</td>
    <td class="tg-xldj">Eu, como administrador de empresa, desejo vincular um funcionário a minha empresa no sistema para que ele tenha acesso às notas fiscais dos gastos da minha empresa e registrar novas notas.</td>
    <td class="tg-uys7">Média</td>
    <td class="tg-uys7">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US04</td>
    <td class="tg-0pky">Eu, como administrador de empresa, desejo conceder a um usuário permissões de administrador para que ele possa gerenciar usuários.</td>
    <td class="tg-c3ow">Média</td>
    <td class="tg-c3ow">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US05</td>
    <td class="tg-0pky">Eu, como administrador do sistema, desejo listar os usuários vinculados à minha empresa para que eu possa gerenciar usuários.</td>
    <td class="tg-c3ow">Média</td>
    <td class="tg-c3ow">2</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US06</td>
    <td class="tg-0pky">Eu, como administrador de empresa, desejo excluir o vínculo de um funcionário para que ele não tenha mais acesso às informações da minha empresa.</td>
    <td class="tg-c3ow">Baixa</td>
    <td class="tg-c3ow">2</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US07</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo alterar minha senha para manter a segurança dos meus dados.</td>
    <td class="tg-c3ow">Alta</td>
    <td class="tg-c3ow">5</td>
  </tr>
  <tr>
    <td class="tg-uys7">US08</td>
    <td class="tg-xldj">Eu, como usuário do sistema, desejo recuperar minha senha para ter acesso ao sistema caso eu a esqueça.</td>
    <td class="tg-uys7">Muito alta</td>
    <td class="tg-uys7">8</td>
  </tr>
</table>

## Épico 02 - Notas Fiscais
### Feature 03 - Manter notas fiscais
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-ukcy{font-weight:bold;background-color:#0f8891;color:#f7f7f7;border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ukcy">ID</th>
    <th class="tg-ukcy">História de Usuário</th>
    <th class="tg-ukcy">Prioridade</th>
    <th class="tg-ukcy">Pontos</th>
  </tr>
  <tr>
    <td class="tg-uys7">US10</td>
    <td class="tg-xldj">Eu, como usuário do sistema, desejo poder editar o envio de uma nota fiscal para que eu possa corrigir dados incorretos na extração dos dados da nota.</td>
    <td class="tg-uys7">Média</td>
    <td class="tg-uys7">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US11</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo poder digitar os dados de uma nota manualmente para que eu possa incluir uma nota com dificuldades de leitura.</td>
    <td class="tg-c3ow">Média</td>
    <td class="tg-c3ow">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US12</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo excluir uma nota fiscal para que eu possa dispensar uma nota que não precisa exisitr no sistema.</td>
    <td class="tg-c3ow">Baixa</td>
    <td class="tg-c3ow">2</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US13</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo visualizar uma lista de todas as notas fiscais submetidas para ter acesso a todas as notas.</td>
    <td class="tg-c3ow">Muito alta</td>
    <td class="tg-c3ow">8</td>
  </tr>
  <tr>
    <td class="tg-baqh">US14</td>
    <td class="tg-0lax">Eu, como usuário do sistema, desejo visualizar uma nota detalhadamente para que eu possa verificar os dados.</td>
    <td class="tg-baqh">Muito alta</td>
    <td class="tg-baqh">8</td>
  </tr>
  <tr>
    <td class="tg-baqh">US32</td>
    <td class="tg-0lax">Eu, como usuário do sistema, desejo que os dados da nota fiscal fiquem armazenados no sistema para que eu possa gerar relatórios a partir delas e consultá-las.</td>
    <td class="tg-baqh">Muito alta</td>
    <td class="tg-baqh">8</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US15</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo filtrar notas para que eu possa encontrar notas de acordo com o critério definido.</td>
    <td class="tg-c3ow">Muito alta</td>
    <td class="tg-c3ow">13</td>
  </tr>
</table>

### Feature 04 - Extração e interpretação dos dados
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-ukcy{font-weight:bold;background-color:#0f8891;color:#f7f7f7;border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ukcy">ID</th>
    <th class="tg-ukcy">História de Usuário</th>
    <th class="tg-ukcy">Prioridade</th>
    <th class="tg-ukcy">Pontos</th>
  </tr>
  <tr>
    <td class="tg-uys7">US16</td>
    <td class="tg-xldj">SPIKE: Eu, como desenvolvedor, desejo entender o padrão de notas fiscais para que eu aprenda como interpretar suas informações.</td>
    <td class="tg-uys7">Muito alta</td>
    <td class="tg-uys7">8</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US17</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo que uma nota fiscal submetida seja interpretada para que seus dados sejam disponibilizados de uma forma mais acessível. </td>
    <td class="tg-c3ow">Muito alta</td>
    <td class="tg-c3ow">21</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US18</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo que categorias sejam adicionadas aos meus gastos para que eu possa ter uma classificação das minhas compras.</td>
    <td class="tg-c3ow">Média</td>
    <td class="tg-c3ow">0</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US31</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo utilizar uma interface gráfica para realizar o upload de notas fiscais.</td>
    <td class="tg-c3ow">Muito alta</td>
    <td class="tg-c3ow">8</td>
  </tr>
  <tr>
    <td class="tg-baqh">US19</td>
    <td class="tg-0lax">Eu, como usuário do sistema, desejo fazer o upload de uma nota fiscal para que os dados das notas fiscais fiquem salvos no sistema.</td>
    <td class="tg-baqh">Muito alta</td>
    <td class="tg-baqh">13</td>
  </tr>
</table>

## Épico 03 - Relatórios de Gastos
### Feature 05 - Manter relatórios
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-ukcy{font-weight:bold;background-color:#0f8891;color:#f7f7f7;border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ukcy">ID</th>
    <th class="tg-ukcy">História de Usuário</th>
    <th class="tg-ukcy">Prioridade</th>
    <th class="tg-ukcy">Pontos</th>
  </tr>
  <tr>
    <td class="tg-uys7">US20</td>
    <td class="tg-xldj">Eu, como usuário do sistema, desejo gerar um relatório de notas fiscais em um período selecionado para que eu possa ter uma lista de todos os gastos dessas datas.</td>
    <td class="tg-uys7">Alta</td>
    <td class="tg-uys7">8</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US21</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo que o sistema gere relatórios periodicamente para que eu possa ter acesso a relatórios nas datas desejadas.</td>
    <td class="tg-c3ow">Muito baixa</td>
    <td class="tg-c3ow">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US22</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo gerar um relatório de notas fiscais filtrado por categorias.</td>
    <td class="tg-c3ow">Média</td>
    <td class="tg-c3ow">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US23</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo visualizar uma lista de todos os relatórios salvos para que eu possa ter acesso a todos os relatórios.</td>
    <td class="tg-c3ow">Baixa</td>
    <td class="tg-c3ow">3</td>
  </tr>
  <tr>
    <td class="tg-baqh">US24</td>
    <td class="tg-0lax">Eu, como usuário do sistema, desejo visualizar um relatório em detalhes para que eu possa ver os seus dados.</td>
    <td class="tg-baqh">Muito alta</td>
    <td class="tg-baqh">8</td>
  </tr>
    <tr>
    <td class="tg-uys7">US25</td>
    <td class="tg-xldj">Eu, como usuário do sistema, desejo apagar um relatório para que eu possa excluir um relatório indesejado no sistema.</td>
    <td class="tg-uys7">Muito baixa</td>
    <td class="tg-uys7">2</td>
  </tr>
</table>

### Feature 06 - Geração de gráficos
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-ukcy{font-weight:bold;background-color:#0f8891;color:#f7f7f7;border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ukcy">ID</th>
    <th class="tg-ukcy">História de Usuário</th>
    <th class="tg-ukcy">Prioridade</th>
    <th class="tg-ukcy">Pontos</th>
  </tr>
  <tr>
    <td class="tg-uys7">US26</td>
    <td class="tg-xldj">Eu, como usuário do sistema, desejo que gráficos sejam gerados a partir dos gastos em impostos para que eu possa ter maior controle financeiro.</td>
    <td class="tg-uys7">Alta</td>
    <td class="tg-uys7">8</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US27</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo que gráficos sejam gerados a partir dos gastos totais para que eu possa ter maior controle financeiro.</td>
    <td class="tg-c3ow">Alta</td>
    <td class="tg-c3ow">8</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US28</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo que gráficos sejam gerados a partir de categorias para que eu possa ter maior controle financeiro.</td>
    <td class="tg-c3ow">Alta</td>
    <td class="tg-c3ow">8</td>
  </tr>
</table>

### Feature 07 - Exportação de relatórios
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-ukcy{font-weight:bold;background-color:#0f8891;color:#f7f7f7;border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ukcy">ID</th>
    <th class="tg-ukcy">História de Usuário</th>
    <th class="tg-ukcy">Prioridade</th>
    <th class="tg-ukcy">Pontos</th>
  </tr>
  <tr>
    <td class="tg-uys7">US29</td>
    <td class="tg-xldj">Eu, como usuário do sistema, desejo baixar um relatório em formato de planilha para que eu possa ter uma versão exportadas meus gastos.</td>
    <td class="tg-uys7">Média</td>
    <td class="tg-uys7">5</td>
  </tr>
  <tr>
    <td class="tg-c3ow">US30</td>
    <td class="tg-0pky">Eu, como usuário do sistema, desejo enviar um relatório por e-mail para que eu possa manter colaboradores a par dos relatórios.</td>
    <td class="tg-c3ow">Muito baixa</td>
    <td class="tg-c3ow">3</td>
  </tr>
</table>

***
O total de pontos estipulados para o escopo até a Release 2 é de **213 pontos**.