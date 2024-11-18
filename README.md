# Trevor - Assistente de Viagens

Trevor é um assistente de viagens inteligente que te ajuda a planejar cronogramas para suas viagens de acordo com suas necessidades. 
## Integrantes

- [@Beatriz Soares Dias - 822151019](https://www.github.com/Biaa-ds)
- [@Lucas Cesar Parra - 822166659](https://www.github.com/Caslu-Parra)
- [@Mariana Gaspar - 823129976](https://www.github.com/MarianaGasparp)
- [@Milena Porto Coyado - 822160378](https://www.github.com/mictalks)
- [@Rafael de Macedo Barbosa - 821141019](https://www.github.com/RafaelMB20)
- [@Renan dos Reis Negrão - 822148468](https://www.github.com/RenanDRN)


# **Documentação do Projeto: Sistema de Geração de Roteiros de Viagem**

---

## **Objetivo**

O objetivo deste sistema é oferecer uma plataforma interativa e prática para os usuários gerarem roteiros de viagem personalizados. O sistema utiliza o ChatGPT para criar um roteiro detalhado baseado nas preferências e características da viagem, como tipo de viagem, destino, número de dias, e presença de crianças ou animais de estimação.

## **Visão Geral**

O projeto é composto por três partes principais:
1. **Front-end**: Interface de usuário responsável pela coleta de dados e exibição dos roteiros.
Desenvolvido em ReactJS
2. **Back-end**: Processamento das requisições e comunicação com o modelo ChatGPT.
Desenvolvido em NodeJS
3. **Banco de Dados**: Armazenamento de histórico e registros dos roteiros gerados.
Desenvolvido com SQL Server

---
## **Front-end**
### **1. Componente: Left**

O componente `Left` contém os arquivos `historico.js` e `roteiro.js`.

#### **Funcionalidade:**

- **Histórico**: Exibe os roteiros gerados pelo usuário.
- **Roteiro**: Exibe detalhes de um roteiro específico.

#### **Componentes:**

1. **Historico:**
   - **Descrição**: Exibe um botão para criar um novo roteiro e uma lista de roteiros gerados anteriormente.
   - **Botão "Novo Roteiro"**: Abre a modal do componente `Forms` para criar um novo roteiro.
   - **Título "Histórico de Roteiros"**: Exibe o título da seção de histórico.
   - **Props**: Recebe `props.children` para renderizar a lista de roteiros.

2. **Roteiro:**
   - **Descrição**: Exibe um item de roteiro na lista de histórico.
   - **Imagem**: Exibe a imagem associada ao roteiro.
   - **Título**: Exibe o título do roteiro.
   - **Data**: Exibe a data de criação do roteiro.
   - **Props**: Recebe `props.img`, `props.title`, e `props.data` para renderizar as informações do roteiro.

---

### **2. Componente: Right**

O componente `Right` contém os arquivos `chat.js` e `message.js`.

#### **Funcionalidade:**

- **Chat**: Interface de chat onde o usuário pode interagir com o assistente de viagem Trevor.
- **Mensagem**: Exibe mensagens enviadas e recebidas no chat.

#### **Componentes:**

1. **Chat:**
   - **Descrição**: Exibe a interface de chat com o assistente Trevor.
   - **Imagem do Assistente**: Exibe a imagem do assistente Trevor.
   - **Nome do Assistente**: Exibe o nome "Trevor".
   - **Speed Dial**: Exibe um botão flutuante com opções de "Salvar" e "Refazer".
   - **Toast**: Exibe notificações de ações realizadas.
   - **Props**: Recebe `props.children` para renderizar as mensagens do chat.

2. **Message:**
   - **Descrição**: Exibe uma mensagem no chat.
   - **Data de Envio**: Exibe a data e hora de envio da mensagem.
   - **Lado da Mensagem**: Define se a mensagem é do assistente Trevor (esquerda) ou do usuário (direita).
   - **Imagem do Remetente**: Exibe a imagem do remetente da mensagem.
   - **Nome do Remetente**: Exibe o nome do remetente da mensagem.
   - **Conteúdo da Mensagem**: Exibe o conteúdo da mensagem.
   - **Props**: Recebe `props.dtEnvio`, `props.owner`, e `props.children` para renderizar as informações da mensagem.

---
### **1. Componente: Forms**

O componente `Forms` é uma modal que se abre com diversas informações e campos de entrada.

#### **Campos de Entrada (Inputs):**

1. **Input Nome da Cidade:**
   - **Tipo**: Texto (String)
   - **Descrição**: Campo onde o usuário insere o nome da cidade ou cidades (separadas por vírgula) que deseja visitar.
   - **Validação**: 
     - O campo não pode estar vazio.
     - Aceita múltiplos nomes de cidades separados por vírgula.
   - **Exemplo de Entrada**: `"Paris, Roma, Barcelona"`
   - **Obrigatório**: Sim

2. **Input Quantidade de Dias:**
   - **Tipo**: Número Inteiro (Int)
   - **Descrição**: Quantidade de dias disponíveis para a viagem.
   - **Validação**:
     - Deve ser um número inteiro positivo.
   - **Exemplo de Entrada**: `7`
   - **Obrigatório**: Sim

3. **Combo Box - Tipo de Viagem:**
   - **Opções**:
     - Paisagens Naturais
     - Gastronomia
     - Arquitetura
     - Cultura e Artes
     - Vida Noturna
     - Pontos Turísticos Gerais
   - **Descrição**: Seleção do tipo de viagem que o usuário deseja realizar.
   - **Validação**: 
     - Uma das opções deve ser selecionada.
   - **Obrigatório**: Sim

#### **Opções (Checkboxes):**

4. **Viajando com Criança:**
   - **Tipo**: Checkbox
   - **Descrição**: O usuário indica se está viajando com uma ou mais crianças.
   - **Validação**: Não obrigatória.
   - **Ação**: Este campo ajusta as sugestões de atividades adequadas para crianças.

5. **Viajando Sozinho:**
   - **Tipo**: Checkbox
   - **Descrição**: O usuário indica se está viajando sozinho.
   - **Validação**: Não obrigatória.
   - **Ação**: Este campo pode ajustar as sugestões para atividades e experiências mais adequadas para viajantes solo.

6. **Viajando com Animais de Estimação:**
   - **Tipo**: Checkbox
   - **Descrição**: O usuário indica se está viajando com animais de estimação.
   - **Validação**: Não obrigatória.
   - **Ação**: Este campo pode ajustar o roteiro com sugestões de locais pet-friendly.

#### **Campos de Data (Date Pickers):**

7. **Data de Partida:**
   - **Tipo**: Date Picker
   - **Descrição**: Campo onde o usuário seleciona a data de partida da viagem.
   - **Validação**: 
     - A data deve estar dentro do intervalo permitido (1900-01-01 a 2099-12-31).
   - **Obrigatório**: Sim

8. **Data de Retorno:**
   - **Tipo**: Date Picker
   - **Descrição**: Campo onde o usuário seleciona a data de retorno da viagem.
   - **Validação**: 
     - A data deve estar dentro do intervalo permitido (1900-01-01 a 2099-12-31).
   - **Obrigatório**: Sim

#### **Campo de Observações:**

9. **Observações:**
   - **Tipo**: Textarea
   - **Descrição**: Campo onde o usuário pode adicionar observações adicionais sobre a viagem.
   - **Validação**: Não obrigatória.

#### **Campo de Orçamento (Range):**

10. **Orçamento:**
    - **Tipo**: Range
    - **Descrição**: Campo onde o usuário define o orçamento disponível para a viagem.
    - **Validação**: 
      - O valor deve estar dentro do intervalo permitido (0 a 10000).
    - **Exemplo de Entrada**: `5000`
    - **Obrigatório**: Sim

#### **Botões:**

11. **Botão "Próximo":**
    - **Ação**: Avança para a próxima etapa do formulário.
    - **Validação**: Todos os campos obrigatórios da etapa atual devem estar preenchidos antes de prosseguir.

12. **Botão "Anterior":**
    - **Ação**: Retorna para a etapa anterior do formulário.

13. **Botão "Finalizar":**
    - **Ação**: Submete o formulário e envia os dados para o back-end para processamento.
    - **Validação**: Todos os campos obrigatórios devem estar preenchidos antes de submeter.

#### **Barra de Progresso:**

14. **Barra de Progresso:**
    - **Descrição**: Exibe o progresso do preenchimento do formulário em porcentagem.
    - **Cálculo**: A porcentagem é calculada com base no número de etapas concluídas.

---    
### **. Componente Raiz: Index**

O arquivo `index.js` é o ponto de entrada principal do front-end, onde os componentes são renderizados na tela principal.

#### **Funcionalidade:**

- **Renderização dos Componentes**: Renderiza os componentes `Historico`, `Chat`, `Message`, `Forms` e `Modal` na tela principal.

#### **Componentes:**

1. **Historico:**
   - **Descrição**: Exibe o histórico de roteiros gerados.
   - **Roteiros**: Exibe uma lista de roteiros gerados anteriormente.
   - **Props**: Recebe `props.children` para renderizar a lista de roteiros.

2. **Roteiro:**
   - **Descrição**: Exibe um item de roteiro na lista de histórico.
   - **Props**: Recebe `props.img`, `props.title`, e `props.data` para renderizar as informações do roteiro.

3. **Chat:**
   - **Descrição**: Exibe a interface de chat com o assistente Trevor.
   - **Mensagem**: Exibe uma mensagem de boas-vindas do assistente Trevor.
   - **Props**: Recebe `props.children` para renderizar as mensagens do chat.

4. **Message:**
   - **Descrição**: Exibe uma mensagem no chat.
   - **Props**: Recebe `props.dtEnvio`, `props.owner`, e `props.children` para renderizar as informações da mensagem.

5. **Forms:**
   - **Descrição**: Exibe o formulário para criação de um novo roteiro.
   - **Modal**: Exibe o formulário dentro de uma modal.


----
## **Back-end**

O back-end é responsável por receber os dados do front-end, fazer a integração com o modelo ChatGPT e armazenar as informações no banco de dados.

### **Processo de Geração do Roteiro:**

1. **Coleta de Dados:**
   - O sistema coleta os dados dos inputs fornecidos pelo usuário na tela principal, como cidade, número de dias, tipo de viagem, datas de partida e retorno, orçamento, e se está viajando com crianças, sozinho ou com animais de estimação.

2. **Estruturação do Prompt:**
   - Um prompt é criado com base nas entradas do usuário, seguindo a estrutura abaixo:
      ```plaintext
      Quero que você me gere 5 roteiros de viagem para: {cidade}. 
      A viagem será do tipo {tipo de viagem} e ocorrerá entre os dias {data de partida} e {data de retorno}. 
      Estarei viajando {sozinho ou com companhia}, 
      {com ou sem crianças}, 
      {com ou sem animais de estimação}. 
      Pretendo gastar até {orçamento} por pessoa. E tenho as seguintes observações: {observações}.
         ```

3. **Exemplo de Prompt:**
      ```plaintext
      Quero que você me gere 5 roteiros de viagem para: Paris. 
      A viagem será do tipo gastronomia e ocorrerá entre os dias 2024-06-01 e 2024-06-06. 
      Estarei viajando com companhia, 
      com crianças, 
      sem animais de estimação. 
      Pretendo gastar até 5000 por pessoa. E tenho as seguintes observações: sem observações.
4. **Processamento pelo ChatGPT:**
      - O prompt é enviado ao ChatGPT, que retorna um roteiro detalhado e personalizado.

5. **Exibição do Roteiro:**
      - O roteiro gerado é exibido no front-end.

### **Tela de Histórico:**

1. **Consulta ao Banco de Dados:**
      - A tela de histórico exibe as últimas pesquisas realizadas.
      - **Query de Seleção:**
      ```sql
      SELECT rot.id_exeo, rot.dt_exeo, rot.id_historico, hst.nome_destino
      FROM log_roteiro rot LEFT JOIN historico hst ON rot.id_historico = hst.id`); ```

2. **Abertura do Roteiro Completo:**
      - O usuário pode visualizar um roteiro anterior ao clicar em um item na lista.

   ---

   ## **Banco de Dados**

   O banco de dados é usado para armazenar as informações de roteiros gerados e garantir que o histórico de pesquisas do usuário seja preservado.

   ### **Conexão com o Banco de Dados:**

   A conexão com o banco de dados é feita utilizando o módulo `pg` do Node.js e um certificado SSL para garantir a segurança da conexão.



   ### **Estrutura da Tabela:**

   - **Nome da Tabela:** [`historico`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmarianagaspar%2FDocuments%2Ftrevor%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A314%2C%22character%22%3A26%7D%7D%5D%2C%22cd195c37-5350-42f4-a286-7faa4d655e5d%22%5D "Go to definition")

   #### **Campos:**

   | **Campo**               | **Tipo**      | **Descrição**                              |
   |-------------------------|---------------|--------------------------------------------|
   | **dt_ida**              | date          | Data de partida da viagem.                 |
   | **dt_volta**            | date          | Data de retorno da viagem.                 |
   | **nome_destino**        | string        | Nome(s) da(s) cidade(s) para o roteiro.    |
   | **tipo_viagem**         | string        | Tipo de viagem (ex: Gastronomia, Cultura). |
   | **viajando_sozinho**    | boolean       | Indica se o usuário está viajando sozinho. |
   | **tem_animal**          | boolean       | Indica se o usuário está viajando com animais de estimação. |
   | **valor_pessoa**        | int           | Orçamento por pessoa.                      |
   | **obs_viagem**          | string        | Observações adicionais sobre a viagem.     |
   | **tem_crianca**         | boolean       | Indica se o usuário está viajando com crianças. |

   - **Nome da Tabela:** `log_roteiro`

   #### **Campos:**

   | **Campo**               | **Tipo**      | **Descrição**                              |
   |-------------------------|---------------|--------------------------------------------|
   | **res_message**         | string        | Mensagem de resposta do ChatGPT.           |
   | **dt_exeo**             | datetime      | Data e hora em que a execução foi realizada. |
   | **id_historico**        | int           | ID do histórico associado.                 |
      

   ---

   ## **Validações e Tratamento de Erros**

   ### **Validações no Front-end:**
   - Verificar se os campos obrigatórios foram preenchidos.
   - Garantir que o número de dias seja um valor inteiro positivo.

   ### **Validações no Back-end:**
   - Checar se os dados enviados pelo front-end estão corretos antes de enviar o prompt para o ChatGPT.
   - Gerenciar erros de resposta do ChatGPT, garantindo que respostas incompletas ou inválidas sejam tratadas corretamente.

   ---

   ## **Fluxo Resumido**

   1. **Tela Principal:**
      - O usuário preenche as informações necessárias para a viagem.
      - O sistema gera um roteiro via ChatGPT.
      - O roteiro é exibido e salvo no banco de dados.

   2. **Tela de Histórico:**
      - O sistema exibe as últimas pesquisas realizadas.
      - O usuário pode visualizar roteiros completos gerados anteriormente.

   ---
