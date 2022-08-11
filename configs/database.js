import pg from 'pg'

export const client = new pg.Client({
  host: 'localhost',
  user: 'postgres',
  password: 'runey.2212',
  database: 'practice',
  port: '5432'
})

client.connect()