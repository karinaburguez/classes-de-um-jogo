# Desafio: Escrevendo as Classes de um Jogo

Este repositório contém a solução do desafio "Escrevendo as Classes de um Jogo" do Bootcamp GFT Start #6 - Lógica de Programação. O objetivo do desafio era criar uma classe que representa um herói de aventura com propriedades e métodos específicos.

## Descrição do Projeto

A classe `Heroi` possui as seguintes propriedades:
- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: O tipo de herói (ex: guerreiro, mago, monge, ninja).

Além disso, a classe contém um método chamado `atacar`, que exibe uma mensagem personalizada de ataque com base no tipo do herói.

## Funcionamento

O método `atacar` gera uma mensagem no seguinte formato:
```
O {tipo} atacou usando {ataque}
```
onde `{tipo}` é o tipo do herói e `{ataque}` varia de acordo com o tipo:
- Mago: usa magia.
- Guerreiro: usa espada.
- Monge: usa artes marciais.
- Ninja: usa shuriken.

## Exemplo de Uso

```javascript
const heroi = new Heroi('Gandalf', 300, 'mago');
heroi.atacar(); // Saída: O mago atacou usando magia
```

## Tecnologias Utilizadas
- JavaScript