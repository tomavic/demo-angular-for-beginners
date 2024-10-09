import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  filteredList: Item[] = ITEMS_LIST_STATIC;
  searchInput = new FormControl();
  isTableView = true;
  allowedColumns = ALLOWED_COLUMNS;

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(debounceTime(300)).subscribe(searchInputValue => {
      this.filteredList = ITEMS_LIST_STATIC.filter(item =>
        item.title.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase())
      );
    });
  }

  toggleViews() {
    this.isTableView = !this.isTableView;
  }
}

export interface Item {
  title: string;
  subtitle: string;
  imgUrl?: string;
  description: string;
}

export const ITEMS_LIST_STATIC = [
  {
    title: 'Eiffel Tower',
    subtitle: 'Paris, France',
    imgUrl: 'https://example.com/eiffel-tower.jpg',
    description:
      'A wrought-iron lattice tower on the Champ de Mars in Paris, France. It is one of the most recognizable structures in the world.'
  },
  {
    title: 'Colosseum',
    subtitle: 'Rome, Italy',
    imgUrl: 'https://example.com/colosseum.jpg',
    description:
      'An oval amphitheatre in the centre of Rome, Italy. It was built of concrete and stone and could hold up to 80,000 spectators.'
  },
  {
    title: 'Taj Mahal',
    subtitle: 'Agra, India',
    imgUrl: 'https://example.com/taj-mahal.jpg',
    description:
      'A white marble mausoleum in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.'
  },
  {
    title: 'Great Wall of China',
    subtitle: 'China',
    imgUrl: 'https://example.com/great-wall-of-china.jpg',
    description:
      'A series of fortifications stretching across China. It was built over centuries to protect the Chinese Empire from invasion.'
  },
  {
    title: 'Chichen Itza',
    subtitle: 'Mexico',
    imgUrl: 'https://example.com/chichen-itza.jpg',
    description: 'A major archaeological site in Yucatán, Mexico. It was the capital of the ancient Maya civilization.'
  },
  {
    title: 'Petra',
    subtitle: 'Jordan',
    imgUrl: 'https://example.com/petra.jpg',
    description:
      'A historical and archaeological city in Jordan. It was the capital of the Nabatean kingdom from the 4th century BC to the 1st century AD.'
  },
  {
    title: 'Machu Picchu',
    subtitle: 'Peru',
    imgUrl: 'https://example.com/machu-picchu.jpg',
    description:
      'A pre-Columbian Inca site in Peru. It is located in the Cusco Region, above the Sacred Valley of the Incas.'
  },
  {
    title: 'Angkor Wat',
    subtitle: 'Cambodia',
    imgUrl: 'https://example.com/angkor-wat.jpg',
    description:
      'A temple complex in Cambodia. It is the largest religious monument in the world, on a site measuring 402 acres.'
  },
  {
    title: 'Christ the Redeemer',
    subtitle: 'Rio de Janeiro, Brazil',
    imgUrl: 'https://example.com/christ-the-redeemer.jpg',
    description:
      'A statue of Jesus Christ in Rio de Janeiro, Brazil. It is 30 meters tall and stands on top of Corcovado Mountain.'
  },
  {
    title: 'Golden Gate Bridge',
    subtitle: 'San Francisco, California, USA',
    imgUrl: 'https://example.com/golden-gate-bridge.jpg',
    description:
      'A suspension bridge in San Francisco, California. It is one of the most recognizable bridges in the world.'
  }
] satisfies Item[];

export const ALLOWED_COLUMNS = ['Title', 'Subtitle', 'Image', 'Description'];
