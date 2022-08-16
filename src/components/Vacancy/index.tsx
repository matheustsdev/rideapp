import { BiSend } from 'react-icons/bi';

import styles from './styles.module.scss';

export interface IVacancy {
  id: string;
  name?: string;
  avaiable: boolean;
}

interface IVacancyComponent {
  vacancy: IVacancy;
}

export function Vacancy({ vacancy }: IVacancyComponent) {
  const { avaiable, name } = vacancy;
  return (
    <>
      {avaiable ? (
        <div className={styles.avaiable}>
          <form>
            <input />
            <button type="submit">
              <BiSend />
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.occupied}>
          <h3>{name}</h3>
        </div>
      )}
    </>
  );
}
