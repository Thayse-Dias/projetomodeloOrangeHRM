🧪 Plano de Testes - OrangeHRM (Demo)

📌 1. Identificação do Projeto

|Item | Descrição |
|Nome do Projeto | OrangeHRM – Sistema de Gestão de Recursos Humanos |
|Versão Avaliada | Demo pública (versão mais recente disponível) |
|Ambiente de Testes | https://opensource-demo.orangehrmlive.com |
|Tipo de Teste | Teste Manual Funcional |
|Data do Documento | 12/12/2025 |
|Responsável / Autora | Thayse Dias |
|Formação | Análise e Desenvolvimento de Sistemas |

---

🎯 2. Objetivo

Realizar a verificação manual dos principais requisitos funcionais do OrangeHRM Demo, com foco na validação de fluxos críticos, comportamento esperado da interface, mensagens de erro, consistência de dados e experiência do usuário. O objetivo é garantir que as funcionalidades essenciais atendam às expectativas de uso em um ambiente real.

---

🧩 3. Escopo

Em Escopo (In)

- Autenticação de usuário (login/logout)
- Dashboard e navegação geral
- Gestão de funcionários (PIM)
- Gestão de férias e licenças (Leave)
- Recrutamento (Recruitment)
- Administração e gerenciamento de usuários (Admin)
- Controle de ponto e presença (Time)
- Relatórios (Reports)
- Diretório de colaboradores (Directory)
- Manutenção e logs de auditoria (Maintenance)
- Qualificações pessoais (My Info > Qualifications)

Fora de Escopo (Out)

- Testes de integração com sistemas externos
- Testes em dispositivos móveis e responsividade avançada
- Testes de desempenho, carga e segurança
- Testes de API ou backend
- Testes de acessibilidade (WCAG)
- Testes de regressão automatizados

---

🔧 4. Ferramentas Utilizadas

- Navegadores: Google Chrome (versão mais recente) e Mozilla Firefox
- Ferramentas de inspeção: DevTools (F12) do navegador
- Captura de tela e gravação: JAM, Snipping Tool, Lightshot, Loom ou similar
- Registro de casos e evidências: Google Sheets ou Microsoft Excel
- Gerenciamento de defeitos: Google Sheets (simulação) ou Jira (quando aplicável)

---

🧪 5. Técnicas de Teste

- Particionamento de equivalência e análise de valores limite
- Caminho feliz (Happy Path)
- Testes negativos (cenários de erro)
- Testes exploratórios (validação de usabilidade)
- Testes de permissão (Admin vs. ESS)

**Nota:* Caminho Feliz (Happy Path) é uma técnica de teste que valida o cenário ideal ou mais comum de uso de uma funcionalidade, ou seja, quando tudo ocorre exatamente como esperado, sem erros, exceções ou condições especiais.
Resumindo: Caminho Feliz = teste do que deve dar certo quando tudo está certo.

---

📄 6. Critérios de Aceitação

- 100% dos casos de teste críticos e de alta prioridade aprovados
- Ausência de defeitos críticos ou de alta gravidade nas funcionalidades principais
- Mensagens de erro claras, consistentes e em português (quando aplicável)
- Fluxos completos executados sem travamentos ou erros inesperados

---

🚦 7. Critérios de Saída (Exit Criteria)

- Todos os casos de teste definidos no escopo foram executados
- Defeitos encontrados foram documentados, reproduzidos e retestados (quando corrigidos)
- Evidências (screenshots/vídeos) completas e organizadas por requisito
- Relatório final de execução entregue

---

⏱️ 8. Cronograma Estimado

|Atividade | Data Início | Data Fim |
|Planejamento e elaboração do plano | 10/12/2025 | 10/12/2025 |
|Criação dos casos de teste | 11/12/2025 | 12/12/2025 |
|Execução dos testes manuais | 12/12/2025 | 13/12/2025 |
|Registro e análise de defeitos | 13/12/2025 | 14/12/2025 |
|Encerramento e entrega de evidências | 15/12/2025 | 15/12/2025 |

---

📋 9. Módulos a Serem Testados

|Código | Descrição | Prioridade |
|RF01 | Autenticação de Usuário | Alta |
|RF02 | Dashboard e Navegação | Média |
|RF03 | PIM – Gestão de Funcionários | Alta |
|RF04 | Leave – Gestão de Férias/Licenças | Alta |
|RF05 | Recruitment – Recrutamento | Média |
|RF06 | Admin – Administração e Usuários | Alta |
|RF07 | Time – Controle de Ponto | Média |
|RF08 | Reports – Relatórios | Média |
|RF09 | Directory – Diretório | Baixa |
|RF10 | Maintenance – Manutenção e Logs | Baixa |
|RF11 | My Info – Qualificações | Média | 

---

🐞 10. Gestão de Defeitos

Defeitos serão registrados com os seguintes campos obrigatórios:

- ID do defeito
- Título
- Descrição detalhada
- Passos para reproduzir
- Evidência (screenshot ou vídeo)
- Gravidade (Crítica, Alta, Média, Baixa)
- Status (Aberto, Em análise, Corrigido, Reaberto, Fechado)
Responsável

**Ferramenta sugerida: Google Sheets (template personalizado) ou Jira (para simulação profissional).*

---

📌 11. Riscos Identificados e Mitigação

|Risco | Impacto | Probabilidade | Mitigação |
|Sistema demo indisponível ou lento | Alto | Média | Agendar testes em horários de menor uso; tentar novamente após intervalo |
|Dados da demo não persistentes (reset) | Médio | Alta | Executar cenários sequencialmente; recriar dados quando necessário |
|Limitação de usuários (apenas Admin/ESS) | Médio | Alta | Documentar restrição no escopo; testar permissões com usuários existentes |
|Alterações inesperadas na interface demo | Baixo | Baixa | Monitorar changelog oficial da OrangeHRM |

---

📁 12. Entregáveis

1. Plano de Testes (este documento – .md ou .pdf)
2. Matriz de Casos de Teste (detalhada com ID, descrição, passos, resultado esperado e status)
3. Evidências de Execução (pasta organizada por RF com screenshots e vídeos)
4. Registro de Defeitos (planilha ou ferramenta)
5. Relatório Final de Execução (resumo dos resultados, taxa de aprovação, defeitos encontrados e recomendações)

---

**Este plano foi elaborado com estrutura profissional, linguagem clara e objetiva, adequado para apresentação em reuniões de projeto, auditorias ou entrega a stakeholders.*