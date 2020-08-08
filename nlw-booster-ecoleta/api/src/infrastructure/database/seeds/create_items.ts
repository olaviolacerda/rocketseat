import Knex from 'knex';
import { Item } from '../../../types/item';

function createItems(): Omit<Item, 'id'>[] {
  return [
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },

  ];
}

export async function seed(knex: Knex) {
  return knex('items').insert(createItems());
}
