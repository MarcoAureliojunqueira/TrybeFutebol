export interface Iteams {
  id: number,
  teamName: string
}

export interface IteamsModel {
  // ...
  findAll(): Promise<Iteams[]>,
  findById(id: Iteams['id']): Promise<Iteams | null>
}
