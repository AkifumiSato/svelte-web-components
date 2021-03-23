import Dexie from 'dexie'

export type Counter = {
  id: number
  name: string
  count: number
}

export class SampleDatabase extends Dexie {
  counter_table: Dexie.Table<Counter, number>

  constructor() {
    super('sample-database')

    this.version(1).stores({
      counter_table: 'name, count',
    })
  }
}

export const db = new SampleDatabase()
