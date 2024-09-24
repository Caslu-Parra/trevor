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
2. **Back-end**: Processamento das requisições e comunicação com o modelo ChatGPT.
3. **Banco de Dados**: Armazenamento de histórico e registros dos roteiros gerados.

---

## **Front-end**

### **1. Componente: Tela Principal**

Esta é a interface principal onde o usuário fornecerá os detalhes necessários para a criação do roteiro de viagem. 

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

#### **Botões:**

7. **Botão "Obter Roteiro":**
   - **Ação**: Ao clicar, o sistema coleta todas as informações fornecidas pelo usuário, cria um prompt estruturado e faz uma chamada ao modelo ChatGPT para geração do roteiro.
   - **Validação**: Todos os campos obrigatórios devem estar preenchidos antes de prosseguir.

8. **Botão "Limpar Formulário":**
   - **Ação**: Limpa todos os campos preenchidos, permitindo ao usuário iniciar um novo planejamento de viagem.

---

### **2. Componente: Tela de Histórico**

A Tela de Histórico oferece aos usuários a capacidade de visualizar os roteiros de viagem gerados anteriormente. Essa funcionalidade melhora a experiência do usuário, fornecendo acesso rápido a roteiros passados sem a necessidade de gerar novos.

#### **Funcionalidade:**
- Exibe os **últimos 10 roteiros gerados** pelo usuário.
- Armazena informações como cidade, número de dias e data de processamento.

#### **Campos Exibidos:**
1. **Cidade**: Exibe o nome(s) da(s) cidade(s) que foram usadas na pesquisa.
2. **Quantidade de Dias**: Número de dias planejados para a viagem.
3. **Data de Geração**: Data e hora em que o roteiro foi gerado.

#### **Ação:**
- O usuário pode selecionar qualquer item da lista para abrir uma modal, que exibirá o roteiro completo gerado anteriormente.

---

## **Back-end**

O back-end é responsável por receber os dados do front-end, fazer a integração com o modelo ChatGPT e armazenar as informações no banco de dados.

### **Processo de Geração do Roteiro:**

1. **Coleta de Dados:**
   - O sistema coleta os dados dos inputs fornecidos pelo usuário na tela principal, como cidade, número de dias, tipo de viagem, etc.

2. **Estruturação do Prompt:**
   - Um prompt é criado com base nas entradas do usuário, seguindo a estrutura abaixo:
   ```plaintext
   Crie um roteiro completo dia a dia para uma viagem a(s) cidade(s) {cidade}, que será feita em {dias} dia(s). Essa viagem tem como objetivo conhecer {tipo de viagem}, considerando que estarei viajando {com ou sem crianças}, {sozinho ou em grupo} e {com ou sem animais de estimação}.
   ```

3. **Exemplo de Prompt:**
   ```plaintext
   Crie um roteiro completo dia a dia para uma viagem a Paris, que será feita em 5 dias. Essa viagem tem como objetivo conhecer gastronomia do local, considerando o fato de estarei realizando uma viagem com criança, em grupo e sem animais de estimação.
   ```

4. **Processamento pelo ChatGPT:**
   - O prompt é enviado ao ChatGPT, que retorna um roteiro detalhado e personalizado.

5. **Exibição do Roteiro:**
   - O roteiro gerado é exibido em uma nova modal no front-end.

6. **Armazenamento no Banco de Dados:**
   - Após a geração do roteiro, os dados são enviados para o banco de dados.
   - **Exemplo de Query para Inserção:**
     ```sql
     INSERT INTO tabela (cidade, dias, resultado, data_processamento) 
     VALUES ('Paris', 5, '{roteiro_gerado}', '2024-09-23 14:35:00');
     ```

### **Tela de Histórico:**

1. **Consulta ao Banco de Dados:**
   - A tela de histórico exibe as últimas 10 pesquisas realizadas.
   - **Exemplo de Query de Seleção:**
     ```sql
     SELECT cidade, dias, resultado, data_processamento 
     FROM tabela 
     ORDER BY data_processamento DESC 
     LIMIT 10;
     ```

2. **Abertura do Roteiro Completo:**
   - O usuário pode visualizar um roteiro anterior ao clicar em um item na lista.

---

## **Banco de Dados**

O banco de dados é usado para armazenar as informações de roteiros gerados e garantir que o histórico de pesquisas do usuário seja preservado.

### **Estrutura da Tabela:**

- **Nome da Tabela:** `tabela`

#### **Campos:**

| **Campo**               | **Tipo**      | **Descrição**                              |
|-------------------------|---------------|--------------------------------------------|
| **Cidade**               | string        | Nome(s) da(s) cidade(s) para o roteiro.    |
| **Dias**                 | int           | Número de dias planejados para a viagem.   |
| **Resultado**            | string        | Roteiro gerado pelo ChatGPT.               |
| **Data de Processamento**| datetime      | Data e hora em que a pesquisa foi realizada.|

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
   - O sistema exibe as últimas 10 pesquisas realizadas.
   - O usuário pode visualizar roteiros completos gerados anteriormente.

---
