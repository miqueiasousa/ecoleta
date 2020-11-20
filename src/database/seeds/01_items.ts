import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export async function seed (knex: knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('items').del()

  // Inserts seed entries
  await knex('items').insert([
    {
      title: 'Pilhas e Baterias',
      image_url: `${process.env.BASE_URL}/uploads/baterias.svg`
    },
    {
      title: 'Resíduos Eletrônicos',
      image_url: `${process.env.BASE_URL}/uploads/eletronicos.svg`
    },
    {
      title: 'Lâmpadas',
      image_url: `${process.env.BASE_URL}/uploads/lampadas.svg`
    },
    {
      title: 'Óleo de Cozinha',
      image_url: `${process.env.BASE_URL}/uploads/oleo.svg`
    },
    {
      title: 'Resíduos Orgânicos',
      image_url: `${process.env.BASE_URL}/uploads/organicos.svg`
    },
    {
      title: 'Papéis e Papelão',
      image_url: `${process.env.BASE_URL}/uploads/papeis-papelao.svg`
    }
  ])
};
