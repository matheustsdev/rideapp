import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IVacancy, Vacancy } from '../components/Vacancy';

const mockedVacancies: IVacancy[] = [
  {
    id: '1',
    name: '',
    avaiable: true,
  },
  {
    id: '2',
    name: 'Neitan',
    avaiable: false,
  },
];

const Home: NextPage = () => {
  return (
    <div>
      {mockedVacancies.map((vancancy) => {
        return <Vacancy vacancy={vancancy} key={vancancy.id} />;
      })}
    </div>
  );
};

export default Home;
