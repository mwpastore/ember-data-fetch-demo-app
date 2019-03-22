import Model from 'ember-data/model';

import attr from 'ember-data/attr';

export default class ArticleModel extends Model {
  @attr('string') title;
}
