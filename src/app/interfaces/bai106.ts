export interface Bai106 {
    data: Array<Bai106Item>;
    source: any;
}
export interface Bai106Item {
    'ID Nation': string;
    'Nation': string;
    'ID Year': number;
    'Year': number;
    'Population': number;
    'Slug Nation': string;
  }
  
  export class Bai106Data {
    public id_nation: string = '';
    public nation: string = '';
    public id_year: number = 0;
    public population: number = 0;
    public slug_nation: string = '';
  }
