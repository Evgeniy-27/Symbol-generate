import Person from './person';
import Team from './team';

const player1 = new Person('Петя', 'Человек', 50, 1, 40, 10,);
const player2 = new Person('Лучник', 'Стрелок', 50, 1, 40, 10,);
const player3 = new Person('Мечник', 'Рыцарь', 100, 1, 60, 60,);

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}