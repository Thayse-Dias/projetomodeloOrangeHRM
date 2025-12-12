## Testes Manuais – OrangeHRM (Versão Demo)

**Site utilizado:**
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

**Credenciais padrão para testes:**

- Usuário Admin: Admin
- Senha: admin123
---

### **Introdução aos Testes Manuais**

Os testes manuais consistem na execução manual de casos de teste por um profissional de qualidade, sem o auxílio de ferramentas de automação. Eles são essenciais para validar a usabilidade, a experiência do usuário, a navegação intuitiva e comportamentos inesperados que scripts automatizados podem não capturar.

Importância dos testes manuais:

- Identificam problemas de interface e usabilidade (ex.: layout responsivo, mensagens de erro claras).
- Verificam fluxos complexos e cenários edge cases.
- Complementam testes automatizados, garantindo qualidade integral do software.
- São ideais para sistemas como o OrangeHRM, onde a interação humana (ex.: aprovação de férias, edição de dados) é crítica.

---

## 📦 Requisitos Funcionais (RF) – Cobertura de Testes Manuais

### 🔐 **RF01 – Autenticação de Usuário**

1. O sistema deve permitir login com credenciais válidas.
2. Deve exibir mensagem de erro clara em caso de credenciais inválidas.
3. Deve bloquear tentativas excessivas (se aplicável).
4. Deve permitir logout seguro.

---

### 🏠 **RF02 – Painel Inicial (Dashboard)**

Após login, o painel principal deve exibir widgets e atalhos rápidos.
Funcionalidades esperadas:

- Widgets: Empregados Ausentes Hoje, Avisos, Fluxo de Trabalho Pendente, etc.
- Navegação pelos menus laterais (Admin, PIM, Leave, Time, Recruitment, etc.).
- Acesso rápido a módulos principais.
- Responsividade em diferentes resoluções.

---

### 👤 **RF03 – Gestão de Funcionários (Módulo PIM – Employee Management)**

Gerenciamento completo dos colaboradores.
Funcionalidades esperadas:

- Listagem de funcionários com paginação e ordenação.
- Filtros avançados: nome, ID, cargo, status, unidade, supervisor.
- Botão “Adicionar” para cadastro de novo funcionário (dados pessoais, contato, emprego, salário, etc.).
- Edição e exclusão de registros existentes.
- Visualização detalhada do perfil do funcionário (My Info).

---

### 📅 **RF04 – Gerenciamento de Férias (Leave Module)**

Gerenciamento de solicitações e saldos de licenças.
Funcionalidades esperadas:

- Filtros por data, status (Pendente, Aprovado, Rejeitado), nome do colaborador.
- Aprovação/rejeição de solicitações com justificativa.
- Consulta de saldo de férias por funcionário e tipo de licença.
- Solicitação de licença pelo próprio funcionário (ESS).

---

### 🧾 **RF05 – Recrutamento (Recruitment Module)**

Gestão de vagas e candidatos.
Funcionalidades esperadas:

- Listagem de vagas abertas e candidaturas.
- Adição de novos candidatos (manual ou via formulário público).
- Filtros por nome, cargo, status da candidatura.
- Fluxo de entrevista, agendamento e avaliação.

---

### 🛠️ **RF06 - Administração (Admin Module)**

Gerenciamento de usuários, permissões e configurações globais.
Funcionalidades esperadas:

- Criação, edição e exclusão de usuários do sistema.
- Atribuição de papéis e permissões (Admin, ESS, Supervisor).
- Filtros por nome, status e tipo de usuário.
- Configurações de empresa, localização, cargo, salário, etc.

---

### ⏱ **RF07 – Controle de Ponto e Presença (Time & Attendance Module)**

Registro e gerenciamento de horários.
Funcionalidades esperadas:

- Visualização de registros de entrada/saída por funcionário.
- Filtros por nome, data, status e localização.
- Geração de relatórios de presença e horas trabalhadas.
- Edição manual de registros (com justificativa).

---

### 📈 **RF08 – Relatórios (Reports Module)**

Geração de relatórios personalizados e pré-definidos.
Funcionalidades esperadas:

- Seleção de tipo de relatório (Employee Details, Leave Summary, Attendance, etc.).
- Filtros personalizados (período, departamento, status).
- Exportação em PDF, CSV ou Excel.
- Visualização em tela.

---

### 📂 **RF09 – Diretório (Directory Module)**

Lista pública de colaboradores.
Funcionalidades esperadas:

- Filtros por nome, cargo, localização e departamento.
- Exibição de informações básicas (foto, telefone, e-mail).
- Pesquisa rápida.

---

### ⚙️ **RF10 – Manutenção (Maintenance Module)**

Controle de senhas, logs e auditoria.
Funcionalidades esperadas:

- Acesso protegido (requer reautenticação).
- Visualização de logs de auditoria (ações no sistema).
- Filtros por data, usuário e tipo de ação.
- Limpeza de dados (se aplicável).

---

## 🎓 **RF11 – Qualificações (My Info > Qualifications)**

Gerenciamento de qualificações pessoais do funcionário.
Funcionalidades esperadas:

- Adição, edição e remoção de educação, habilidades, idiomas, licenças e certificações.
- Upload de documentos comprobatórios (PDF, imagem, etc.).
- Visualização do histórico completo.

---

Recomendações Finais

Execute os testes em navegadores Chrome, Firefox e Edge
Registre screenshots e vídeos de cada caso (especialmente defeitos)
Teste com usuário Admin e ESS (funcionário comum) para validar permissões
Documente qualquer anomalia com prioridade (Alta/Média/Baixa) e passos para reproduzir

---

Este documento foi revisado e aprimorado para maior clareza, consistência, profissionalismo e cobertura completa dos principais módulos do OrangeHRM Demo.

---
Autora: Thayse Dias
Formação: Análise e Desenvolvimento de Sistemas
Ano do documento: 12/2025
