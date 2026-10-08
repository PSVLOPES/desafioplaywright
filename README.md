## 2. Parte 1 – Análise dos Cenários

**Tempo sugerido:** 4 minutos

Antes de executar os testes, identifique os principais cenários considerados importantes para validar a funcionalidade.

Não é necessário escrever casos de teste completos. Liste apenas os cenários considerados relevantes.

### Cenários identificados

1. Consulta utilizando um número de processo existente.
2. Consulta utilizando um número de processo inexistente.
3. Consulta sem preencher o número do processo.
4. Consulta utilizando um número de processo com menos de 20 dígitos.
5. Validação do CAPTCHA.
6. Consulta cruzada utilizando mais de um filtro, com informações inexistentes ou divergentes.

---

## Problemas Encontrados

### Problema 1 – Quando não preencho o campo numero do processo (obrigatório) e preeencho o campo chave documento e submeto clicando no botão Consultar, ele faz a busca, quando na verdade deveria dizer que o número do processo é um campo obrigatório. Deveria tb conter uma identificação nesse campo (*) para o user saber que aquele é um campo obrigatório.

### Problema 2 – Consulta cruzada nâo obedecendo os filtros. Basta colocar o numero do processo valido que ele faz a busca independente se coloquei a informação no outro filtro de acordo com o número do processo.

### Problema 3 – Se nao preencho o numero do processo e preencho algum dos outros campos, ele só está dizendo que o campo numero do processo é obrigatório no campo chave processo.
