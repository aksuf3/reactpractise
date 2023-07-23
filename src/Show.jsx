import { People } from "./People";
import {getImageUrl} from "./utils"

export default function List() {
    const chemist = People.filter((person) => person.profession === 'chemist');
  
    const listItems = chemist.map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b> {'' + person.profession + ''} know for {person.accomplishment}
        </p>
      </li>
    ));
  
    return <ul>{listItems}</ul>;
  }