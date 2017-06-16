import {
  ContentItem, TextField, NumberField, DateTimeField,
  RichTextField, AssetsField, MultipleChoiceField
} from 'kentico-cloud-delivery-typescript-sdk';

import { Actor } from './actor.class';

export class Movie extends ContentItem {
  public title: TextField;
  public plot: RichTextField;
  public released: DateTimeField;
  public length: NumberField;
  public poster: AssetsField;
  public category: MultipleChoiceField;
  public stars: Actor[];

  constructor() {
    super({
      urlSlugResolver: (item, urlSlug) => {
        return 'testUrl/' + urlSlug;
      }
    })
  }

  getCategoriesText(): string {
    if (!this.category) {
      return null;
    }

    return this.category.options.map(m => m.name.toLocaleLowerCase()).join(', ');
  }

  getStarsText(): string {
    if (!this.stars) {
      return null;
    }
    return this.stars.map(actor => actor.getFullName()).join(', ');
  }
}

