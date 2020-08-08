
# Flexbox - Rocketseat

- `display: flex` na div para alinhamento dos elementos;
- `display: flex` alinha horizontalmente sempre;
- `flex-direction` muda a direção dos items filhos do elemento flex;
- `align-items` com `row` alinha elementos verticalmente;
- `justify-content` com `row` alinha elementos horizontalmente;
- `align-items` com `column` alinha elementos horizontalmente, sempre alinha no eixo oposto do `flex-direction`;
- `justify-content` com `column` alinha elementos verticalmente, sempre alinha no eixo do `flex-direction`;
- `flex-grow` diz que o elemento aceita ser aumentado;
- `flex-shrink` diz se o elemento tem a capacidade de se expremer para caber no container;
- `flex` soma do `flex-grow` + `flex-shrink` + `flex-basis` (tamanho padrão antes de aumentar ou diminuir) (e.g. `flex: 1 0 auto`);
- `flex-wrap` quebra linha dos elementos caso não caibam no container, sem expremer;
- Com o `flex-wrap` ganhamos uma nova propriedade de alinhamento `align-content`, alinha quando os elementos possuem mais de uma linha;
- Reseta os elementos: ` 
 {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
 }
`;
 - Deixar fonte com melhor estilo possível:   `{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }`
  
- `::after` adiciona algo antes do elemento fechar (e.g. `::after </li>`);
- `box-shadow` X, Y, BLUR, COLOR;
