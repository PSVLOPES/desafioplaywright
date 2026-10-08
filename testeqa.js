const { test, expect } = require('@playwright/test');


const URL = 'https://eproc1g-cp.tjrj.jus.br/eproc/externo_controlador.php?acao=processo_consulta_publica';
const PROCESSO_VALIDO = '00123456720238190001';
const PROCESSO_INEXISTENTE = '98989898989898989898';

test.describe('Consulta Processual - eproc TJERJ', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  
  test('Cenário Positivo: Consulta com processo existente', async ({ page }) => {
    await page.locator('#txtNumProcesso').fill(PROCESSO_VALIDO);
    await page.locator('#sbmNovo').click();

    // Aqui eu valido se a pagina de sucesso com os dados do processo, abriu
    await expect(page.getByText('Consulta Processual - Detalhes do Processo')).toBeVisible();
  });



  test('Cenário Negativo: Consulta com processo inexistente', async ({ page }) => {
    await page.locator('#txtNumProcesso').fill(PROCESSO_INEXISTENTE);
    await page.locator('#sbmNovo').click();

    // Aqui eu valido se no rodapé da pagina exibiu que nenhum registro foi localizado
    await expect(page.getByText('Nenhum registro encontrado.')).toBeVisible();
  });

});